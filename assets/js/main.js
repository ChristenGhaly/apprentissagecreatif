import { loadPartial } from './loadpartials.js';
// import { setupShoppingCart } from './shopingcart.js';

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

    // setupShoppingCart();
    AOS.init({
        once: false,
        easing: 'ease',
        offset: 20,
        duration: 1000
    });
});

$('.all-publication').slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
