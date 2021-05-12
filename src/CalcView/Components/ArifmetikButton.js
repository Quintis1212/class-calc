export default class ArifmetikButton {
  constructor(symbol) {
    this.symbol = symbol;
  }
  setArifmetikButton() {
    const btnArf = document.createElement("button");
    const innerText = document.createTextNode(" " + this.symbol + " ");
    btnArf.appendChild(innerText);
    btnArf.setAttribute("class", "arifmetik-btn");
    btnArf.setAttribute("value", this.symbol);
    return btnArf;
  }
}
