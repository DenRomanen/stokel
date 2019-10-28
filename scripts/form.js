class ValidForm {
  validInput(name, error) {
    if (name.checkValidity()) {
      error.style.visibility = "hidden";
    } else {
      error.style.visibility = "visible";
    }
  }
  validFile(form, button, error) {
    const size = 10485760; // bytes
    let file = form.elements["upload"].files[0];
    if (file.size > size) {
      button.disabled = true;
      button.classList.add("btnDisabled");
      error.style.visibility = "visible";
    } else {
      button.disabled = false;
      button.classList.remove("btnDisabled");
      error.style.visibility = "hidden";
    }
  }
}

const form = document.forms.order;
const errorName = form.querySelector(".error-name");
const errorPhone = form.querySelector(".error-phone");
const errorFile = form.querySelector(".error-file");
const button = form.querySelector(".btn-12");

const validForm = new ValidForm();

form.addEventListener("input", event => {
  event.preventDefault();
  const name = form.elements.user_name;
  const phone = form.elements.user_phone;
  validForm.validInput(name, errorName);
  validForm.validInput(phone, errorPhone);
  validForm.validFile(form, button, errorFile);
});
