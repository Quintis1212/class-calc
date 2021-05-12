import Button from "./Components/Button";
import InputField from "./Components/InputField";
import ArifmetikButton from "./Components/ArifmetikButton";

export default class CalcView {
  constructor() {
    this.root = document.getElementById("app");
    this.numBtns = document.getElementById("num-buttons");
    this.arifmetik = document.getElementById("arifmetik");
    this.input = document.getElementById("input");
  }
  setButtons(num) {
    const calcButton = new Button(num, this.listener);
    this.numBtns.appendChild(calcButton.setButton());
  }
  setInput() {
    const calcInputField = new InputField(this.listener).setInputField();
    this.inputField = calcInputField;
    this.input.appendChild(calcInputField);
  }
  setArifmetikButtons(symbol) {
    const btnArf = new ArifmetikButton(symbol).setArifmetikButton();
    if (symbol === "DEL") {
      btnArf.addEventListener("click", this.deleteListener);
      this.arifmetik.appendChild(btnArf);
    } else if (symbol === "=") {
      btnArf.addEventListener("click", this.equalListener);
      this.arifmetik.appendChild(btnArf);
    } else {
      btnArf.addEventListener("click", this.listener);
      this.arifmetik.appendChild(btnArf);
    }
  }
  setInputValue(val) {
    this.inputField.value = val;
  }
}
