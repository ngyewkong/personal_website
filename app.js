// get the sections
const sections = document.querySelectorAll('.section');
const buttonsContainer = document.querySelectorAll('.controls');
const buttons = document.querySelectorAll('.control');
const mainContentBody = document.querySelectorAll('.main-content');

function switchPages() {
    // buttons click active class
    // function remove and add active styling to button and section
    // which will show the clicked button section
    buttons.forEach(button => {
        button.addEventListener('click', clickNewActive);
    })

    mainContentBody.forEach(section => {
        section.addEventListener('click', showActivePage);
    })
}

function clickNewActive() {
    document.querySelector('.active-btn').classList.remove('active-btn');
    this.classList.add('active-btn');
}

function showActivePage(event) {
    // remove active class when event click is registered
    document.querySelector('.active').classList.remove('active');

    // check if event target dataset.id == section.id
    // add active to the section.id that match
    sections.forEach(section => {
        if (event.target.dataset.id == section.id) {
            section.classList.add('active');
            console.log(event.target.dataset.id);
            console.log(section.id);
        }
    })


}

switchPages()