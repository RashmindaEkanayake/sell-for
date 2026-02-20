import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const CheckoutSchema = z.object({
    items: z.array(z.object({
        bookId: z.string(),
        qty: z.number().min(1),
    })),
    customer: z.object({
        name: z.string(),
        email: z.string().email(),
    }),
    couponCode: z.string().optional(),
});

export const checkout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = CheckoutSchema.parse(req.body);

        const bookIds = body.items.map(i => i.bookId);
        const books = await prisma.book.findMany({
            where: { id: { in: bookIds } }
        });

        if (books.length !== bookIds.length) {
            throw new Error('One or more books not found');
        }

        let subtotal = 0;
        const orderItemsData = body.items.map(item => {
            const book = books.find(b => b.id === item.bookId)!;
            subtotal += book.price * item.qty;
            return {
                bookId: item.bookId,
                qty: item.qty,
                unitPrice: book.price
            };
        });

        const shipping = 5.0; // Flat rate
        let discount = 0;
        if (body.couponCode === 'SAVE10') {
            discount = subtotal * 0.1;
        }

        const total = subtotal + shipping - discount;

        const order = await prisma.order.create({
            data: {
                customerName: body.customer.name,
                customerEmail: body.customer.email,
                subtotal,
                discount,
                shipping,
                total,
                items: {
                    create: orderItemsData
                }
            },
            include: {
                items: true
            }
        });

        res.json({
            data: {
                order,
                totals: {
                    subtotal,
                    discount,
                    shipping,
                    total
                }
            },
            error: null
        });

    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ data: null, error: { message: err.errors[0].message } });
        }
        next(err);
    }
};

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const order = await prisma.order.findUnique({
            where: { id },
            include: { items: { include: { book: true } } }
        });

        if (!order) {
            return res.status(404).json({ data: null, error: { message: 'Order not found' } });
        }

        res.json({ data: order, error: null });
    } catch (err) {
        next(err);
    }
};
