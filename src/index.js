import "./style.css";

const dropdownButton = () => document.getElementById("dropdown-button");
const dropdownOptions = () => document.getElementById("dropdown-options");

let dropdownOptionsVisible = false;
let selectedOption = null;

window.addEventListener("load", () => {
  dropdownButton().addEventListener("click", () => {
    showOrHideDropdownOptions();
  });

  const dropdownOptionsArray = dropdownOptions().children;

  for (const option of dropdownOptionsArray) {
    option.addEventListener("click", (event) => {
      selectDropdownOption(event.target);
    });
  }
});

function showDropdownOptions() {
  dropdownOptions().classList.remove("hidden");
}

function hideDropdownOptions() {
  dropdownOptions().classList.add("hidden");
}

function showOrHideDropdownOptions() {
  dropdownOptionsVisible = !dropdownOptionsVisible;
  if (dropdownOptionsVisible) {
    showDropdownOptions();
  } else {
    hideDropdownOptions();
  }
}

function selectDropdownOption(option) {
  showOrHideDropdownOptions();

  selectedOption = option;
  displaySelectedOption(selectedOption);
}

function displaySelectedOption(option) {
  dropdownButton().textContent = option.textContent;
}
