import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Button } from "rsuite";
import LOGO from "../assets/logooooooo.png";
import FONDO from "../assets/segundo.jpg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Snowfall from 'react-snowfall';
import { useNavigate } from "react-router-dom";
export default function Inicio() {

  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen">
    <Snowfall
        snowflakeCount={30}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10, // Asegura que la nieve esté por encima del fondo
          pointerEvents: 'none', // Permite interactuar con los elementos debajo
        }}
        color="white" // Puedes personalizar el color
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FONDO})` }}
      >
      
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

    
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div
          className=" p-8 rounded-md max-w-lg text-center flex flex-col justify-center items-center gap-5"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div className="h-30 w-30 rounded-full  flex justify-center items-center border-4 border-blue-400 shadow-2xl shadow-blue-500">
            <img
              src={LOGO}
              alt=""
              className="w-full translate-y-1 rounded-full h-full bg-blu-500"
            />
          </div>
          <p className="text-white text-5xl">Fredes Virginia</p>
          <p className="text-white ">
            ¡Bienvenidos a mi portafolio! Soy una Desarrolladora web especializada
            aplicaciones a medida y sistemas de gestión. Mi pasión es crear
            experiencias digitales eficientes, escalables y con excelente
            experiencia de usuario.
          </p>
          <div className="flex gap-5">
            <Button
            onClick={()=> {navigate("/portfolio") }}
              style={{
                backgroundColor: "#1796F0",
                color: "white",
                fontWeight: "bold",
              }}
              className="text-white flex items-center gap-2 mi-boton   shadow-2xl shadow-blue-500"
            >
              
              Ver mi portfolio <FaLongArrowAltRight />
            </Button>
            <Button
            onClick={()=>{window.location.href = 'mailto:William-Champion@outlook.com'}}
              appearance="default"
              style={{
                borderColor: "#1796F0",
                color: "#1796F0",
                fontWeight: "bold",
              }}
              className=" shadow-2xl shadow-blue-500 flex items-center gap-2 mi-boton "
            >
             
              Contactame <MdOutlineMarkEmailUnread />
            </Button>
          </div>

          <div className="flex gap-5 shadow-2xl shadow-gray-700">
              <a  href="https://github.com/FredesVirginia" target="_blank" rel="noopener noreferrer"> 
                <FaGithub className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" color="white" size={25}/>
              </a>

              <a  href="https://www.linkedin.com/in/fredes-virginia-37889511b/" target="_blank" rel="noopener noreferrer"> 
               <FaLinkedin className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" size={25} color="white" />
              </a>

              <a  href="https://www.instagram.com/jonh_clein_dev/" target="_blank" rel="noopener noreferrer"> 
               <FaInstagram  className="bg-gray-500 w-9 h-9 p-1 rounded-full mi-boton" size={25} color="white"/>  
              </a>
             
          </div>
        </div>
      </div>
    </div>
  );
}
