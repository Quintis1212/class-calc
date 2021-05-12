export default class CalcController {
  constructor(model, view) {
    this.model = new model();
    this.view = new view();
  }
  init() {
    this.view.listener = this.listener.bind(this);
    this.view.deleteListener = this.deleteListener.bind(this);
    this.view.equalListener = this.equalListener.bind(this);
    const [numberArray, arifmetikArray] = this.model.getData();
    this.arifmetikArray = arifmetikArray;
    this.view.setInput();
    numberArray.forEach((el) => {
      this.view.setButtons(el);
    });
    arifmetikArray.forEach((el) => {
      this.view.setArifmetikButtons(el);
    });
  }
  listener(e) {
    const value = e.target.value;
    this.model.setCalcData(value);
    const data = this.model.getCalcData();
    this.view.setInputValue(data);
    const [operations, args] = this.getOperationsAndArgs();
    if (operations.length === 2 && args[0]) {
      this.equalListener();
      this.model.setCalcData(value);
      const data = this.model.getCalcData();
      this.view.setInputValue(data);
    }
  }
  deleteListener() {
    const data = this.model.deleteCalcData();
    this.view.setInputValue(data);
  }
  getOperationsAndArgs() {
    const data = this.model.getCalcData() || "";
    const operations = data.split(/\d/gi).filter((el) => el && el !== ".");
    const args = data.split(/[+*/-]/gi);
    return [operations, args];
  }

  equalListener() {
    const [operations, args] = this.getOperationsAndArgs();
    const firstOperand = operations[0];
    let [firstArg, secondArg] = args;
    firstArg = parseFloat(firstArg);
    secondArg = parseFloat(secondArg);
    let result = "";
    switch (true) {
      case firstOperand === "-":
        result = firstArg - secondArg;
        break;
      case firstOperand === "+":
        result = firstArg + secondArg;
        break;
      case firstOperand === "/":
        result = firstArg / secondArg;
        break;
      case firstOperand === "*":
        result = firstArg * secondArg;
        break;
      default:
        break;
    }
    this.model.deleteCalcData();
    this.model.setCalcData(result);
    this.view.setInputValue(result);
  }
}
