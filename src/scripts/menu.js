export function menuPage() {
    const homeContent = document.getElementById('home-content');
    const contentLength = homeContent.childNodes.length;
    for (let i = 0; i < contentLength; i++) {
        homeContent.firstChild.remove();
    }

    homeContent.style.backgroundColor = 'lightcoral';

    this.classList.add('selected');
}