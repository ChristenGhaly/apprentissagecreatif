export function fullscreenDisplay() {
    const fullscreen_window = document.getElementById("book-fullscreen");
    const fullscreen_btn = document.getElementById("fullscreen-btn");
    const close_btn = document.getElementById("close-btn");

    fullscreen_btn.addEventListener("click", () => {
        fullscreen_window.style.display = "block";
    });

    close_btn.addEventListener("click", () => {
        fullscreen_window.style.display = "none";
    });
}