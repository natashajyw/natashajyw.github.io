import { useState } from 'react';

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
  const email = 'natasha_wu@berkeley.edu';
  const [copyLabel, setCopyLabel] = useState('Copy');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel('Copied!');
      window.setTimeout(() => setCopyLabel('Copy'), 1500);
    } catch {
      setCopyLabel('Unable to copy');
      window.setTimeout(() => setCopyLabel('Copy'), 1500);
    }
  };

  return (
    <div className="page">
      <header className="hero card">
        <img
          src="/profile.jpg"
          alt="Natasha Wu profile photo"
          className="profile-image"
        />
        <div className="hero-content">
          <h1>Natasha Wu</h1>
          <p className="subtitle">Aspiring Software Engineer</p>
          <p>
            Welcome to my portfolio! This site highlights my background,
            projects, and contact information.
          </p>
          <div className="hero-actions" aria-label="Quick links">
            <a className="hero-button" href="#my-projects">
              View Projects
            </a>
            <a
              className="hero-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
            <div className="icon-links" aria-label="Social links">
              <a
                href="https://github.com/natashajyw"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.8c-2.95.64-3.57-1.25-3.57-1.25-.48-1.2-1.17-1.53-1.17-1.53-.95-.65.08-.64.08-.64 1.06.07 1.62 1.08 1.62 1.08.93 1.58 2.45 1.13 3.05.86.09-.68.36-1.13.66-1.39-2.36-.27-4.84-1.17-4.84-5.2 0-1.15.42-2.1 1.08-2.84-.11-.27-.47-1.38.11-2.87 0 0 .89-.28 2.9 1.08a9.97 9.97 0 0 1 5.28 0c2.01-1.36 2.9-1.08 2.9-1.08.58 1.49.22 2.6.11 2.87.67.74 1.08 1.69 1.08 2.84 0 4.04-2.48 4.92-4.85 5.19.37.32.71.95.71 1.92v2.84c0 .29.19.62.73.52A10.5 10.5 0 0 0 12 1.5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/natasha-wu-461691257/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M6.5 8.25A1.75 1.75 0 1 1 6.5 4.75a1.75 1.75 0 0 1 0 3.5ZM4.9 9.75h3.2V19h-3.2V9.75ZM10 9.75h3.06v1.26h.04c.43-.8 1.48-1.64 3.05-1.64 3.26 0 3.85 2.15 3.85 4.95V19h-3.2v-4.11c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17V19H10V9.75Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="card about">
          <h2>About Me</h2>
          <p>
            Hi, I’m Natasha. I’m a CS student at UC Berkeley and I like building things that actually work and feel good to use. Most of my background is in Python and C++, and recently I’ve been working on networking stuff, and also on Pintos, a simple instructional operating system framework for the x86 instruction set architecture. I’m learning React + TypeScript now so I can ship cleaner front ends and deploy projects end-to-end. A lot of my motivation for learning software engineering comes from games. I’m especially into roguelikes, and one long-term goal of mine is to build one, as I love replayability, and the idea of iterating until it’s fun.
          </p>
        </section>

        <section className="card education">
          <h2>Education & Relevant Coursework</h2>
          <p>
            <strong>University of California, Berkeley</strong> — Bachelor of
            Arts in Computer Science
          </p>
          <ul>
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </section>

        <section className="card projects" id="my-projects">
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

        <section className="card contact">
          <h2>Contact Me</h2>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:natasha_wu@berkeley.edu">{email}</a>{' '}
              <button type="button" className="copy-button" onClick={handleCopyEmail}>
                {copyLabel}
              </button>
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
          </ul>
        </section>

        <section className="card now">
          <h2>Now</h2>
          <p>Working on this site! :)</p>
        </section>
      </main>
    </div>
  );
}
