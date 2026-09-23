export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Jordan David Aragon, inicio">
        JDA<span>.</span>
      </a>

      <nav aria-label="Navegación principal">
        <ul className="nav-list">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
        </ul>
      </nav>

      <a className="header-contact" href="https://www.linkedin.com/in/jordanaragon/" target="_blank" rel="noreferrer">
        Contacto <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
