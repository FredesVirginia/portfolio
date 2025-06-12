import Snowfall from "react-snowfall";
import LOGO from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Nav() {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);

  const goToSection = (section: string) => {
    setIsOpen(false);
    navigate("/portfolio", { state: { scrollTo: section } });
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Fondo con gradiente y nieve */}
      <div className="h-24 bg-gradient-to-b from-sky-900 to-sky-600 relative">
        <Snowfall
          snowflakeCount={20}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "20vh",
            zIndex: 10,
            pointerEvents: "none",
          }}
          color="white"
        />
      </div>

      {/* Contenido del navbar */}
      <div className="absolute w-full px-6 md:px-20 flex items-center justify-between top-0 left-0 z-20 h-24">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/portfolio"),
             setIsOpen(false);
          }}
          className="h-16 w-16 cursor-pointer flex items-center"
        >
          <img src={LOGO} alt="logo" className="h-full w-auto" />
        </div>

        {/* Botón hamburguesa */}
        <button
        style={{color:"white" }}
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menú */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-24 left-0 w-full md:w-auto bg-sky-800 md:bg-transparent p-6 md:p-0 z-30`}
        >
          {["inicio", "sobre Mi", "proyectos"].map((item) => (
            <div
              key={item}
              onClick={() => goToSection(item)}
              className="relative group cursor-pointer text-xl font-bold text-white hover:text-cyan-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
