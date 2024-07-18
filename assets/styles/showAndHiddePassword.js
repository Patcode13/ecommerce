// Masquer/demasquer password

const eyeOn = document.querySelector('.eye-on');
const eyeOff = document.querySelector('.eye-off');
const inputPassword = document.querySelector('#inputPassword');

eyeOn.addEventListener('click', () =>{
    eyeOn.computedStyleMap.display = "none";
    eyeOff.computedStyleMap.display = "block";
    inputPassword.type = "text";
});

eyeOff.addEventListener('click', () =>{
    eyeOff.computedStyleMap.display = "none";
    eyeOn.computedStyleMap.display = "block";
    inputPassword.type = "password";
});