import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { q, category, minPrice, maxPrice, minRating, sort, page = '1', limit = '10' } = req.query;

        const skip = (Number(page) - 1) * Number(limit);
        const take = Number(limit);

        let where: any = {};

        if (q) {
            where.OR = [
                { title: { contains: String(q) } },
                { author: { contains: String(q) } },
            ];
        }

        if (category && category !== 'all') {
            where.category = String(category);
        }

        if (minPrice || maxPrice) {
            where.price = {};
            if (minPrice) where.price.gte = Number(minPrice);
            if (maxPrice) where.price.lte = Number(maxPrice);
        }

        if (minRating) {
            where.rating = { gte: Number(minRating) };
        }

        let orderBy: any = {};
        if (sort === 'price_asc') orderBy = { price: 'asc' };
        else if (sort === 'price_desc') orderBy = { price: 'desc' };
        else if (sort === 'rating_desc') orderBy = { rating: 'desc' };
        else if (sort === 'newest') orderBy = { createdAt: 'desc' };
        else orderBy = { createdAt: 'desc' };

        const [books, total] = await Promise.all([
            prisma.book.findMany({
                where,
                orderBy,
                skip,
                take,
            }),
            prisma.book.count({ where }),
        ]);

        res.json({
            data: {
                books,
                pagination: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    totalPages: Math.ceil(total / Number(limit)),
                },
            },
            error: null,
        });
    } catch (err) {
        next(err);
    }
};

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const book = await prisma.book.findUnique({
            where: { id },
        });

        if (!book) {
            return res.status(404).json({ data: null, error: { message: 'Book not found' } });
        }

        res.json({ data: book, error: null });
    } catch (err) {
        next(err);
    }
};
