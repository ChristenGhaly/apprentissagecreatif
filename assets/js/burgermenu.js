export function setupBurgerMenu(){
    const body = document.querySelector("body");
    const upper_menu = document.getElementById("upper-menu");
    const burger_btn = document.getElementById("burger-btn-id");
    const burger_menu = document.getElementById("burger-menu-id");
    const burger_close_btn = document.getElementById("burger-close-btn-id");

    if (!burger_btn || !burger_menu || !burger_close_btn || !upper_menu) return;

    function openBurgerMenu() {
        // burger_menu.classList.add("open");
        burger_menu.style.display = "block";
        burger_btn.style.display = "none";
        body.style.overflowY = "hidden";
    }
    
    function closeBurgerMenu() {
        // burger_menu.classList.remove("open");
        burger_menu.style.display = "none";
        burger_btn.style.display = "block";
        body.style.overflowY = "visible";
    }

    burger_btn.addEventListener('click', openBurgerMenu);
    burger_close_btn.addEventListener('click', closeBurgerMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768){
            closeBurgerMenu();
        }
    });
}
