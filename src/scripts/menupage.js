export function removeAllChild() {
    const homeContent = document.getElementById('content');
    const contentLength = homeContent.childNodes.length;
    for (let i = 0; i < contentLength; i++) {
        homeContent.firstChild.remove();
    }
}

export function menuPage() {
    removeAllChild();
    
    const homeContent = document.getElementById('content');
    
    homeContent.classList.remove('home-content');
    homeContent.classList.add('menu-content');

    this.classList.add('selected');

    for (let i = 0; i < 7; i++) {
        const createDiv = document.createElement('div');
        homeContent.append(createDiv);

        const divContent = document.createElement('div');
        createDiv.append(divContent);
        
        createDiv.classList.add('menu');
    }

    let menuContentClasses = ['header', 'basic-head', 'basic-a', 'basic-b', 'premium-head', 'premium-a', 'premium-b'];

    for (let i = 0; i < homeContent.childNodes.length; i++) {
        homeContent.childNodes[i].classList.add(menuContentClasses[i]);
    }
}