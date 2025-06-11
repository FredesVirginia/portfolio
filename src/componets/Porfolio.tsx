import { Button } from "rsuite";
import Nav from "./layout/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
export default function Porfolio() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className=" h-[34rem] flex justify-center items-center  ">
        <div className="flex flex-col items-center gap-10 mt-10">
          <p className="flex gap-1 justify-center items-center text-5xl">
            <p className="text-gray-600">Hola, soy </p>
            <p style={{ color: "#22d3ee" }} className="-translate-y-1 ">
              {" "}
              Vicki
            </p>
          </p>
          <p style={{ fontFamily: "inherit" }} className="text-center text-gray-600 text-xl ">
            {" "}
            Full Stack Developer | Analista en Sistemas
          </p>
          <Button
            className="mi-boton flex justify-center items-center gap-2"
            style={{
              backgroundColor: "#22d3ee", // sky-400
              color: "white",
              fontWeight: "bold",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              width: "200px",
            }}
          >
            Ver mis Proyectos
            <FaLongArrowAltRight />
          </Button>
        </div>
      </div>

      <SobreMi/>
      <Proyectos/>
    </div>
  );
}
