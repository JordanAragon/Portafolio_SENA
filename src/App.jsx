import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import BentoAbout from "./layouts/BentoAbout";
import WorkExperience from "./layouts/WorkExperience";
import Footer from "./layouts/Footer";
import ProjectItem from "./components/ProjectItem";

const projects = [
  {
    number: "01",
    title: "AiDEN",
    category: "Plataforma de gestión para viveros",
    context:
      "Proyecto académico orientado a organizar la operación de un vivero desde producción y trazabilidad hasta calidad, inventario, costos y reportes.",
    solution:
      "Una plataforma web con módulos separados por función para convertir procesos dispersos en información centralizada y fácil de consultar.",
    tags: ["React", "Vite", "Tailwind"],
    visualTitle: "Producción → Trazabilidad → Control",
    visualItems: ["Producción", "Trazabilidad", "Calidad", "Inventario"],
  },
  {
    number: "02",
    title: "Aragon Server",
    category: "Servidor personal y servicios self-hosted",
    context:
      "Infraestructura personal para centralizar archivos y música, con servicios desplegados sobre un servidor Ubuntu y acceso remoto seguro.",
    solution:
      "Una base de servicios con Docker, Nextcloud, Navidrome y Tailscale, pensada para aprender infraestructura mientras se resuelven necesidades reales.",
    tags: ["Ubuntu", "Docker", "Tailscale"],
    visualTitle: "Servidor → Servicios → Acceso",
    visualItems: ["Ubuntu Server", "Docker", "Nextcloud", "Navidrome"],
  },
  {
    number: "03",
    title: "Inventario FNC",
    category: "Inventario y control de activos",
    context:
      "Proyecto realizado en la Federación Nacional de Cafeteros para apoyar el control de equipos y activos tecnológicos.",
    solution:
      "Trabajo enfocado en mantenimiento, registro de inventario, revisión de activos y elaboración de reportes para facilitar el seguimiento operativo.",
    tags: ["Inventario", "Auditoría", "Reportes"],
    visualTitle: "Activo → Registro → Reporte",
    visualItems: ["Equipos", "Periféricos", "Inventario", "Reportes"],
  },
];

function Services() {
  const services = [
    {
      number: "01",
      title: "Desarrollo web",
      text: "Construcción de interfaces web con HTML, CSS, JavaScript, React y Vite, con una estructura clara y fácil de mantener.",
    },
    {
      number: "02",
      title: "Interfaces frontend",
      text: "Diseño y desarrollo de páginas y componentes enfocados en jerarquía visual, responsive design y buena experiencia de uso.",
    },
    {
      number: "03",
      title: "Soporte tecnológico",
      text: "Mantenimiento y soporte de equipos de cómputo, periféricos y tareas técnicas aprendidas durante mi formación y experiencia.",
    },
  ];

  return (
    <section className="section section-services" id="servicios" aria-labelledby="services-title">
      <header className="section-heading">
        <p className="eyebrow">03 / Servicios</p>
        <h2 id="services-title">Tecnología útil, sin complicarla porque sí.</h2>
        <p>
          Mi enfoque es construir soluciones que se puedan entender, explicar y mantener.
        </p>
      </header>

      <ol className="service-list">
        {services.map((service) => (
          <li key={service.number} className="service-item">
            <span className="service-number">{service.number}</span>
            <article>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section className="section section-projects" id="proyectos" aria-labelledby="projects-title">
      <header className="section-heading project-heading">
        <p className="eyebrow">04 / Trabajo seleccionado</p>
        <h2 id="projects-title">Tres proyectos. Tres problemas distintos.</h2>
        <p>
          Cada proyecto se presenta como un caso sencillo de explicar: contexto, solución
          y tecnologías o áreas involucradas.
        </p>
      </header>

      <section className="project-stack" aria-label="Proyectos destacados">
        {projects.map((project) => (
          <ProjectItem key={project.number} project={project} />
        ))}
      </section>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoAbout />
        <Services />
        <WorkExperience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
