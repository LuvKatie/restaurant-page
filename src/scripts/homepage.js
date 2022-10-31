import HotPot from '../hot-pot.png';
import { selectTab, removeAllChild } from './generalFN';

export function homePage() {
    const selectContent = document.getElementById('content');
    const selectHome = document.querySelector('.home-tab');
    
    removeAllChild();
    selectContent.removeAttribute('class');
    selectContent.classList.add('home-content');
    
    const homeContent = document.querySelector('.home-content');

    for (let i = 0; i < 4; i++) {
        let contentClasses = ['header', 'desc', 'hours', 'location'];
        const createDiv = document.createElement('div');
        homeContent.append(createDiv);

        createDiv.classList.add('home', `${contentClasses[i]}`);

        const divContent = document.createElement('div');
        createDiv.append(divContent);
        
        divContent.classList.add(`home${i + 1}`);
    }
    
    // Header on ' Home ' with image
    const homeHeaderSelect = document.querySelector('.home1');
    const homeHeaderH1 = document.createElement('h1');
    
    const hotpotIcon = new Image(50, 50);
    hotpotIcon.src = HotPot;
    
    homeHeaderH1.innerHTML = 'Katie and Tony\'s Hot Pot';
    
    homeHeaderSelect.append(homeHeaderH1, hotpotIcon);

    if (!selectHome.classList.contains('selected')) {
        const navBar = document.querySelectorAll('nav > div');
        navBar.forEach(div => {
            div == selectHome ? selectHome.classList.add('selected') : div.classList.remove('selected');
        })
    }

}