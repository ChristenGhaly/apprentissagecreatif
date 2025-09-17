import { loadPartial } from './loadpartials.js';
import { showNavbar } from './navbar.js';
import { preventCopyImages } from './protectimages.js';
import { fullscreenDisplay } from './fullscreen.js';
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
        loadPartial('/partials/header.html', 'header'),
        loadPartial('/partials/footer.html', 'footer')
    ]);

    showNavbar();
    preventCopyImages();
    fullscreenDisplay();
    // setupShoppingCart();
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

$(".flipbook").turn({
    width: 1000,
    height: 400,
    autoCenter: true
});

document.getElementById('prevBtn').addEventListener('click', function() {
    $('.flipbook').turn('previous');
});

document.getElementById('nextBtn').addEventListener('click', function() {
    $('.flipbook').turn('next');
});

// document.getElementById("orderForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSd4BFaOcrOvYQWV0XD-n58QNU98Pw2Wl-qajnvKyDY2t3jGJw/formResponse?embedded=true", {
//     method: "POST",
//     body: new FormData(this)
//   })
//   .then(() => {
//     document.getElementById("orderForm").reset();
//     document.getElementById("successMessage").style.display = "block";
//   });
// });

// document.getElementById("contactForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const form = e.target;
//   const data = {
//     name: form.name.value,
//     email: form.email.value,
//     message: form.message.value
//   };

//   fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => response.json())
//   .then(res => {
//     if (res.result === "success") {
//       form.reset();
//       document.getElementById("formSuccess").style.display = "block";
//       document.getElementById("formError").style.display = "none";
//     } else {
//       document.getElementById("formError").style.display = "block";
//       document.getElementById("formSuccess").style.display = "none";
//     }
//   })
//   .catch(() => {
//     document.getElementById("formError").style.display = "block";
//     document.getElementById("formSuccess").style.display = "none";
//   });
// });


