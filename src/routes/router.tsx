import { Route, Routes } from "react-router-dom";
import Inicio from "../componets/Inicio";
import Porfolio from "../componets/Porfolio";
import SobreMi from "../componets/SobreMi";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/portfolio" element={<Porfolio />} />
       <Route path="/sobre-mi" element={<SobreMi />} />
    </Routes>
  );
}
