type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'Baseball Stadium Tour Generator',
    summary:
      'Built in a Scrum-based team to create a full-stack baseball stadium tour planner (11,000+ lines of code).',
    highlights: [
      'Implemented Dijkstra\'s algorithm with recursion to generate best routes case-by-case for fans.',
      'Developed an intuitive GUI using Qt Creator for an improved user experience.',
      'Integrated SQLite for efficient backend data storage and retrieval.',
    ],
    stack: ['C++', 'Qt Creator', 'SQLite', 'Algorithms'],
  },
  {
    title: 'Linked List Implementation in ARM64 Assembly',
    summary:
      'Co-developed a robust linked list system in ARM64 assembly (6,000+ lines of code).',
    highlights: [
      'Built functions to read, store, and manage strings from text files in linked-list nodes.',
      'Supported manual insertion, deletion, search, and print operations on nodes.',
      'Added memory allocation tracking and file rewrite support for persistent storage.',
    ],
    stack: ['ARM64 Assembly', 'Data Structures', 'Memory Management', 'File I/O'],
  },
  {
    title: 'Discord Bot',
    summary:
      'Designed and implemented a Python Discord bot to support interactive and administrative server features.',
    highlights: [
      'Implemented user commands with text responses and image attachments to boost engagement.',
      'Added moderation capabilities including kick, mute, and ban tools for admins.',
      'Configured welcome and departure announcements to improve server community experience.',
    ],
    stack: ['Python', 'discord.py'],
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
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p>
                  <strong>Stack:</strong> {project.stack.join(', ')}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Education & Relevant Coursework</h2>
          <p>
            <strong>University of California, Berkeley</strong> — Bachelor of
            Science in Computer Science
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
