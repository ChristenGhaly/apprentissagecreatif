import { loadPartial } from './loadpartials.js';
import { preventCopyImages } from './protectimages.js';
import { fullscreenDisplay } from './fullscreen.js';
import { initFlipbook } from './flipbook.js';
import { setupBurgerMenu } from './burgermenu.js';
import { switchLanguage } from './switchlang.js';

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadPartial('/partials/header.html', 'header'),
        loadPartial('/partials/footer.html', 'footer')
    ]);

    switchLanguage();
    setupBurgerMenu();
    preventCopyImages();
    fullscreenDisplay();
    initFlipbook();
});

AOS.init({
    once: false,
    easing: 'ease',
    offset: 20,
    duration: 1000
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
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                dots: false,
                arrows: false,
            }
        }
    ]
});

$('.laflammedalex-pages').slick({
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        }
    ]
});
