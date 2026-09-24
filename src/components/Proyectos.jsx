const proyectos = [
  {
    numero: "01",
    nombre: "AiDEN",
    tipo: "Plataforma de gestión para viveros",
    descripcion:
      "Proyecto académico para organizar procesos de producción, trazabilidad, calidad, inventario, costos y reportes.",
    tecnologias: "React · Vite · Tailwind",
    proceso: "Producción → Trazabilidad → Control",
  },
  {
    numero: "02",
    nombre: "Aragon Server",
    tipo: "Servidor personal",
    descripcion:
      "Infraestructura personal basada en Ubuntu para centralizar servicios como Nextcloud y Navidrome mediante Docker y acceso remoto con Tailscale.",
    tecnologias: "Ubuntu · Docker · Tailscale",
    proceso: "Servidor → Servicios → Acceso",
  },
  {
    numero: "03",
    nombre: "Inventario FNC",
    tipo: "Control de activos tecnológicos",
    descripcion:
      "Experiencia aplicada al mantenimiento, registro de equipos, inventario de activos y elaboración de reportes durante mi etapa en la Federación Nacional de Cafeteros.",
    tecnologias: "Mantenimiento · Inventario · Reportes",
    proceso: "Activo → Registro → Reporte",
  },
];

export default function Proyectos() {
  return (
    <section className="seccion" id="proyectos" aria-labelledby="titulo-proyectos">
      <header className="titulo-seccion">
        <p className="etiqueta">03 / Proyectos</p>
        <h2 id="titulo-proyectos">Trabajo que muestra cómo aprendo y construyo.</h2>
      </header>

      <section className="lista-proyectos" aria-label="Proyectos destacados">
        {proyectos.map((proyecto) => (
          <article className="proyecto" key={proyecto.numero}>
            <section className="proyecto-visual" aria-label={proyecto.proceso}>
              <p className="etiqueta">Flujo</p>
              <p className="flujo">{proyecto.proceso}</p>
            </section>

            <section className="proyecto-contenido">
              <p className="numero">{proyecto.numero}</p>
              <h3>{proyecto.nombre}</h3>
              <p className="tipo-proyecto">{proyecto.tipo}</p>
              <p>{proyecto.descripcion}</p>
              <p className="tecnologias">{proyecto.tecnologias}</p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}
