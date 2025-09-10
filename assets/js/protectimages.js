export function preventCopyImages(){
    document.addEventListener("contextmenu", (e) => {
        if (e.target.tagName == "IMG") {
            e.preventDefault();
        }
    });

    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("draggable", "false");
    });
}