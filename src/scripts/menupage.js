import { removeAllChild, selectTab } from "./generalFN";

export function menuPage() {
    removeAllChild();
    selectTab(this);
    
    const homeContent = document.getElementById('content');
    
    homeContent.removeAttribute('class');
    homeContent.classList.add('menu-content');

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

    const menuHeader = document.querySelector('.menu.header > div');
    menuHeader.innerHTML = 'Menu';
}