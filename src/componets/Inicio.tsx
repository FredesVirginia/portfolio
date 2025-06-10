import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Button } from "rsuite";
import LOGO from "../assets/blue_brand__1_-removebg-preview.png";
import FONDO from "../assets/christmas-background-1197753_1280.jpg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Inicio() {
  return (
    <div className="relative min-h-screen">
      {/* Imagen de fondo con opacidad usando un div absoluto */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FONDO})` }}
      >
        {/* Capa semitransparente encima de la imagen */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenido encima, centrado vertical y horizontalmente */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className=" p-8 rounded-md max-w-lg text-center flex flex-col justify-center items-center gap-5"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div className="h-30 w-30 rounded-full  flex justify-center items-center border-4 border-blue-400">
            <img
              src={LOGO}
              alt=""
              className="w-full translate-y-1 rounded-full h-full bg-blu-500"
            />
          </div>
          <p className="text-white text-5xl">Fredes Virginia</p>
          <p className="text-white ">
            ¡Bienvenido a mi portfolio! Soy un Desarrollador web especializado
            aplicaciones a medida y sistemas de gestión. Mi pasión es crear
            experiencias digitales eficientes, escalables y con excelente
            experiencia de usuario.
          </p>
          <div className="flex gap-5">
            <Button
              style={{
                backgroundColor: "#1796F0",
                color: "white",
                fontWeight: "bold",
              }}
              className="text-white flex items-center gap-2 mi-boton"
            >
              
              Ver mi portfolio <FaLongArrowAltRight />
            </Button>
            <Button
              appearance="default"
              style={{
                borderColor: "#1796F0",
                color: "#1796F0",
                fontWeight: "bold",
              }}
              className="flex items-center gap-2 mi-boton "
            >
             
              Contactame <MdOutlineMarkEmailUnread />
            </Button>
          </div>

          <div className="flex gap-5">
              <a  href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"> 
                <FaGithub className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" color="white" size={25}/>
              </a>

              <a  href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"> 
               <FaLinkedin className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" size={25} color="white" />
              </a>

              <a  href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"> 
               <FaInstagram  className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" size={25} color="white"/>  
              </a>
             
          </div>
        </div>
      </div>
    </div>
  );
}
