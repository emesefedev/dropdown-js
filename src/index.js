import "./style.css";

const dropdownButton = () => document.getElementById("dropdown-button");

window.addEventListener("load", () => {
  dropdownButton().addEventListener("click", () => {
    console.log("Show / Hide options");
  });
});
