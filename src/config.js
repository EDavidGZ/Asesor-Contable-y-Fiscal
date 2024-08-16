import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Carlos",
  initialMessages: [
    createChatBotMessage("¡Hola! ¿En qué puedo ayudarte hoy?", {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => (
        <div>
          <button onClick={() => props.actionProvider.showServices()}>Servicios</button>
          <button onClick={() => props.actionProvider.showAnnualTaxesInfo()}>Impuestos Anuales</button>
          <button onClick={() => props.actionProvider.showMonthlyTaxesInfo()}>Impuestos Mensuales</button>
          <button onClick={() => props.actionProvider.showPayrollInfo()}>Nómina</button>
        </div>
      ),
    },
  ],
};

export default config;
