import { homePage } from './homepage.js';
import './style.css';

let createPage = (function () {
    // Background image
    const bgContainer = document.createElement('div');
    bgContainer.setAttribute('id', 'bg-container');

    // const backgroundImg = document.createElement('img');
    // backgroundImg.setAttribute('src', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/18/0/FNK_HOT_POT_AT_HOME_OPENER_H_f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1616107469470.jpeg');
    // backgroundImg.setAttribute('id', 'background-img');

    // Create entire page default layout
    const header = document.createElement('header');
    const navBar = document.createElement('nav');
    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');
    
    const contentDiv = document.createElement('div');
    const footer = document.createElement('footer');

    // bgContainer.appendChild(backgroundImg);
    document.body.append(header, contentDiv, footer, bgContainer);

    contentDiv.setAttribute('id', 'home-content');
    
    // Create Header children and adding classess
    const selectHeader = document.querySelector('header');
    selectHeader.appendChild(navBar);
    
    const selectNav = document.querySelector('nav');
    selectNav.append(homeTab, menuTab, contactTab)

    const navChildren = selectNav.childNodes;

    for (let i=0; i < navChildren.length; i++) {
        if (navChildren[i].nodeName.toLowerCase() == 'div') {
            navChildren[i].classList.add('heading-tab');
        }

        if(navChildren[i] == navChildren[0]) {
            navChildren[0].innerHTML = 'Home';
        } else if(navChildren[i] == navChildren[1]) {
            navChildren[1].innerHTML = 'Menu';
        } else {
            navChildren[2].innerHTML = 'Contact';
        }
    }
})();

homePage();