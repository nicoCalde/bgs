const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^\d{8,13}$/;
  return re.test(String(phone).toLowerCase());
};

const form = document.querySelector('form');
const thankYou = document.querySelector('.thankYou');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const subjectInput = document.querySelector('input[name="subject"]');

const inputFields = [nameInput, emailInput, phoneInput, subjectInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add('hidden');
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove('hidden');
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);
    resetElm(phoneInput);
    resetElm(subjectInput);
    
    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    };
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    };
    if (!isValidPhone(phoneInput.value)) {
        isFormValid = false;
        invalidateElm(phoneInput);
    };
    if (!subjectInput.value) {
        isFormValid = false;
        invalidateElm(subjectInput);
    };
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputFields.forEach((input) => {
    Input.addEventListener("input", () => {
    validateInputs();
    });
});