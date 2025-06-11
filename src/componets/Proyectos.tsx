import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "rsuite";

export default function Proyectos() {

  const navigate = useNavigate();
  return (
    <div>
      <div className="pb-10 mt-10 flex flex-col items-center">
        <p className="text-center text-3xl font-bold text-gray-600 pb-1">Proyectos Destacados</p>
        <span className="block h-1 my-2  bg-sky-400 w-50"></span>
      </div>

      <div className="mx-2 flex   flex-wrap gap-6 justify-center">
        {/** GEEEEEEEEEEEEEAR */}
        <div className="w-90 h-[30rem] flex flex-col mi-boton jusify-between  rounded-2xl border-l-10   border-cyan-300 b-gray-200 shadow-2xl shadow-cyan-300 py-10">
          <p className="text-center text-[18px]  text-cyan-400 font-bold">Oxford Gear Kids</p>
          <p className="text-[14px] text-wrap px-3 ">
            Plataforma digital interactiva diseñada para estudiantes de 7 a 13 años que facilita el aprendizaje del inglés
            mediante ejercicios gamificados.
          </p>

          <div className="flex flex-col py-10 justify-between h-full">
            <div className="flex flex-wrap mx-4  gap-2 ">
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Zustand
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React query
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                TypeScript
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Django
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                PostgreSql
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Material UI
              </div>
            </div>
            <Button
              className="mi-boton  flex justify-center items-center gap-2"
              style={{
                backgroundColor: "#22d3ee", // sky-400
                color: "white",
                fontWeight: "bold",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                width: "140px",

                marginLeft: "15px",
              }}

              onClick={()=>{
                navigate("/proyecto/oxford")
              }}
            >

              Ver detalles
              <FaLongArrowAltRight />
            </Button>
          </div>
        </div>

        {/** GEEEEEEEEEEEEEAR */}
        <div className="w-90 h-[30rem] flex flex-col mi-boton  jusify-between  rounded-2xl border-l-10   border-cyan-300 b-gray-200 shadow-2xl shadow-cyan-300 py-10">
          <p className="text-center text-[18px]  text-cyan-400 font-bold">Oxford School</p>
          <p className="text-[14px] text-wrap px-3 ">
            Es la versión escolar de Oxford GEAR Kids dirigida a docentes y administradores los cuales pueden gestionar el
            progreso de los alumnos, asignar ejercicios y monitorear resultados, facilitando un entorno educativo personalizado y
            motivador. La plataforma ofrece reportes y evaluaciones adaptativas para apoyar el seguimiento del aprendizaje en el
            contexto escolar.
          </p>

          <div className="flex flex-col py-10 gap-5 justify-between h-full">
            <div className="flex flex-wrap mx-4  gap-2 ">
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Django
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Zustand
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React query
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                TypeScript
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                PostgreSql
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Material UI
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Rsuite
              </div>
            </div>
            <Button
              className="mi-boton  flex justify-center items-center gap-2"
              style={{
                backgroundColor: "#22d3ee", // sky-400
                color: "white",
                fontWeight: "bold",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                width: "140px",

                marginLeft: "15px",
              }}
               onClick={()=>{
                navigate("/proyecto/schools")
              }}
            >
              Ver detalles
              <FaLongArrowAltRight />
            </Button>
          </div>
        </div>

        {/** GEEEEEEEEEEEEEAR */}
        <div className="w-90 h-[30rem] flex flex-col mi-boton  jusify-between  rounded-2xl border-l-10   border-cyan-300 b-gray-200 shadow-2xl shadow-cyan-300 py-10">
          <p className="text-center text-[18px]  text-cyan-400 font-bold">Peps</p>
          <p className="text-[14px] text-wrap px-3 ">
            Solución tecnológica desarrollada para optimizar la gestión de productos en supermercados, con enfoque en la detección
            temprana de vencimientos y la automatización de procesos clave. El sistema permite registrar productos próximos a
            caducar y generar promociones de forma automática según su fecha de vencimiento, incentivando su rotación.
          </p>

          <div className="flex flex-col py-10 gap-5 justify-between h-full">
            <div className="flex flex-wrap mx-4  gap-2 ">
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Nest
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Zustand
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React query
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                TypeScript
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                PostgreSql
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Tailwind Css
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Rsuite
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Docker
              </div>
            </div>
            <Button
              className="mi-boton  flex justify-center items-center gap-2"
              style={{
                backgroundColor: "#22d3ee", // sky-400
                color: "white",
                fontWeight: "bold",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                width: "140px",

                marginLeft: "15px",
              }}
               onClick={()=>{
                navigate("/proyecto/peps")
              }}
            >
              Ver detalles
              <FaLongArrowAltRight />
            </Button>
          </div>
        </div>

        {/** GEEEEEEEEEEEEEAR */}

        <div className="w-90 h-[34rem] flex flex-col mi-boton  jusify-between  rounded-2xl border-l-10   border-cyan-300 b-gray-200 shadow-2xl shadow-cyan-300 py-10">
          <p className="text-center text-[18px]  text-cyan-400 font-bold">NovaTrend Shop</p>
          <p className="text-[14px] text-wrap px-3 ">
            Sistema de comercio electrónico diseñado para permitir que múltiples usuarios se registren como vendedores y gestionen
            sus propios productos dentro de una misma plataforma. La solución contempla un flujo completo de publicación, edición
            y administración de productos por parte de cada vendedor, incluyendo gestión de inventario y precios. Integra
            funcionalidades clave como pasarela de pagos, control de stock, sistema de valoraciones, y un panel personalizado para
            cada vendedor, permitiendo visualizar estadísticas de ventas y rendimiento.
          </p>

          <div className="flex flex-col py-10 gap-5 justify-between h-full">
            <div className="flex flex-wrap mx-4  gap-2 ">
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Nest
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Zustand
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                React query
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                TypeScript
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                PostgreSql
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Tailwind Css
              </div>

              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Rsuite
              </div>
              <div className="border-2 text-[12px] text-cyan-400 border-cyan-300  font-bold w-fit  rounded-full px-3 py-2 shadow-2xl shadow-cyan-300 ">
                Docker
              </div>
            </div>
           <div className="flex items-center gap-5">
             <Button
              className="mi-boton  flex justify-center items-center gap-2"
              style={{
                backgroundColor: "#22d3ee", // sky-400
                color: "white",
                fontWeight: "bold",
                border: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                width: "140px",

                marginLeft: "15px",
              }}

               onClick={()=>{
                navigate("/proyecto/ecommerce")
              }}
            >
              Ver detalles
              <FaLongArrowAltRight />
            </Button>
            <p className="text-cyan-400">En desarrollo</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
