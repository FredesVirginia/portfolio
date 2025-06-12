import Nav from "../layout/Nav";
import { motion, AnimatePresence } from "framer-motion";
import FONDO from "../../assets/quinto.jpg";
import PRIMERO from "../../assets/GEAR/Captura de pantalla (107).png";
import SEGUNDO from "../../assets/GEAR/Captura de pantalla (108).png";
import TERCERO from "../../assets/GEAR/Captura de pantalla (110).png";
import CUARTO from "../../assets/GEAR/Captura de pantalla (111).png";
import QUINTO from "../../assets/GEAR/Captura de pantalla (112).png";
import SEXTO from "../../assets/GEAR/Captura de pantalla (120).png";
import SEXTIMO from "../../assets/GEAR/Captura de pantalla (121).png";
import OCTAVO from "../../assets/GEAR/Captura de pantalla (122).png";
import { useState } from "react";
import Footer from "../Footer";
import ContactForm from "../layout/FormularioOxford";

export default function Oxford() {
  const images = [PRIMERO, SEGUNDO, TERCERO, CUARTO, QUINTO, SEXTO, SEXTIMO, OCTAVO];
  const [selectedImage, setSelectedImage] = useState(images[7]);

  return (
    <div className="overflow-x-hidden pt-30">
      <Nav />

      <div
        style={{ backgroundImage: `url(${FONDO})` }}
        className="bg-[url('../../assets/tercero.jpg')] bg-cover bg-center h-scree w-full bg-red-00 overflow-x-hidden"
      >
        <p className="text-5xl text-white text-center pt-5">Oxford Gear Kids</p>

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
            Django
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            PostgreSql
          </div>
          <div className="border-2 text-[14px] text-cyan-400 border-cyan-500 bg-white  font-bold w-fit  rounded-full px-5 py-2 shadow-2xl shadow-cyan-300 ">
            Material UI
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
            Oxford GEAR Kids es una plataforma educativa interactiva diseñada para que niños entre 7 y 13 años aprendan inglés de
            forma dinámica, estructurada y motivadora. Está alineada con el Marco Común Europeo de Referencia (MCER) desde niveles
            Pre-A1 hasta B1. La experiencia de usuario se centra en la gamificación del aprendizaje, con un enfoque comunicativo
            que promueve el desarrollo de habilidades lingüísticas a través de ejercicios personalizados y progresivos.
          </p>

          <p className="text-lg font-semibold text-gray-700">El sistema cuenta con módulos específicos para:</p>

          <ul className="list-disc pl-5 space-y-3 text-base text-gray-700">
            <li>
              <span className="text-cyan-500 font-semibold">Estructura de niveles y mundos gamificados:</span> Organización del
              contenido en niveles y "mundos", cada uno con más de 25 actividades interactivas, fomentando la progresión a través
              de la motivación y el juego.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Ejercicios interactivos:</span> Más de 1.000 tareas didácticas que
              incluyen actividades de listening, reading, writing, grammar, vocabulary y pronunciación.
            </li>

            <li>
              <span className="text-cyan-500 font-semibold">Actividades con enfoque en habilidades orales:</span> Tareas que
              fomentan el desarrollo de speaking y listening, con opciones para grabar y reproducir la voz del estudiante.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Uso de organizadores gráficos:</span> Herramientas visuales que apoyan
              la comprensión y resolución de actividades mediante esquemas y mapas conceptuales.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Evaluación diagnóstica y formativa:</span> Pruebas automatizadas para
              identificar el nivel del estudiante al inicio y monitorear avances durante el curso.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Cuestionarios al finalizar cada unidad:</span> Evaluaciones tipo quiz
              para reforzar el aprendizaje y retroalimentar al estudiante de forma inmediata.
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <div className="pb-10 flex flex-col items-center">
            <p className="text-center text-3xl font-bold text-gray-600 pb-1">Desafíos Técnicos</p>
            <span className="block h-1 my-2 bg-cyan-400 w-52 rounded-full"></span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 px-4 md:px-0">
            <div>
              <p className="text-gray-700 font-semibold">
                Durante el desarrollo de <span className="text-cyan-400">Oxford GEAR Kids</span>, me enfrenté a varios retos
                técnicos que abordé con soluciones eficientes y escalables:
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-4 text-gray-600 text-base">
              <li>
                <span className="text-cyan-400 font-semibold">Integración de múltiples tipos de ejercicios interactivos:</span>
                Diseñé una arquitectura modular con componentes reutilizables en React. Implementé hooks personalizados y
                estructuras tipadas que permitieron manejar más de 1.000 ejercicios con lógicas diversas.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Sincronización de datos y estado global:</span>
                Utilicé React Query para gestionar caché, sincronización en tiempo real y actualizaciones reactivas. También
                manejé mutaciones optimistas para mejorar la experiencia del usuario.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Sistema de evaluación automatizado:</span>
                Desarrollé reglas de corrección automatizada en Django para actividades como quizzes, respuestas abiertas y
                grabaciones de voz. Las evaluaciones devolvían feedback inmediato y personalizado.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Interfaz amigable y responsiva para niños:</span>
                Implementé una UI clara y atractiva utilizando MUI y Tailwind, con navegación intuitiva, animaciones suaves
                (Framer Motion) y diseño accesible en múltiples dispositivos.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Gestión avanzada de usuarios por rol:</span>
                Configuré autenticación con JWT y roles jerárquicos (estudiante, docente, coordinador, administrador), controlando
                acceso a rutas y vistas desde frontend y backend.
              </li>
            </ul>

            <div className="pt-6">
              <p className="text-gray-700 font-semibold">Tecnologías Utilizadas:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <span className="text-cyan-400 font-medium">Frontend:</span> React, React Query, Tailwind CSS, MUI
                </li>
                <li>
                  <span className="text-cyan-400 font-medium">Backend:</span> Django, Django REST Framework
                </li>
                <li>
                  <span className="text-cyan-400 font-medium">Autenticación:</span> JWT (JSON Web Tokens)
                </li>
                <li>
                  <span className="text-cyan-400 font-medium">Herramientas extra:</span> Framer Motion, ESLint, Git/GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ContactForm/>

      <Footer/>
    </div>
  );
}
