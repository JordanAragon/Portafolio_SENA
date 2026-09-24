export default function Inicio() {
  return (
    <section className="inicio" id="inicio" aria-labelledby="titulo-inicio">
      <p className="etiqueta">Desarrollo web · Sistemas · Tecnología</p>

      <h1 id="titulo-inicio">
        Jordan David
        <span>Aragon.</span>
      </h1>

      <section className="inicio-inferior" aria-label="Presentación">
        <p>
          Estudiante de Ingeniería de Sistemas y Tecnólogo en Análisis y Desarrollo
          de Software. Desarrollo interfaces web y soluciones tecnológicas con un
          enfoque práctico y claro.
        </p>

        <a className="boton" href="#proyectos">
          Ver proyectos <span aria-hidden="true">↓</span>
        </a>
      </section>
    </section>
  );
}
