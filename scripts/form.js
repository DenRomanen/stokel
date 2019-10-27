class ValidForm {
  validInput(name, error) {
    if (name.checkValidity()) {
      error.style.visibility = "hidden";
      console.log("all is ok");
    } else {
      error.style.visibility = "visible";
    }
  }
}

const form = document.forms.order;
const errorName = form.querySelector(".error-name");
const errorPhone = form.querySelector(".error-phone");

const validForm = new ValidForm();

form.addEventListener("input", event => {
  event.preventDefault();
  const name = form.elements.user_name;
  const phone = form.elements.user_phone;
  validForm.validInput(name, errorName);
  validForm.validInput(phone, errorPhone);
});
