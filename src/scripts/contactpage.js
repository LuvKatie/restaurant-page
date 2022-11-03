import { removeAllChild, selectTab } from "./generalFN";

export function contactPage() {
    removeAllChild();
    selectTab(this);

    const contactContent = document.getElementById('content');
    
    contactContent.removeAttribute('class');
    contactContent.classList.add('contact-content');
    
    for (let i = 0; i < 3; i++) {
        let contentClasses = ['contact-header', `contact-${i}`, `contact-${i}`];
        const createDiv = document.createElement('div');
        contactContent.append(createDiv);
        createDiv.classList.add(contentClasses[i]);

        const divContent = document.createElement('div');
        createDiv.append(divContent);
    }

    const contactHeader = document.querySelector('.contact-header > div');
    contactHeader.innerHTML = 'Contacts';
}