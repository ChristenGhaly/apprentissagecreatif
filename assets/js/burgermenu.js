export function setupBurgerMenu(burger_btn_id, burger_menu_id, burger_close_btn_id){
    const body = document.querySelector("body");
    const burger_btn = document.getElementById(burger_btn_id);
    const burger_menu = document.getElementById(burger_menu_id);
    const burger_close_btn = document.getElementById(burger_close_btn_id);

    if (!burger_btn || !burger_menu || !burger_close_btn) return;

    function openBurgerMenu() {
        burger_menu.classList.add("open");
        body.style.overflowY = "hidden";
        console.log("burger menu clicked");
    }
    
    function closeBurgerMenu() {
        burger_menu.classList.remove("open");
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