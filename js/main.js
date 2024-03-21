import encryptText from './functions/encryptText.js';
import decryptText from './functions/decryptText.js';

const textarea = document.querySelector('#decoder__form__textarea');

const encryptButton = document.querySelector('.decoder__button--encrypt');
const decryptButton = document.querySelector('.decoder__button--decrypt');

const toggleThemeButton = document.querySelector('.header__button');

const output = document.querySelector('.decoder__result__output');

const noResult = document.querySelector('.decoder__result--no-result');
const withResult = document.querySelector('.decoder__result--with-result');

const copyButton = document.querySelector('.decoder__result__button');

function isTextareaNotEmpty() {
  return textarea.value !== '' ? true : alert('O campo não pode estar vázio!');
}

function displayResult(text) {
  if (isTextareaNotEmpty()) {
    noResult.style.display = 'none';
    withResult.style.display = 'flex';

    output.innerHTML = text;
    textarea.value = '';
  }
}

toggleThemeButton.onclick = () => document.body.classList.toggle('dark');

encryptButton.onclick = () => {
  let encryptedText = encryptText(textarea.value);
  displayResult(encryptedText);
};

decryptButton.onclick = () => {
  let decryptedText = decryptText(textarea.value);
  displayResult(decryptedText);
};

copyButton.onclick = () => {
  navigator.clipboard.writeText(output.textContent);
  copyButton.textContent = 'Copiado!';
  setTimeout(() => {
    copyButton.textContent = 'Copiar';
  }, 1500);
};
