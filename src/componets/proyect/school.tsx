import { useState } from "react";
import Footer from "../Footer";
import ContactForm from "../layout/FormularioOxford";
import Nav from "../layout/Nav";
import FONDO from "../../assets/quinto.jpg";
import PRIMERO from "../../assets/Schools/Captura de pantalla (115).png";
import SEGUNDO from "../../assets/Schools/Captura de pantalla (133).png"
import TERCERO from "../../assets/Schools/Captura de pantalla (134).png";
import CUARTO from "../../assets/Schools/Captura de pantalla (135).png";
import QUINTO from "../../assets/Schools/Captura de pantalla (136).png";
import SEXTO from "../../assets/Schools/Captura de pantalla (137).png";
import SEXTIMO from "../../assets/Schools/Captura de pantalla (138).png";
import OCTAVO from "../../assets/Schools/Captura de pantalla (139).png";
import NOVANO from "../../assets/Schools/Captura de pantalla (140).png";
import DECIMO from "../../assets/Schools/Captura de pantalla (141).png";

import { motion, AnimatePresence } from "framer-motion";
export default function School() {
    
     const images = [PRIMERO, SEGUNDO, TERCERO, CUARTO, QUINTO, SEXTO, SEXTIMO, OCTAVO , NOVANO , DECIMO];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
   <div className="overflow-x-hidden">
      <Nav />

      <div
        style={{ backgroundImage: `url(${FONDO})` }}
        className="bg-[url('../../assets/tercero.jpg')] bg-cover bg-center h-scree w-full bg-red-00 overflow-x-hidden"
      >
        <p className="text-5xl text-white text-center pt-5">Oxford Schools</p>

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
           Oxford School extiende el alcance de GEAR Kids al entorno institucional, proporcionando un espacio digital donde escuelas y centros educativos gestionan integralmente su aprendizaje de inglés. Ofrece módulos diferenciados para estudiantes, docentes, coordinadores y administradores, facilitando la autonomía y colaboración en un solo ecosistema
          </p>

          <p className="text-lg font-semibold text-gray-700">El sistema cuenta con módulos específicos para:</p>

          <ul className="list-disc pl-5 space-y-3 text-base text-gray-700">
            <li>
              <span className="text-cyan-500 font-semibold">Gestión de roles y acceso:</span>  Control jerárquico de permisos — estudiantes, docentes, coordinadores y administradores — con interfaces adaptadas a cada perfil.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Asignación y acceso a ejercicios:</span> Organización de contenido en bloques (72 por nivel) y ejercicios interactivos según nivel CEFR; permite flexibilizar el acceso y doblar intentos en actividades incompletas.
            </li>

           
            <li>
              <span className="text-cyan-500 font-semibold">Evaluación diagnóstica automática: </span>Test inicial de 30 preguntas para ubicar al alumno en el nivel adecuado dentro del programa .
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Evaluación diagnóstica y formativa:</span> Pruebas automatizadas para
              identificar el nivel del estudiante al inicio y monitorear avances durante el curso.
            </li>
            <li>
              <span className="text-cyan-500 font-semibold">Panel de control multiusuario: </span> Dashboards adaptados, permitiendo seguimiento de progreso, estadísticas de avance y área de mejora para cada rol (coordinador, docente, estudiante).

            </li>

             <li>
              <span className="text-cyan-500 font-semibold">Flexibilidad académica: </span> Programación de apertura/cierre de bloques por profesores, con posibilidad de reintentos en actividades fuera de fecha sin perder datos.

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
                <span className="text-cyan-400 font-semibold">Escalabilidad institucional: </span>
               Arquitectura diseñada para manejar múltiples escuelas, con calendarios académicos independientes y dinámica colectiva de usuarios.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Sincronización en tiempo real: </span>
                Monitoreo inmediato de avances y actualizaciones en todos los extremos (estudiantes, docentes, coordinadores).
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Capacidad de recuperación y flexibilidad:</span>
               Control de reintentos, programación de bloques y recuperación de contraseñas con soporte integrado.
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
  )
}
