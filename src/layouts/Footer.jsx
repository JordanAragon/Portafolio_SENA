export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <section className="footer-cta" aria-labelledby="footer-title">
        <p className="eyebrow">05 / Contacto</p>
        <h2 id="footer-title">Hablemos.</h2>
        <p>
          Desarrollo web, proyectos de software y tecnología aplicada.
        </p>
      </section>

      <nav className="footer-links" aria-label="Enlaces de contacto">
        <a href="https://github.com/JordanAragon" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/jordanaragon/" target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="footer-meta">
        <p>Jordan David Aragon</p>
        <p>Portafolio SENA · 2026</p>
      </section>
    </footer>
  );
}
