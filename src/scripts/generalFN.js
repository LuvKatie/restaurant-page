export function removeAllChild() {
    const homeContent = document.getElementById('content');
    const contentLength = homeContent.childNodes.length;
    for (let i = 0; i < contentLength; i++) {
        homeContent.firstChild.remove();
    }
}

export function selectTab(tab) {
    const navBar = document.querySelectorAll('nav > div');
    if (tab.classList.contains('selected')) {
        return;
    } else {
        navBar.forEach(div => {
            div == tab ? tab.classList.add('selected') : div.classList.remove('selected');
        })
    }
}