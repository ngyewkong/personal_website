// get the sections
const sections = document.querySelectorAll('.section');
const buttonsContainer = document.querySelectorAll('.controls');
const buttons = document.querySelectorAll('.control');
const mainContent = document.querySelectorAll('.main-content');

function switchPages() {
    // Buttons click active class
    buttons.forEach(button => {
        button.addEventListener('click', clickNewActive);
    })
}

function clickNewActive() {
    document.querySelector('.active-btn').classList.remove('active-btn');
    this.classList.add('active-btn');
}

switchPages()