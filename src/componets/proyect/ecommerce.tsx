import { useState } from "react";
import PRIMERO from "../../assets/Schools/Captura de pantalla (115).png";
import SEGUNDO from "../../assets/Schools/Captura de pantalla (133).png";
import TERCERO from "../../assets/Schools/Captura de pantalla (134).png";
import CUARTO from "../../assets/Schools/Captura de pantalla (135).png";
import QUINTO from "../../assets/Schools/Captura de pantalla (136).png";
import SEXTO from "../../assets/Schools/Captura de pantalla (137).png";
import SEXTIMO from "../../assets/Schools/Captura de pantalla (138).png";
import OCTAVO from "../../assets/Schools/Captura de pantalla (139).png";
import NOVANO from "../../assets/Schools/Captura de pantalla (140).png";
import DECIMO from "../../assets/Schools/Captura de pantalla (141).png";
import FONDO from "../../assets/quinto.jpg";
import Footer from "../Footer";
import ContactForm from "../layout/FormularioOxford";
import Nav from "../layout/Nav";
export default function Ecommerce() {
  const images = [PRIMERO, SEGUNDO, TERCERO, CUARTO, QUINTO, SEXTO, SEXTIMO, OCTAVO, NOVANO, DECIMO];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="overflow-x-hidden">
      <Nav />

      <div
        style={{ backgroundImage: `url(${FONDO})` }}
        className="bg-[url('../../assets/tercero.jpg')] bg-cover bg-center h-scree w-full bg-red-00 overflow-x-hidden"
      >
        <p className="text-5xl text-white text-center pt-5">NovaTrend Shop</p>

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

        
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 py-10 bg-white">
        <div className="mt-20">
          <div className="pb-10 flex flex-col items-center animate__animated animate__fadeIn">
            <p className="text-center text-3xl font-bold text-gray-600 pb-1">Descripción del Proyecto</p>
            <span className="block h-1 my-2 bg-cyan-400 w-24 rounded"></span>
          </div>

          <div className="mx-auto max-w-4xl px-4 md:px-0 animate__animated animate__fadeIn">
            <p className="text-gray-500 font-medium mb-4">
              Este sistema de comercio electrónico está diseñado para permitir que múltiples usuarios se registren como{" "}
              <strong className="text-cyan-400">vendedores independientes</strong> dentro de una misma plataforma. Cada vendedor
              podrá gestionar sus propios productos, inventario y precios de forma autónoma.
            </p>
            <p className="text-gray-500 font-medium mb-4">
              La plataforma contempla todo el flujo de gestión comercial: publicación, edición y administración de productos,
              además de funcionalidades esenciales como pasarela de pagos, sistema de valoraciones y un panel personalizado con
              métricas de rendimiento.
            </p>
            <p className="text-gray-500 font-medium mb-8">
              <strong className="text-cyan-400">Actualmente en desarrollo</strong>: se ha finalizado el backend de la plataforma,
              implementado con arquitectura modular, escalable y segura, listo para integrar con el frontend próximamente.
            </p>

            {/* Módulos integrados */}
            <p className="text-xl text-gray-600 font-semibold mb-4">Módulos Integrados:</p>
            <ul className="list-disc pl-5 space-y-3 text-base text-gray-500">
              <li>
                <span className="text-cyan-400 font-semibold">Autenticación de usuarios y vendedores:</span> Registro y login
                seguros con roles diferenciados.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Gestión de productos por vendedor:</span> Cada vendedor administra
                su propio catálogo de productos con CRUD completo.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Panel personalizado:</span> Visualización de estadísticas de ventas,
                visitas y rendimiento individual.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Control de stock e inventario:</span> Actualización automática de
                unidades disponibles y notificaciones de bajo stock.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Sistema de valoraciones y opiniones:</span> Los compradores pueden
                calificar productos y compartir reseñas.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Pasarela de pagos (a integrar):</span> Preparado para integración
                con proveedores como Stripe o MercadoPago.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <div className="pb-10 flex flex-col items-center animate__animated animate__fadeIn">
            <p className="text-center text-3xl font-bold text-gray-600 pb-1">Desafíos Técnicos</p>
            <span className="block h-1 my-2 bg-cyan-400 w-24 rounded"></span>
          </div>

          <div className="mx-auto max-w-4xl px-4 md:px-0 animate__animated animate__fadeIn">
            <ul className="list-disc pl-5 space-y-3 text-base text-gray-500">
              <li>
                <span className="text-cyan-400 font-semibold">Diseño de arquitectura modular:</span> Se estructuró el backend con
                NestJS usando módulos y controladores independientes por dominio, permitiendo escalabilidad y mantenimiento
                óptimo.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Gestión de múltiples roles:</span> Implementación de control de
                acceso (RBAC) para distinguir entre usuarios compradores y vendedores, asegurando endpoints protegidos.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Manejo avanzado de relaciones:</span> Desarrollo de relaciones
                complejas en base de datos (uno a muchos, muchos a muchos) usando PostgreSQL y TypeORM.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Preparación para pasarelas de pago:</span> Diseño anticipado del
                sistema de órdenes y transacciones para facilitar integración con proveedores como Stripe o PayPal.
              </li>
              <li>
                <span className="text-cyan-400 font-semibold">Validaciones y seguridad:</span> Uso de DTOs, pipes, y guards para
                validar entradas y proteger rutas sensibles del sistema.
              </li>
            </ul>

            <p className="mt-6 text-gray-500 font-medium">
              Tecnologías utilizadas en el backend: <span className="text-cyan-400 font-semibold">NestJS</span>,{" "}
              <span className="text-cyan-400 font-semibold">TypeORM</span>,{" "}
              <span className="text-cyan-400 font-semibold">PostgreSQL</span>,{" "}
              <span className="text-cyan-400 font-semibold">JWT</span>.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />

      <Footer />
    </div>
  );
}
