//   export function setupShoppingCart() {
//     const body = document.querySelector('body');
//     const cartTab = document.getElementById('cart-tab');
//     const cartButton = document.getElementById('cart-btn');
//     const closeCartButton = document.getElementById('close-btn');

//     if (!cartButton || !body || !cartTab || !closeCartButton) return;

//     cartButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         const isOpen = cartTab.classList.toggle('open');
//         if (isOpen) {
//             cartTab.style.inset = '0 0 0 auto';
//             cartTab.style.transform = 'translateX(0)';
//         } else {
//             cartTab.style.inset = '0 -500px 0 auto';
//             cartTab.style.transform = '';
//         }
//     });

//     closeCartButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         cartTab.classList.remove('open');
//         cartTab.style.inset = '0 -500px 0 auto';
//         cartTab.style.transform = '';
//     });
// }