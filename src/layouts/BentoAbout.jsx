const stack = ["React", "Vite", "CSS", "HTML", "JavaScript", "Tailwind"];

export default function BentoAbout() {
  return (
    <section className="section" id="sobre-mi" aria-labelledby="about-title">
      <header className="section-heading">
        <p className="eyebrow">01 / Sobre mí</p>
        <h2 id="about-title">Aprender tecnología haciendo cosas reales.</h2>
      </header>

      <section className="bento-grid" aria-label="Información personal y técnica">
        <article className="bento-card bento-large">
          <p className="card-label">Perfil</p>
          <h3>
            Desarrollo software con una mezcla de formación en sistemas, desarrollo web y
            soporte técnico.
          </h3>
          <p>
            Mi trabajo parte de entender el problema antes de llenar el proyecto de código.
            Me interesa que la solución sea clara para quien la usa y para quien tendrá que
            mantenerla después.
          </p>
        </article>

        <article className="bento-card bento-stack">
          <p className="card-label">Stack actual</p>
          <ul className="stack-list" aria-label="Stack tecnológico">
            {stack.map((technology) => (
              <li key={technology}>
                <span className="tech-badge">{technology}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="bento-card bento-location">
          <p className="card-label">Ubicación</p>
          <section className="location-map" aria-label="Cali, Colombia">
            <span className="map-dot" aria-hidden="true" />
            <span className="map-label">Cali, Colombia</span>
          </section>
        </article>

        <article className="bento-card bento-education">
          <p className="card-label">Estudios</p>
          <ul className="simple-list">
            <li>
              <strong>Ingeniería de Sistemas</strong>
              <span>UNAD · En formación</span>
            </li>
            <li>
              <strong>Tecnólogo en Análisis y Desarrollo de Software</strong>
              <span>SENA</span>
            </li>
            <li>
              <strong>Técnico en Mantenimiento de Equipos de Cómputo</strong>
              <span>SENA</span>
            </li>
          </ul>
        </article>

        <article className="bento-card bento-focus">
          <p className="card-label">Enfoque</p>
          <p className="focus-line">Web</p>
          <p className="focus-line">Sistemas</p>
          <p className="focus-line">Infraestructura</p>
        </article>
      </section>
    </section>
  );
}
