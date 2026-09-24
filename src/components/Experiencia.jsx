export default function Experiencia() {
  return (
    <section className="seccion" id="experiencia" aria-labelledby="titulo-experiencia">
      <header className="titulo-seccion">
        <p className="etiqueta">04 / Experiencia</p>
        <h2 id="titulo-experiencia">Experiencia técnica aplicada a problemas reales.</h2>
      </header>

      <article className="experiencia">
        <header>
          <p className="etiqueta">Jul 2024 — Ago 2025</p>
          <h3>Federación Nacional de Cafeteros</h3>
          <p className="cargo">
            Comité Departamental de Cafeteros del Cauca · Aprendiz Técnico en
            Mantenimiento de Equipos de Cómputo
          </p>
        </header>

        <p>
          Apoyé el mantenimiento de computadores, impresoras y periféricos, además
          de tareas de software, cableado, inventario de activos y elaboración de
          reportes.
        </p>

        <ul className="etiquetas-experiencia">
          <li>Mantenimiento</li>
          <li>Soporte</li>
          <li>Cableado</li>
          <li>Inventario</li>
          <li>Reportes</li>
        </ul>
      </article>
    </section>
  );
}
