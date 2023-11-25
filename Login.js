// Login.js

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const closeBtn = document.getElementById('closeBtn');
const signUpForm = document.querySelector('.form-container.sign-up form');
const signInForm = document.querySelector('.form-container.sign-in form');

registerBtn.addEventListener('click', () => {
    toggleActiveState();
    resetForm(signUpForm);
});

loginBtn.addEventListener('click', () => {
    toggleActiveState();
    resetForm(signInForm);
});

closeBtn.addEventListener('click', () => {
    toggleActiveState();
});

document.getElementById('register').addEventListener('click', function () {
    document.getElementById('container').classList.toggle('slide');
});

// Signup Popup
const openSignupPopupBtn = document.getElementById('openSignupPopup');
const signupPopupContainer = document.getElementById('signup-popup-container');
const closeSignupBtn = document.getElementById('closeSignupBtn');

openSignupPopupBtn.addEventListener('click', () => {
    togglePopupVisibility(signupPopupContainer, 'block');
});

closeSignupBtn.addEventListener('click', () => {
    togglePopupVisibility(signupPopupContainer, 'none');
});

function toggleActiveState() {
    container.classList.toggle("active");
}

function resetForm(form) {
    form.reset();
}

function togglePopupVisibility(popup, displayValue) {
    popup.style.display = displayValue;
}
