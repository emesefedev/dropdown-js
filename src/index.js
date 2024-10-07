import "./style.css";

const dropdownButton = () => document.getElementById("dropdown-button");
const dropdownOptions = () => document.getElementById("dropdown-options");

let dropdownOptionsVisible = false;

window.addEventListener("load", () => {
  dropdownButton().addEventListener("click", () => {
    dropdownOptionsVisible = !dropdownOptionsVisible;
    if (dropdownOptionsVisible) {
      showDropdownOptions();
    } else {
      hideDropdownOptions();
    }
  });
});

function showDropdownOptions() {
  dropdownOptions().classList.remove("hidden");
}

function hideDropdownOptions() {
  dropdownOptions().classList.add("hidden");
}
