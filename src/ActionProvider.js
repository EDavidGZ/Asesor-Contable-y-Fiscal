import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("¡Hola! ¿Cómo estás?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, greetingMessage],
    }));
  }

  showServices() {
    const servicesMessage = this.createChatBotMessage(
      "Nuestros servicios de contaduría incluyen: \n\n" +
      "1. Cálculo de los impuestos anuales y presentación de la declaración anual correspondiente al año que se trate. \n" +
      "2. Cálculo de los impuestos y presentación de la declaración correspondiente del mes. \n" +
      "3. Cumplimiento de las obligaciones fiscales mensuales. \n" +
      "4. Cumplimiento de las obligaciones fiscales anuales. \n" +
      "5. Cálculo de impuestos sobre nómina."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, servicesMessage],
    }));
  }

  showAnnualTaxesInfo() {
    const annualTaxesMessage = this.createChatBotMessage(
      "El cálculo de los impuestos anuales incluye la presentación de la declaración anual correspondiente al año que se trate."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, annualTaxesMessage],
    }));
  }

  showMonthlyTaxesInfo() {
    const monthlyTaxesMessage = this.createChatBotMessage(
      "El cálculo de los impuestos mensuales incluye la presentación de la declaración correspondiente del mes y el cumplimiento de las obligaciones fiscales mensuales."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, monthlyTaxesMessage],
    }));
  }

  showPayrollInfo() {
    const payrollMessage = this.createChatBotMessage(
      "La elaboración de nómina incluye el cálculo de impuestos sobre nómina y la gestión de pagos para el trabajador."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, payrollMessage],
    }));
  }
}

export default ActionProvider;
