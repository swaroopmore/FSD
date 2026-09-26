const registrationForm = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");


registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;


    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must contain at least 3 characters.";
        isValid = false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }


    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Phone number must contain 10 digits.";
        isValid = false;
    }


    if (password === "") {
        passwordError.textContent = "Please enter a password.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must contain at least 6 characters.";
        isValid = false;
    }


    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }


    if (isValid) {
        successMessage.textContent = "Account created successfully!";
        registrationForm.reset();
    }
});