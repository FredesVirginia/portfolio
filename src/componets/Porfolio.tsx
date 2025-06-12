import { Button } from "rsuite";
import Nav from "./layout/Nav";
import { FaLongArrowAltRight } from "react-icons/fa";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Footer from "./Footer";

import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactForm2 from "./layout/Contact";

export default function Porfolio() {
  const location = useLocation();
  const inicioRef = useRef<HTMLDivElement>(null);
  const sobreMiRef = useRef<HTMLDivElement>(null);
  const proyectosRef = useRef<HTMLDivElement>(null);

   const navigate = useNavigate();

  const goToSection = (section: string) => {
    navigate("/portfolio", { state: { scrollTo: section } });
  };
 useEffect(() => {
    const section = location.state?.scrollTo;
    const refs: Record<string, React.RefObject<HTMLDivElement|null>> = {
      inicio: inicioRef,
      sobreMi: sobreMiRef,
      proyectos: proyectosRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="overflow-x-hidden pt-40">
      <Nav />
      <div ref={inicioRef}>
        <div className=" h-[34rem] flex justify-center items-center  ">
          <div className="flex flex-col items-center gap-10 mt-10">
            <p className="flex gap-1 justify-center items-center text-5xl">
              <p className="text-gray-600">Hola, soy </p>
              <p style={{ color: "#22d3ee" }} className="-translate-y-1 ">
                Vicki
              </p>
            </p>
            <p style={{ fontFamily: "inherit" }} className="text-center text-gray-600 text-xl ">
              Full Stack Developer | Analista en Sistemas
            </p>
            <Button
            onClick={() => goToSection("proyectos")}
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
      </div>

      <div className="pt-22" ref={sobreMiRef}>
        <SobreMi />
      </div>
      <div className="pt-40"  ref={proyectosRef}>
        <Proyectos />
      </div>

      <div>
        <ContactForm2/>
      </div>
      <Footer />
    </div>
  );
}
