import { Route, Routes } from "react-router-dom";
import Inicio from "../componets/Inicio";
import Porfolio from "../componets/Porfolio";
import SobreMi from "../componets/SobreMi";
import Oxford from "../componets/proyect/oxford";
import Peps from "../componets/proyect/peps";
import School from "../componets/proyect/school";
import Ecommerce from "../componets/proyect/ecommerce";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/portfolio" element={<Porfolio />} />
       <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/proyecto/oxford" element={<Oxford />} />
      <Route path="/proyecto/peps" element={<Peps />} />
       <Route path="/proyecto/schools" element={<School />} />
     
       <Route path="/proyecto/ecommerce" element={<Ecommerce />} />
    </Routes>
  );
}
