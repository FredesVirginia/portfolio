import { useState } from "react";
import PRIMERO from "../../assets/PEPS/Captura de pantalla (123).png";
import SEGUNDO from "../../assets/PEPS/Captura de pantalla (124).png";
import TERCERO from "../../assets/PEPS/Captura de pantalla (125).png";
import CUARTO from "../../assets/PEPS/Captura de pantalla (126).png";
import QUINTO from "../../assets/PEPS/Captura de pantalla (127).png";
import SEXTO from "../../assets/PEPS/Captura de pantalla (128).png";
import SEPTIMO from "../../assets/PEPS/Captura de pantalla (129).png";
import OCTAVO from "../../assets/PEPS/Captura de pantalla (130).png";
import NOVIEMBRE from "../../assets/PEPS/Captura de pantalla (131).png";

import { motion, AnimatePresence } from "framer-motion";
import FONDO from "../../assets/quinto.jpg";

import ContactForm from "../layout/FormularioOxford";
import Nav from "../layout/Nav";
import Footer from "../Footer";

export default function Peps() {
  const images = [PRIMERO, SEGUNDO, TERCERO, CUARTO, QUINTO, SEXTO, SEPTIMO, OCTAVO, NOVIEMBRE];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="overflow-x-hidden">
      <Nav />

      <div
        style={{ backgroundImage: `url(${FONDO})` }}
        className="bg-[url('../../assets/tercero.jpg')] bg-cover bg-center h-scree w-full bg-red-00 overflow-x-hidden"
      >
        <p className="text-5xl text-white text-center pt-5">Peps Platform</p>

        <div className="flex flex-wrap mx-4  gap-2 justify-center mt-5 ">
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            React
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500  bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            Zustand
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            React query
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500  bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            TypeScript
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            Nest
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            PostgreSql
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            Material UI
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            Rsuite
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto p-4">
          {/* Imagen principal con animación */}
          <div className="w-full max-h-[500px] p-5  rounded-2xl overflow-hidden shadow-lg shadow-cyan-200 mb-4 bg-gray-100 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Vista principal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-h-[500px] w-auto object-contain rounded-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Miniaturas */}
          <div className="flex flex-wrap justify-center gap-3 ">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Miniatura ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 border-4 h-20 md:w-24 md:h-24 object-cover rounded-xl cursor-pointer  border-cyan-400 transition duration-300 ${
                  selectedImage === img ? " scale-105" : " hover:scale-105 hover:border-purple-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 py-10 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">Descripción del Proyecto</h2>
          <div className="w-20 h-1 mx-auto mt-2 bg-cyan-400 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 text-gray-600">
          <p className="text-lg leading-relaxed font-medium">
            Peps es una solución tecnológica desarrollada para optimizar la gestión de productos en supermercados, enfocada
            principalmente en la detección temprana de vencimientos y la automatización de procesos clave.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            El sistema permite a los supermercados registrar productos próximos a caducar y generar promociones automáticamente
            según su fecha de vencimiento, incentivando su rotación. Este módulo especializado puede ser integrado como una
            solución independiente o añadida a un sistema de gestión existente.
          </p>
          <p className="text-lg leading-relaxed font-medium">
            Además, el sistema facilita la toma de decisiones comerciales efectivas y reduce significativamente el desperdicio
            masivo de productos, brindando alertas, notificaciones y herramientas de análisis visual para el seguimiento.
          </p>

          <p className="text-lg font-semibold text-gray-700">El sistema cuenta con módulos específicos para:</p>

          <ul className="list-disc pl-5 space-y-3 text-base text-gray-500">
            <li>
              <span className="text-cyan-400 font-semibold">Registro inteligente de productos:</span> Captura detallada de
              productos con fecha de vencimiento, código de barras y categoría.
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">Sistema de alertas automáticas:</span> Notificaciones visuales y por
              correo para productos próximos a caducar.
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">Generación de promociones dinámicas:</span> Creación automatizada de
              descuentos según criterios como tiempo restante o volumen en stock.
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">Dashboard de seguimiento:</span> Visualización del estado de
              productos, alertas activas y campañas promocionales.
            </li>
            <li>
              <span className="text-cyan-400 font-semibold">Gestión de campañas y reportes:</span> Exportación de informes de
              promociones realizadas, productos caducados y métricas de eficiencia.
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <div className="pb-10 flex flex-col items-center animate__animated animate__fadeIn">
            <p className="text-center text-3xl font-bold text-gray-600 pb-1">Desafíos Técnicos</p>
            <span className="block h-1 my-2 bg-cyan-400 w-24 rounded"></span>
          </div>

          <div className="mx-auto max-w-4xl px-4 md:px-0 animate__animated animate__fadeIn">
            <ul className="list-disc pl-5 space-y-4 text-base text-gray-500">
              <li>
                <span className="text-cyan-400 font-semibold">Automatización basada en fechas de caducidad:</span> Implementar un
                sistema de reglas con <strong>Node-Cron</strong> para ejecutar tareas automáticas diarias como generación de
                alertas y descuentos personalizados.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Integración de lógica predictiva:</span> Diseñar algoritmos para
                sugerir acciones basadas en patrones de vencimiento y rotación de productos, optimizando decisiones de stock.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Diseño de UI adaptable para personal no técnico:</span> Crear una
                interfaz intuitiva con <strong>React</strong> y <strong>MUI</strong> para facilitar la gestión del sistema incluso
                por personal con poca experiencia digital.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Sincronización en tiempo real:</span> Utilizar{" "}
                <strong>React Query</strong> para garantizar actualizaciones inmediatas entre módulos de productos, promociones y
                reportes.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Backend modular y escalable:</span> Arquitectura construida con{" "}
                <strong>NestJS</strong> para mantener el sistema desacoplado, reutilizable y preparado para integraciones con
                otros servicios del supermercado.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
}
