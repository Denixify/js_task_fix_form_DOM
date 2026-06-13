'use strict';

const formInputs = document.querySelectorAll('input');

function capitalize(text) {
  if (!text) {
    return '';
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

formInputs.forEach((input) => {
  const nameValue = input.name;
  const labelText = nameValue.toUpperCase();
  const placeholderText = capitalize(nameValue);

  input.placeholder = placeholderText;

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  input.parentElement.prepend(label);
});
