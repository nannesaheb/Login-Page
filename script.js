const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const btnPopup = document.querySelector(".login-button");
const exitPopup = document.querySelector(".exit");

register.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 
login.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
}); 
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
}); 
exitPopup.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
}); 