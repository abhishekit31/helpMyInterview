const wrapper = document.querySelector(".wrapper");
const loginButton = document.getElementById("loginButton");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const closeIcon = document.getElementById("closeIcon");

function showLoginForm() {
  wrapper.style.display = "flex";
  loginForm.style.display = "block";
  registerForm.style.display = "none";
}
function showRegistrationForm() {
  wrapper.style.display = "flex";
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}
function closeForm() {
  wrapper.style.display = "none";
}

loginButton?.addEventListener("click", (e) => {
  e.preventDefault();
  showLoginForm();
});

loginLink?.addEventListener("click", (e) => {
  e.preventDefault();
  showLoginForm();
});

registerLink?.addEventListener("click", (e) => {
  e.preventDefault();
  showRegistrationForm();
});

closeIcon.addEventListener("click", closeForm);
