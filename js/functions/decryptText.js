import charMapping from "../charMapping.js";

function decryptText(text) {
  let decryptedText = text.toLowerCase();

  charMapping.forEach((char) => {
    decryptedText = decryptedText.replaceAll(char.out, char.in);
  });
  return decryptedText;
}

export default decryptText;
