import { removeAllChild, selectTab } from "./generalFN";

export function menuPage() {
    removeAllChild();
    selectTab(this);
    
    const homeContent = document.getElementById('content');
    
    homeContent.removeAttribute('class');
    homeContent.classList.add('menu-content');

    for (let i = 0; i < 7; i++) {
        let contentClasses = ['header', 'basic-head', 'basic-a', 'basic-b', 'premium-head', 'premium-a', 'premium-b'];
        const createDiv = document.createElement('div');
        homeContent.append(createDiv);

        const divContent = document.createElement('div');
        createDiv.append(divContent);
        
        createDiv.classList.add('menu', `${contentClasses[i]}`);
    }

    const menuHeader = document.querySelector('.menu.header > div');
    menuHeader.innerHTML = 'Menu';
}