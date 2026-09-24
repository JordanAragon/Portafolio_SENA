const tecnologias = ["React", "Vite", "CSS", "HTML", "JavaScript", "Tailwind"];

export default function SobreMi() {
  return (
    <section className="seccion" id="sobre-mi" aria-labelledby="titulo-sobre-mi">
      <header className="titulo-seccion">
        <p className="etiqueta">01 / Sobre mí</p>
        <h2 id="titulo-sobre-mi">Una formación técnica con enfoque en software.</h2>
      </header>

      <section className="cuadricula" aria-label="Información sobre Jordan David Aragon">
        <article className="tarjeta tarjeta-grande">
          <p className="etiqueta">Perfil</p>
          <h3>
            Combino desarrollo de software, sistemas y conocimientos de soporte
            tecnológico.
          </h3>
          <p>
            Me interesa crear soluciones que sean fáciles de entender, mantener y
            explicar. Mi formación conecta el desarrollo de software con una base
            técnica en equipos e infraestructura.
          </p>
        </article>

        <article className="tarjeta">
          <p className="etiqueta">Tecnologías</p>
          <ul className="lista-tecnologias">
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </article>

        <article className="tarjeta">
          <p className="etiqueta">Ubicación</p>
          <p className="dato-grande">Cali</p>
          <p className="texto-secundario">Colombia</p>
        </article>

        <article className="tarjeta">
          <p className="etiqueta">Estudios</p>
          <ul className="lista-simple">
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
      </section>
    </section>
  );
}
