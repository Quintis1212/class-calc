import CalcController from "./CalcController/CalcController";
import CalcModel from "./CalcModel/CalcModel";
import CalcView from "./CalcView/CalcView";

const init = new CalcController(CalcModel, CalcView);
init.init();
