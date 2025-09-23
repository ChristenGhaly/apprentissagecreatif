export function switchLanguage (){
    document.querySelectorAll(".lang-switch").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const currentPath = window.location.pathname;

            if (btn.dataset.lang === "fr") {
                if (currentPath.startsWith("/en/")) {
                    const newPath = currentPath.replace("/en/", "/");
                    window.location.href = newPath;
                } else {
                    window.location.href = currentPath;
                }
            }

            if (btn.dataset.lang === "en") {
                if (!currentPath.startsWith("/en/")) {
                    const newPath = "/en" + currentPath;
                    window.location.href = newPath;
                } else {
                    window.location.href = currentPath;
                }
            }
        });
    });
}