export function setupBurgerMenu(){
    const body = document.querySelector("body");
    const header = document.getElementById("header");
    const burger_btn = document.getElementById("burger-btn-id");
    const burger_menu = document.getElementById("burger-menu-id");
    const burger_close_btn = document.getElementById("burger-close-btn-id");

    if (!burger_btn || !burger_menu || !burger_close_btn || !header) return;

    function openBurgerMenu() {
        // header.classList.add("open");
        burger_close_btn.style.display = "block";
        burger_menu.style.display = "block";
        burger_btn.style.display = "none";
        body.style.overflowY = "hidden";
    }
    
    function closeBurgerMenu() {
        // header.classList.remove("open");
        burger_close_btn.style.display = "none";
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
