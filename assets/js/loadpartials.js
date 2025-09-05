export async function loadPartial(url, selector) {
    const response = await fetch(url);
    const html = await response.text();
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
    return element;
}