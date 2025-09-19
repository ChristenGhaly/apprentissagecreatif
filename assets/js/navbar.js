export function showNavbar() {
    const menu = document.getElementById('menu');
    if (!menu) return;
    
    window.onscroll = function(){
        if (window.pageYOffset > 100) {
            menu.style.background = '#3076aa';
        } else {
            menu.style.background = 'transparent';
        }
    };
}