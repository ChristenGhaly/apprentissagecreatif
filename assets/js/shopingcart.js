  export function setupShoppingCart() {
    const body = document.querySelector('body');
    const cartTab = document.getElementById('cart-tab');
    const cartButton = document.getElementById('cart-btn');
    const closeCartButton = document.getElementById('close-btn');

    if (!cartButton || !body) return;

    cartButton.addEventListener('click', (e) => {
        e.preventDefault();
        cartTab.style.inset = '0 0 0 auto';
        cartTab.style.transform = 'translateX(0)';
    });

    if (closeCartButton) {
        closeCartButton.addEventListener('click', (e) => {
            e.preventDefault();
            cartTab.style.inset = '0 -500px 0 auto';
        });
    }
}