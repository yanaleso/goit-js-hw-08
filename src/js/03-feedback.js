import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

populateFormOutput();

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormOutput() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formRef.email.value = email;
        formRef.message.value = message;
        formData.email = email;
    formData.message = message;
    }
}