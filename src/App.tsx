type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with React and TypeScript.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
  },
  {
    title: 'Project Placeholder',
    description: 'Add details about another project here.',
    stack: ['Your Tech Stack'],
    link: '#',
  },
];

const coursework = [
  'CS 61B: Data Structures and Algorithms',
  'CS 61C: Machine Structures',
  'CS 168: Internet Architecture',
  'CS 162: Operating Systems and System Programming',
  'Data 100: Principles and Techniques of Data Science',
];

export default function App() {
  return (
    <div className="page">
      <header className="hero card">
        <img
          src="/profile-placeholder.svg"
          alt="Profile placeholder"
          className="profile-image"
        />
        <div>
          <h1>Natasha Wu</h1>
          <p className="subtitle">Aspiring Software Engineer</p>
          <p>
            Welcome to my portfolio! This site highlights my background,
            projects, and contact information.
          </p>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>About Me</h2>
          <p>
            I am a motivated developer passionate about building user-friendly
            software and learning modern web technologies.
          </p>
        </section>

        <section className="card">
          <h2>My Projects</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Stack:</strong> {project.stack.join(', ')}
                </p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View project
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Education & Relevant Coursework</h2>
          <p>
            <strong>University Name</strong> — Bachelor of Science in Computer
            Science
          </p>
          <ul>
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Contact Me</h2>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:natasha_wu@berkeley.edu">natasha_wu@berkeley.edu</a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (510) 277-7196
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/in/natasha-wu-461691257/" target="_blank" rel="noreferrer">
                https://www.linkedin.com/in/natasha-wu-461691257/
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/natashajyw" target="_blank" rel="noreferrer">
                https://github.com/natashajyw
              </a>
            </li>
            <li>
              <strong>Discord:</strong> yourname#1234
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
