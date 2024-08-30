import React from 'react';
import './App.css';
import profilePic from './LinkedIn_profile.jpeg'; // Add a professional profile picture

function App() {
  const projects = [
    {
      title: 'RideShare Application',
      description: 'A responsive RideShare app built with Flutter, Node.js, and AWS.',
      link: 'https://github.com/SushmithaJagannath/RideShare-App',
      techStack: 'Flutter, Node.js, Express, AWS'
    },
    {
      title: 'Live Code Editor',
      description: 'A real-time collaborative code editor using WebRTC and WebSocket.',
      link: 'https://github.com/SushmithaJagannath/Live-Code-Editor',
      techStack: 'React, Node.js, WebRTC, WebSocket'
    },
    {
      title: 'AI-Generated Image Detector',
      description: 'A TensorFlow-based app to detect AI-generated images.',
      link: 'https://github.com/SushmithaJagannath/AI-Image-Detector',
      techStack: 'Python, TensorFlow, CNN, AWS'
    },
    {
      title: 'Covid-19 Violation Monitor',
      description: 'A system to monitor social distancing and mask compliance using YOLO.',
      link: 'https://github.com/SushmithaJagannath/Covid-19-Violation-Monitor',
      techStack: 'Python, YOLO, OpenCV, Streamlit'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Sushmitha Jagannath" className="profile-pic" />
        <h1>Sushmitha Jagannath</h1>
        <p>Software Developer | Passionate about building scalable software and AI-driven applications.</p>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am currently pursuing a Master’s in Computer Science at UCI, specializing in software development and AI. I have a solid background in building full-stack applications and deploying them on cloud platforms like AWS.
        </p>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>University of California, Irvine</h3>
          <p>Master's in Computer Science (Sep 2023 – Dec 2024)</p>
          <p>GPA: 3.95/4.00</p>
        </div>
        <div className="education-item">
          <h3>B.M.S College of Engineering, Bangalore</h3>
          <p>Bachelor of Engineering in Information Science (Jun 2017 – Mar 2021)</p>
          <p>GPA: 3.68/4.00</p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Developer Intern</h3>
          <h4>University of California, Irvine | Jul 2024 – Present</h4>
          <ul>
            <li>Developed a disease-associated antibody discovery tool with a user-friendly interface.</li>
            <li>Created REST APIs using Python Flask, optimizing I/O operations and reducing retrieval times by 85%.</li>
            <li>Deployed the application on AWS EC2 using Docker for enhanced availability and scalability.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Graduate Student Researcher</h3>
          <h4>University of California, Irvine | Feb 2024 – Jun 2024</h4>
          <ul>
            <li>Automated the extraction of financial data, reducing manual effort by 90%.</li>
            <li>Enhanced data accuracy and consistency through automation techniques.</li>
            <li>Developed a multi-threaded parser to efficiently manage large datasets.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Data Analyst</h3>
          <h4>Deloitte Consulting, Bangalore | Sep 2021 – Jul 2023</h4>
          <ul>
            <li>Developed and maintained Tableau dashboards for pharmaceutical sales and supply chain management.</li>
            <li>Optimized SQL queries for efficient data retrieval, reducing query execution time by 30%.</li>
            <li>Led the Tableau migration project, improving consistency and eliminating redundant reports.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => window.open(project.link, "_blank")}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <p>C, C++, Java, Python, SQL, JavaScript, HTML, CSS</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>Flask, TensorFlow, PyTorch, React, Streamlit, Express.js</p>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <p>AWS, Microsoft Azure, Git, Docker, JIRA</p>
          </div>
          <div className="skill-category">
            <h3>APIs</h3>
            <p>Google Maps API, Firebase Cloud Messaging</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Contact me at: <a href="mailto:sushmitj@uci.edu">sushmitj@uci.edu</a></p>
        <p>Connect with me on <a href="https://www.linkedin.com/in/SushmithaJagannath" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
    </div>
  );
}

export default App;
