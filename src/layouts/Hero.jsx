export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <p className="hero-kicker">Desarrollo web · Sistemas · Tecnología</p>

      <h1 id="hero-title">
        Jordan David
        <span>Aragon.</span>
      </h1>

      <section className="hero-bottom" aria-label="Presentación">
        <p className="hero-role">
          Estudiante de Ingeniería de Sistemas y Tecnólogo en Análisis y Desarrollo de Software.
          Construyo soluciones web y trabajo con tecnología de forma práctica.
        </p>

        <nav className="hero-actions" aria-label="Acciones principales">
          <a className="button button-primary" href="#proyectos">
            Ver proyectos <span aria-hidden="true">↓</span>
          </a>
          <a className="button button-secondary" href="https://github.com/JordanAragon" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </section>
    </section>
  );
}
