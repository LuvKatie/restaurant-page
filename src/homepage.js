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
}