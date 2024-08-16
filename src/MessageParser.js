class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hola")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("servicios")) {
        this.actionProvider.showServices();
      } else if (lowerCaseMessage.includes("impuestos anuales")) {
        this.actionProvider.showAnnualTaxesInfo();
      } else if (lowerCaseMessage.includes("impuestos mensuales")) {
        this.actionProvider.showMonthlyTaxesInfo();
      } else if (lowerCaseMessage.includes("nomina")) {
        this.actionProvider.showPayrollInfo();
      }
      // Agrega más condiciones según las necesidades
    }
  }
  
  export default MessageParser;
  