import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import ChatbotComponent from "./Chatbot";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      {/* <ChatbotComponent /> */}
      <Footer />
    </div>
  );
}

export default App;
