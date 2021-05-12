export default class Button {
  constructor(number, listener) {
    this.number = number;
    this.listener = listener;
  }
  setButton() {
    const btn = document.createElement("button");
    const innerText = document.createTextNode(" " + this.number + " ");
    btn.appendChild(innerText);
    btn.setAttribute("class", "num-btn");
    btn.setAttribute("value", this.number);
    btn.addEventListener("click", this.listener);
    return btn;
  }
}
