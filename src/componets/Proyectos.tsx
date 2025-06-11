import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "rsuite";

export default function Proyectos() {
  return (
    <div>
      <div className="pb-10 mt-10 flex flex-col items-center">
        <p className="text-center text-3xl font-bold text-gray-600 pb-1">Proyectos Destacados</p>
        <span className="block h-1 my-2  bg-sky-400 w-50"></span>
      </div>

      <div className="mx-2 flex   flex-wrap gap-6 justify-center">
        {/** GEEEEEEEEEEEEEAR */}
        <div className="w-90 h-[30rem] flex flex-col  justify-between  rounded-2xl border-l-10  bg-red-400  border-cyan-300 b-gray-200 shadow-2xl shadow-cyan-300 ">
          <p className="text-center text-[18px]  text-cyan-400 font-bold">Oxford Gear Kids</p>
          <p className="text-[14px] text-wrap px-3 bg-red-200">
            Plataforma digital interactiva diseñada para estudiantes de 7 a 13 años que facilita el aprendizaje del inglés
            mediante ejercicios gamificados.
          </p>

          <div className="flex flex-wrap mx-4 bg-red-900 gap-2 ">
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
              marginTop: "19px",
              marginLeft: "15px",
            }}
          >
            Ver detalles
            <FaLongArrowAltRight />
          </Button>
        </div>


        {/** SCHOOOOL */}
        <div className="w-90 h-[30rem] flex flex-col justify-between  pt-5 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
          <p className="text-center text-[18px] pt-3 text-cyan-400 font-bold">Schools</p>

          <p className="text-[14px] text-wrap px-3">
           
            Es la versión escolar de Oxford GEAR Kids dirigida a docentes y administradores los cuales pueden gestionar el
            progreso de los alumnos, asignar ejercicios y monitorear resultados, facilitando un entorno educativo personalizado y
            motivador. La plataforma ofrece reportes y evaluaciones adaptativas para apoyar el seguimiento del aprendizaje en el
            contexto escolar.
          </p>

          <div className="flex flex-wrap mx-4 gap-2 ">
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
              marginTop: "19px",
              marginLeft: "15px",
            }}
          >
            Ver detalles
            <FaLongArrowAltRight />
          </Button>
        </div>








            

        <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
          <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">Peps</p>
        </div>
        <div className="w-90 h-96 rounded-2xl border-l-10 border-cyan-300 bg-gray-200 shadow-2xl shadow-cyan-300">
          <p className="text-center text-[18px] pt-4 text-cyan-400 font-bold">NovaTrend Shop</p>
        </div>
      </div>
    </div>
  );
}
