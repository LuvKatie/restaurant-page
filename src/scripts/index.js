import { homePage } from './homepage.js';
import { menuPage } from './menupage.js';
import '../styles/style.css';
import '../styles/homepage.css';
import '../styles/menupage.css';
import '../styles/contactpage.css';

let createPage = (function () {
    // Background image
    const bgContainer = document.createElement('div');
    bgContainer.setAttribute('id', 'bg-container');

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

    contentDiv.setAttribute('id', 'content');
    
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
            navChildren[0].classList.add('home-tab');
        } else if(navChildren[i] == navChildren[1]) {
            navChildren[1].innerHTML = 'Menu';
            navChildren[1].classList.add('menu-tab');
        } else {
            navChildren[2].innerHTML = 'Contact';
            navChildren[2].classList.add('contact-tab');
        }
    }

    // Hook event listeners for each tab on Header
    const menuSelect = document.querySelector('.menu-tab');
    menuSelect.addEventListener('click', menuPage);

    // Footer credit
    // <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by amonrat rungreangfangsai - Flaticon</a>
})();

homePage();