import HotPot from '../hot-pot.png';

export function homePage() {
    const selectContent = document.getElementById('content');

    selectContent.classList.add('home-content');

    const homeContent = document.querySelector('.home-content');
    const homeHeader = document.createElement('div');
    const homeDesc = document.createElement('div');
    const homeHours = document.createElement('div');
    const homeLocation = document.createElement('div');

    
    [homeHeader, homeDesc, homeHours, homeLocation].forEach(e => {
        e.classList.add('home');
    });
    
    homeHeader.classList.add('header');
    homeDesc.classList.add('desc');
    homeHours.classList.add('hours');
    homeLocation.classList.add('location');
    
    homeContent.append(homeHeader, homeDesc, homeHours, homeLocation);
    
    for (let i = 0; i < homeContent.childNodes.length; i++) {
        const homeContentContainer = document.createElement('div');
        homeContent.childNodes[i].appendChild(homeContentContainer)
        homeContentContainer.classList.add(`home${i + 1}`);
    }
    
    // Header on ' Home ' with image
    const homeHeaderSelect = document.querySelector('.home1');
    const homeHeaderH1 = document.createElement('h1');

    const hotpotIcon = new Image(50, 50);
    hotpotIcon.src = HotPot;

    homeHeaderH1.innerHTML = 'Katie and Tony\'s Hot Pot';

    homeHeaderSelect.append(homeHeaderH1, hotpotIcon);
}