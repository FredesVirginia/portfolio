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

  <div ref={inicioRef} className="px-4 sm:px-6 md:px-10">
    <div className="min-h-[30rem] sm:min-h-[34rem] flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 mt-10 text-center">
        <div className="flex flex-wrap justify-center items-center text-3xl sm:text-4xl md:text-5xl font-semibold gap-2">
          <p className="text-gray-600">Hola, soy</p>
          <p className="-translate-y-1 text-cyan-400">Vicki</p>
        </div>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
          Full Stack Developer | Analista en Sistemas
        </p>

        <Button
          onClick={() => goToSection("proyectos")}
          className="mi-boton flex justify-center items-center gap-2"
          style={{
            backgroundColor: "#22d3ee",
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

  <div className="pt-16 sm:pt-22 md:pt-32 px-4 sm:px-6 md:px-10" ref={sobreMiRef}>
    <SobreMi />
  </div>

  <div className="pt-40 px-4 sm:px-6 md:px-10" ref={proyectosRef}>
    <Proyectos />
  </div>

  <div className="px-4 sm:px-6 md:px-10">
    <ContactForm2 />
  </div>

  <Footer />
</div>

  );
}
