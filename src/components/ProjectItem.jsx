function ProjectVisual({ title, items }) {
  return (
    <figure className="project-visual" aria-label={title}>
      <figcaption>{title}</figcaption>
      <ol className="architecture-list">
        {items.map((item, index) => (
          <li key={item}>
            <span className="architecture-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function ProjectItem({ project }) {
  return (
    <article className="project-item">
      <ProjectVisual title={project.visualTitle} items={project.visualItems} />

      <section className="project-copy" aria-labelledby={`project-${project.number}`}>
        <p className="eyebrow">{project.number} / Proyecto</p>
        <h3 id={`project-${project.number}`} className="project-title">
          {project.title}
        </h3>
        <p className="project-category">{project.category}</p>

        <section className="project-details" aria-label="Resumen del proyecto">
          <article>
            <p className="detail-label">Contexto</p>
            <p>{project.context}</p>
          </article>
          <article>
            <p className="detail-label">Qué hice</p>
            <p>{project.solution}</p>
          </article>
        </section>

        <ul className="tag-list" aria-label="Tecnologías o áreas">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="tag">{tag}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
