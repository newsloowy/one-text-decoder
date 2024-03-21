import charMapping from "../charMapping.js";

function removeAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encryptText(text) {
  let encryptedText = removeAccents(text).toLowerCase();

  charMapping.forEach((char) => {
    encryptedText = encryptedText.replaceAll(char.in, char.out);
  });
  return encryptedText;
}

export default encryptText;
