function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

let button = document.querySelector(".theme-button");

button.addEventListener("click", changeTheme);
const form = document.querySelector(".booking-form");
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const packageSelect = form.querySelector("select");
const dateInput = form.querySelector('input[type="date"]');
const textarea = form.querySelector("textarea");

function isValidName(name) {
    return /^[A-Za-z\s'-]{2,50}$/.test(name.trim());
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

form.addEventListener("submit",  (event)=> {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const packageValue = packageSelect.value;
    const dateValue = dateInput.value;

    if (!isValidName(nameValue)) {
        alert("Please enter a valid name using letters only.");
        nameInput.focus();
        return;
    }

    if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    if (!packageValue) {
        alert("Please choose a package.");
        packageSelect.focus();
        return;
    }

    if (!dateValue) {
        alert("Please choose a class date.");
        dateInput.focus();
        return;
    }

    alert(`Thanks ${nameValue}! Your ${packageSelect.options[packageSelect.selectedIndex].text} booking request was received successfully.`);

    form.reset();
});

let heroTitle = document.querySelector(".typing-text");
let text = "Come dance Kizomba";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();