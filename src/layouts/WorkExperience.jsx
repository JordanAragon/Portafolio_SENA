export default function WorkExperience() {
  return (
    <section className="section" id="experiencia" aria-labelledby="experience-title">
      <header className="section-heading">
        <p className="eyebrow">02 / Experiencia</p>
        <h2 id="experience-title">Experiencia que aterriza la teoría.</h2>
      </header>

      <article className="experience-card">
        <header>
          <p className="experience-period">Jul 2024 — Ago 2025</p>
          <h3>Federación Nacional de Cafeteros · Comité Departamental de Cafeteros del Cauca</h3>
          <p className="experience-role">Aprendiz Técnico en Mantenimiento de Equipos de Cómputo</p>
        </header>

        <section className="experience-grid" aria-label="Responsabilidades">
          <p>
            Realicé mantenimiento de computadores, impresoras y periféricos, además de apoyar
            tareas de software, cableado, inventario de activos y elaboración de reportes.
          </p>

          <ul className="experience-tags" aria-label="Áreas de experiencia">
            <li>Mantenimiento</li>
            <li>Soporte</li>
            <li>Cableado</li>
            <li>Inventario</li>
            <li>Reportes</li>
          </ul>
        </section>
      </article>
    </section>
  );
}
