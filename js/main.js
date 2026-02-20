// Shared UI Logic
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dynamic Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg', 'bg-white/90', 'dark:bg-slate-900/90');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/90', 'dark:bg-slate-900/90');
        }
    });
});
