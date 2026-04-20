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
const phoneInput = form.querySelector('input[type="tel"]');
const textarea = form.querySelector("textarea");


function isValidName(name) {
    return /^[A-Za-z\s'-]{2,50}$/.test(name.trim());
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

form.addEventListener("submit", async (event)=> {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const packageValue = packageSelect.value;
    const dateValue = dateInput.value;
    const phoneValue=phoneInput.value.trim()
    const notesValue = textarea.value.trim();

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
    if(!phoneValue){
        alert("please enter a phone number")
    }
    const bookingData = {
        name: nameValue,
        email: emailValue,
        package: packageValue,
        date: dateValue,
        phone: phoneValue,
        notes: notesValue
    };

    try {
        await axios.post(
            "https://lilannjeri.app.n8n.cloud/webhook-test/43b9ef10-83f8-40b6-9860-79588f63ed1c",
            bookingData
        );

        alert(`Thanks ${nameValue}! Your ${packageSelect.options[packageSelect.selectedIndex].text} booking request was received successfully.`);
        form.reset();
    } catch (error) {
        console.error("Error submitting booking:", error);
        alert("Something went wrong while submitting your booking.");
    }
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