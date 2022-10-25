export function homePage() {
    const homeContent = document.getElementById('home-content');
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

    // https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/03/18/0/FNK_HOT_POT_AT_HOME_OPENER_H_f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1616107469470.jpeg
}