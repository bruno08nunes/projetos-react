import checkIsNameInvalid from "./modules/validation.js";

const buttons = document.querySelectorAll(".password button");
buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const inpPasswordId = button.getAttribute("data-type-input");
        const inpPassword = document.querySelector(`#${inpPasswordId}`);
        toggleTypePassword(inpPassword);
        inpPassword.focus();
    }),
);

const toggleTypePassword = (inpPassword) => {
    if (inpPassword.type === "password") {
        inpPassword.type = "text";
    } else {
        inpPassword.type = "password";
    }
};

const inputs = document.querySelectorAll("input");

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
};
