import { loadPartial } from './loadpartials.js';
import { setupShoppingCart } from './shopingcart.js';

// Loading the header
//     fetch("partials/header.html")
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("header").innerHTML = data;
//     });

//     // Loading the footer
//     fetch("partials/footer.html")
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("footer").innerHTML = data;
//     })

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadPartial('partials/header.html', 'header'),
        loadPartial('partials/footer.html', 'footer')
    ]);

    setupShoppingCart();
});