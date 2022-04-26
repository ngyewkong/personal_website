// get the sections
const sections = document.querySelectorAll(".section");
const buttonsContainer = document.querySelectorAll(".controls");
const buttons = document.querySelectorAll(".control");
const mainContentBody = document.querySelectorAll(".main-content");
const toggle = document.querySelector(".theme-btn");

function switchPages() {
  // buttons click active class
  // function remove and add active styling to button and section
  // which will show the clicked button section
  buttons.forEach((button) => {
    button.addEventListener("click", clickNewActive);
  });

  mainContentBody.forEach((section) => {
    section.addEventListener("click", showActivePage);
  });

  // handle toggle light/dark mode
  toggle.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

function clickNewActive(event) {
  document.querySelector(".active-btn").classList.remove("active-btn");
  this.classList.add("active-btn");
  // remove active class when event button click is registered
  document.querySelector(".active").classList.remove("active");
}

function showActivePage(event) {
  console.log(event.target);

  // check if event target dataset.id == section.id
  // add active to the section.id that match
  sections.forEach((section) => {
    if (event.target.dataset.id == section.id) {
      section.classList.add("active");
    }
  });
}

// handle submit form
function submitForm() {
  document.getElementById("contact-form").submit();
}

switchPages();
