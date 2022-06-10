// modal for all service pages (pop-up contact screen)

// modal items 
const modal = document.getElementById('emailModal');
const openBtn = document.querySelector('.mainBtn');
const closeBtn = document.querySelector('.closeBtn');

// click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (i) => {
    if(i.target === modal){
        modal.style.display = 'none';
    }
});

// form validation
const form = document.getElementById('form');
const name = document.getElementById('modalName');
const email = document.getElementById('modalEmail');
const phone = document.getElementById('modalPhone');
const subject = document.getElementById('modalSubject');

// show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'formValidation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'formValidation valid';
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `Se requiere un ${getFieldName(input)}`);
        } else{
            showValid(input);
        }
    });
};

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `El ${getFieldName(input)} tiene que tener al menos ${min} caráteres`);
    } else if(input.value.length > max) {
        showError(input, `El ${getFieldName(input)} tiene que ser menor a ${max} caráteres`);
    } else {
        showValid(input);
    }
}

// get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, phone, subject]);
    checkLength(name, 3, 30);
    checkLength(phone, 8, 18);

});
