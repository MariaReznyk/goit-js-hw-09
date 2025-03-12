const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

function formLastData(formData) {
  input.value = formData.email ?? '';
  textarea.value = formData.message ?? '';
}

formLastData(formData);

form.addEventListener('input', event => {
  if (event.target === input) {
    formData.email = event.target.value.trim();
  }
  if (event.target === textarea) {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() && textarea.value.trim()) {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
    event.currentTarget.reset();
  } else {
    alert('Fill please all fields');
  }
});
