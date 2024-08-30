import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Sushmitha, a passionate software developer.</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>Currently pursuing a Master’s in Computer Science at UCI, with a strong background in software development.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>Java, Python, C++, SQL, AWS, etc.</p>
      </section>
      <section id="blogs">
        <h2>Blog</h2>
        <p>Coming soon...</p>
      </section>
      <footer>
        <p>Contact me at: [Your Email]</p>
        <p>Connect with me on <a href="https://www.linkedin.com">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
