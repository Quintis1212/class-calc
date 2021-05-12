export default class InputField {
  constructor(listener) {
    this.listener = listener;
  }
  setInputField() {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "nymbers");
    inputField.setAttribute("id", "calc-input");
    inputField.setAttribute("readonly", "readonly");
    inputField.addEventListener("input", (e) => this.listener(e));
    return inputField;
  }
}
