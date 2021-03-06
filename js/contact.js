const form = document.querySelector("form");
const name = document.querySelector("#name-field");
const email = document.querySelector("#email-field");
const subject = document.querySelector("#subject-field");
const message = document.querySelector("#message");
const submitBtn = document.querySelector(".cta");
const headingOne = document.querySelector("h1");
const headingTwo = document.querySelector("h2");
const successMessage = document.querySelector(".success-message");

function validateForm(event) {
  event.preventDefault();

  if (checkLengths(name.value, 6)) {
    name.previousElementSibling.classList.add("warning");
    document.querySelector("#name-field").focus();
    return false;
  }

  if (!checkEmail(email.value)) {
    email.previousElementSibling.classList.add("warning");
    document.querySelector("#email-field").focus();
    return false;
  }

  if (checkLengths(subject.value, 16)) {
    subject.previousElementSibling.classList.add("warning");
    document.querySelector("#subject-field").focus();
    return false;
  }

  if (checkLengths(message.value, 26)) {
    message.previousElementSibling.classList.add("warning");
    document.querySelector("#message").focus();
    return false;
  }

  if (checkLengths && checkEmail) {
    submitForm();
  }
}

form.addEventListener("submit", validateForm);

name.addEventListener("keyup", () => {
  if (!checkLengths(name.value, 6)) {
    name.previousElementSibling.classList.remove("warning");
  }
});

email.addEventListener("keyup", () => {
  if (!checkEmail(email.value)) {
    email.previousElementSibling.classList.remove("warning");
  }
});

message.addEventListener("keyup", () => {
  if (!checkLengths(message.value, 26)) {
    message.previousElementSibling.classList.remove("warning");
  }
});

subject.addEventListener("keyup", () => {
  if (!checkLengths(subject.value, 16)) {
    subject.previousElementSibling.classList.remove("warning");
  }
});

function submitForm() {
  const userName = name.value;
  headingOne.style.display = "none";
  headingTwo.style.display = "none";
  form.style.display = "none";
  successMessage.innerHTML = `<p>Thank you, ${userName}.</p>
                                <p>Your message has been sent</p>
                                <a href="https://fitfactory-noroff-project.netlify.app/pages/contact.html"<i class="fas fa-caret-square-left"></i></a>`;
}

function checkLengths(val, len) {
  if (val.trim().length < len) {
    return true;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const regExMatches = regEx.test(email);
  return regExMatches;
}
