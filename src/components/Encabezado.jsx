export default function Encabezado() {
  return (
    <header className="encabezado">
      <a className="logo" href="#inicio" aria-label="Ir al inicio">
        JDA.
      </a>

      <nav aria-label="Navegación principal">
        <ul className="navegacion">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
        </ul>
      </nav>

      <a
        className="enlace-contacto"
        href="#contacto"
        aria-label="Enviar correo electrónico"
      >
        Contacto
      </a>
    </header>
  );
}
