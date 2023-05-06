const container = document.querySelector('.container');
const signInLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.close-i');


signUpLink.addEventListener('click', () => {
    container.classList.add('active');
});

signInLink.addEventListener('click', () => {
    container.classList.remove('active');
});

btnLogin.addEventListener('click', () => {
    container.classList.add('active-popup');
});

btnClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
});
