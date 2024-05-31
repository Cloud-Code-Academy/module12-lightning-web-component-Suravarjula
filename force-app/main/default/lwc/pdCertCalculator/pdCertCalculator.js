import { LightningElement, track } from 'lwc';

const devFundamentalsWeight = 0.23;
const processAutomationWeight = 0.3;
const userInterfaceWeight = 0.25;
const testDebugDeployWeight = 0.22;


export default class PdCertCalculator extends LightningElement {
    calculatedScore = 0;
    devFundamentalsScore = 0;
    processAutomationScore = 0;
    userInterfaceScore = 0;
    testDebugDeployScore = 0;
    @track devFundamentsValidationError = false;
    @track processAutomationValidationError = false;
    @track userInterfaceValidationError = false;
    @track testDebugDeployValidationError = false;
    @track scoreCalculationError = false;
    @track ERROR_MESSAGE = "Please enter a number between 0 and 100 (both inclusive)";
    @track SCORE_CALC_ERROR = "Please fix invalid scores before calculating the final score";

    handleChange(event) {
        let inputValue = Number(event.target.value);
        if(event.target.name === "devFundamentals") { 
            if (inputValue < 0 || inputValue > 100) {
                this.devFundamentalsScore = 0;
                this.devFundamentsValidationError = true;
            }
            else {
                this.devFundamentalsScore = inputValue;
                this.devFundamentsValidationError = false;
            }
        }
        else if(event.target.name === "processAutomationLogic") {
            if (inputValue < 0 || inputValue > 100) {
                this.processAutomationScore = 0;
                this.processAutomationValidationError = true;
            }
            else {
                this.processAutomationScore = inputValue;
                this.processAutomationValidationError = false;
            }
        }
        else if(event.target.name === "userInterface") {
            if (inputValue < 0 || inputValue > 100) {
                this.userInterfaceScore = 0;
                this.userInterfaceValidationError = true;
            }
            else {
                this.userInterfaceScore = inputValue;
                this.userInterfaceValidationError = false;
            }
        }
        else if(event.target.name === "testDebugDeploy") {
            if (inputValue < 0 || inputValue > 100) {
                this.testDebugDeployScore = 0;
                this.testDebugDeployValidationError = true;
            }
            else {
                this.testDebugDeployScore = inputValue;
                this.testDebugDeployValidationError = false;
            }
        }
    }

    calculateScore() {
        if(!(this.devFundamentsValidationError || this.processAutomationValidationError || this.userInterfaceValidationError || this.testDebugDeployValidationError)) {
            this.calculatedScore = this.devFundamentalsScore * devFundamentalsWeight + this.processAutomationScore * processAutomationWeight + 
                                this.userInterfaceScore * userInterfaceWeight + this.testDebugDeployScore * testDebugDeployWeight;
            this.scoreCalculationError = false;
        }
        else {
            this.scoreCalculationError = true;
            this.calculatedScore = 0;
        }
    }

}