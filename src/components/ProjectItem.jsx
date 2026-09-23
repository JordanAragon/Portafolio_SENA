export default function ProjectItem({ project, children }) {
  return (
    <article className="project-item">
      {children}
      <section className="project-copy">
        <p className="eyebrow">{project.number} / Proyecto</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </section>
    </article>
  );
}
