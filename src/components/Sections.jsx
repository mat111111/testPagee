// Cada sección es un componente simple. Reemplazá el contenido por el tuyo.

export function Home() {
  return (
    <div className="panel">
      <h1>&gt; whoami</h1>
      <p className="typed">Desarrollador/a Full-Stack — creando cosas prolijas y funcionales.</p>

      <div className="columns">
        <div className="card">
          <h3>01. Stack</h3>
          <p>React, JavaScript, Node, CSS moderno.</p>
        </div>
        <div className="card">
          <h3>02. Enfoque</h3>
          <p>Código limpio, interfaces rápidas y diseño cuidado.</p>
        </div>
        <div className="card">
          <h3>03. Disponibilidad</h3>
          <p>Abierto/a a nuevos proyectos y colaboraciones.</p>
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div className="panel">
      <h1>&gt; cat about.md</h1>
      <div className="columns">
        <div className="card wide">
          <h3>Sobre mí</h3>
          <p>
            Contá acá tu historia: de dónde venís, qué te gusta desarrollar,
            qué tecnologías dominás y qué te diferencia. Este bloque está
            pensado para texto más largo.
          </p>
        </div>
        <div className="card">
          <h3>Ubicación</h3>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const projects = [
    { name: 'proyecto-uno', desc: 'Breve descripción del proyecto 1.' },
    { name: 'proyecto-dos', desc: 'Breve descripción del proyecto 2.' },
    { name: 'proyecto-tres', desc: 'Breve descripción del proyecto 3.' },
    { name: 'proyecto-cuatro', desc: 'Breve descripción del proyecto 4.' },
  ]

  return (
    <div className="panel">
      <h1>&gt; ls ./proyectos</h1>
      <div className="columns">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a className="card-link" href="#">ver repo →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className="panel">
      <h1>&gt; ./contact.sh</h1>
      <div className="columns">
        <div className="card">
          <h3>Email</h3>
          <p>tu-email@ejemplo.com</p>
        </div>
        <div className="card">
          <h3>GitHub</h3>
          <p>github.com/tu-usuario</p>
        </div>
        <div className="card">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/tu-usuario</p>
        </div>
      </div>
    </div>
  )
}
