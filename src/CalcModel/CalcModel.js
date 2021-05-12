export default class CalcModel {
  constructor() {
    this.numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
    this.arifmetikArray = ["+", "/", "-", "*", "=", "DEL"];
  }
  getData() {
    return [this.numberArray, this.arifmetikArray];
  }
  setCalcData(data) {
    this.calcData = (this.calcData || "") + data;
  }
  getCalcData() {
    return this.calcData;
  }
  deleteCalcData() {
    this.calcData = "";
    return this.calcData;
  }
}
