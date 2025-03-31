import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Vivek Yadav</h1>
        <p className="contact">
          <a href="mailto:vivekyadav4858@gmail.com">vivekyadav4858@gmail.com</a> | +91-8957005710 |
          <a href="https://github.com/Codeblinders" target="_blank" rel="noopener noreferrer">
            github.com/Codeblinders
          </a>         </p>
      </header>

      <section>
        <h2>Technical Skills</h2>
        <ul className="skill-list">
          <li><strong>Languages:</strong> Python, Java, JavaScript, C, SQL, HTML, CSS</li>
          <li><strong>Frameworks & Libraries:</strong> ReactJS, React Native, Node.js, Express.js, Perspective (JPMorgan Chase)</li>
          <li><strong>Tools:</strong> Git/GitHub, VS Code, Android Studio, IntelliJ IDEA, PyCharm, npm, Webpack</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
        </ul>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <div className="job">
          <h3 className="job-title">Software Engineering Virtual Experience, J.P. Morgan</h3>
          <p className="job-subtitle">Software Engineer Intern (Virtual) | July 2024</p>
          <ul>
            <li>Configured a local development environment with required tools and dependencies for seamless workflow.</li>
            <li>Debugged and resolved issues in repository files to ensure accurate rendering of a web application.</li>
            <li>Leveraged Perspective, J.P. Morgan’s open-source library, to create a dynamic data visualization graph for real-time trader insights.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="education">
          <strong>Indian Institute of Information Technology, Vadodara</strong><br />
          <em>B.Tech in Computer Science and Engineering | Nov 2022 – Present</em><br />
          Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Software Engineering, Dynamic Programming<br />
          CGPA: 7.38
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3 className="project-title">MERN Stack To-Do Application</h3>
          <p className="project-tech">Technologies: React, Node.js, Express.js, MongoDB | Deployed: 2025</p>
          <ul>
            <li>Engineered a full-stack task management app with secure user authentication and CRUD functionality.</li>
            <li>Designed a responsive, intuitive UI using React and optimized backend APIs for efficient data handling.</li>
            <li><strong>Live Demo:</strong> <a href="https://todo-4-tixo.onrender.com" target="_blank" rel="noopener noreferrer">todo-4-tixo.onrender.com</a></li>
          </ul>
        </div>
        <div className="project">
          <h3 className="project-title">Chef AI: AI-Powered Recipe Generator</h3>
          <p className="project-tech">Technologies: ReactJS, Node.js, Express.js, AI API | 2024</p>
          <ul>
            <li>Built an interactive web app integrating an AI API to deliver personalized recipe suggestions based on user inputs.</li>
            <li>Enhanced user experience with a sleek, responsive interface and robust backend architecture.</li>
            <li><strong>Source:</strong> <a href="https://github.com/Codeblinders/ChefAi" target="_blank" rel="noopener noreferrer">github.com/Codeblinders/ChefAi</a></li>
          </ul>
        </div>
        <div className="project">
          <h3 className="project-title">Movie Booking System</h3>
          <p className="project-tech">Technologies: Java, MySQL | 2023</p>
          <ul>
            <li>Developed a Java-based system for browsing movies, selecting showtimes, and booking tickets with MySQL integration.</li>
            <li>Implemented secure user authentication and efficient database queries for seamless transactions.</li>
            <li><strong>Source:</strong> <a href="https://github.com/Codeblinders/Movie_ticket_booking_system" target="_blank" rel="noopener noreferrer">github.com/Codeblinders/Movie_ticket_booking_system</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
