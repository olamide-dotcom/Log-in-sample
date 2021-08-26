const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const errorElement = document.getElementById('error')

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  let messages = []
  if (Name.value === '' || Name.value == null) {
    messages.push('Username is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  e.preventDefault()
})
