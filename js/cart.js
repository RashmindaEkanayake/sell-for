// Cart Functionality
let cart = JSON.parse(localStorage.getItem('sellForCart')) || [];

function saveCart() {
    localStorage.setItem('sellForCart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    saveCart();
    alert(`${book.title} added to cart!`);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    renderCart();
}

function updateQuantity(bookId, delta) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Initial update
document.addEventListener('DOMContentLoaded', updateCartBadge);
