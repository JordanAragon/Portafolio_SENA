const servicios = [
  {
    numero: "01",
    titulo: "Desarrollo web",
    descripcion:
      "Creación de páginas e interfaces web con HTML, CSS, JavaScript, React y Vite.",
  },
  {
    numero: "02",
    titulo: "Frontend",
    descripcion:
      "Desarrollo de interfaces responsive con una estructura clara y componentes fáciles de mantener.",
  },
  {
    numero: "03",
    titulo: "Soporte tecnológico",
    descripcion:
      "Mantenimiento y soporte de equipos de cómputo, periféricos y tareas técnicas.",
  },
];

export default function Servicios() {
  return (
    <section className="seccion" id="servicios" aria-labelledby="titulo-servicios">
      <header className="titulo-seccion">
        <p className="etiqueta">02 / Servicios</p>
        <h2 id="titulo-servicios">Soluciones tecnológicas simples y útiles.</h2>
      </header>

      <ol className="lista-servicios">
        {servicios.map((servicio) => (
          <li key={servicio.numero}>
            <article className="tarjeta tarjeta-servicio">
              <span className="numero">{servicio.numero}</span>
              <section>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </section>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
