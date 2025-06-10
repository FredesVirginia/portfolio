import Snowfall from "react-snowfall";
import LOGO from "../../assets/logo2.png";
export default function Nav() {
   
  return (
    <div className="relative">
      <div className="h-30 bg-gradient-to-b from-sky-900 to-sky-600 flex relative">
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
        {/* <img src={NAV} alt="" className="h-full w-full" />
        <img src={NAV} alt="" className="h-full w-full" />
        <img src={NAV} alt="" className="h-full w-full" />
        <img src={NAV} alt="" className="h-full w-full" /> */}
      </div>

      <div style={{ width: "100vw" }} className="absolute  px-20 flex items-center justify-between   top-0 left-0 z-20 ">
        <div className=" h-30 w-30">

           <img src={LOGO} alt="logo" />
            
        </div>
        <div className="flex justify-end gap-15 items-center py-10 ">
          <div className="relative group cursor-pointer text-xl font-bold text-white hover:text-cyan-300">
            Inicio
          
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
          </div>
           <div className="relative group cursor-pointer text-xl font-bold text-white hover:text-cyan-300 " >
            Sobre mi
          
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
          </div>
           <div className="relative group cursor-pointer text-xl font-bold text-white hover:text-cyan-300">
            Proyectos
          
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
