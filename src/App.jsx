import Encabezado from "./components/Encabezado";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import PiePagina from "./components/PiePagina";

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Inicio />
        <SobreMi />
        <Servicios />
        <Proyectos />
        <Experiencia />
      </main>
      <PiePagina />
    </>
  );
}
