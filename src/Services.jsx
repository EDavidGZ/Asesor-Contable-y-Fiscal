import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';



function Services() {

  const services = [
    {id: 1, title: "Cálculo de Impuestos Anuales", about: "Presentación de la declaración anual correspondiente al año que se trate."},
    {id: 2, title: "Cálculo de Impuestos Mensuales", about: "Presentación de la declaración correspondiente del mes."},
    {id: 3, title: "Cumplimiento de Obligaciones Fiscales Mensuales", about: "Asesoramiento para cumplir con las obligaciones fiscales cada mes."},
    {id: 4, title: "Cumplimiento de Obligaciones Fiscales Anuales", about: "Garantizamos el cumplimiento de todas tus obligaciones fiscales al final del año."},
    {id: 5, title: "Cálculo de Impuestos sobre Nómina", about: "Asesoramos y calculamos los impuestos sobre nóminas de tus empleados."},
    {id: 6, title: "Elaboración de Contabilidad General", about: "Llevamos la contabilidad general para que tu negocio cumpla con todas las normativas."},
    {id: 7, title: "Análisis de Estados Financieros", about: "Realizamos análisis detallados para que tomes decisiones informadas sobre tu negocio."},
    {id: 8, title: "Elaboración de Nóminas", about: "Nos encargamos de elaborar y gestionar las nóminas de tus empleados."},
    {id: 9, title: "Asesoría Fiscal", about: "Brindamos asesoría personalizada para optimizar el pago de impuestos y cumplir con la normativa fiscal."},
    {id: 10, title: "Facturación", about: "Realización del comprobante fiscal que ampare los ingreso obtenidos por medio de alguna actividad o servicio profesional del contribuyente"},
    {id: 11, title: "Trámites en el RFC", about: 'Asesoria para trámites relacionados al servicio de administración tributaria “SAT”'},
  ]
  return (
    <section id="services" className="py-20 bg-gray-100 mx-8">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-12 text-blue-900">Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{
          services.map((service) => (

          <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaCheckCircle className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
            <p className="text-gray-700">{service.about}</p>
          </div>))}
          
        </div>
      </div>
    </section>
  );
}

export default Services;
