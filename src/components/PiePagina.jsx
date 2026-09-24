export default function PiePagina() {
  return (
    <footer className="pie-pagina" id="contacto">
      <section className="llamada-contacto" aria-labelledby="titulo-contacto">
        <p className="etiqueta">05 / Contacto</p>
        <h2 id="titulo-contacto">Hablemos.</h2>
        <p>Desarrollo web, proyectos de software y tecnología aplicada.</p>
      </section>

      <nav className="enlaces-pie" aria-label="Enlaces personales">
        <a href="https://github.com/JordanAragon" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/jordanaragon/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </nav>

      <p className="pie-meta">Jordan David Aragon · 2026</p>
    </footer>
  );
}
