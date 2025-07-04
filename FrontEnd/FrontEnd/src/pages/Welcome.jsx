import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      
      <div className="container center">
        <div className="card">
          <h1 className="text-primary">Welcome to Sales-savvy</h1>
            <h3 className="text-muted" style={{ textAlign: 'center' }}>
              Your one-stop shopping solution
            </h3>
          
          <div style={{ marginTop: '24px', display: 'flex', gap: '50px', justifyContent: 'center' }}>
            <button onClick={() => navigate('/sign_in_page')}>
              Sign In
            </button>

            <button onClick={() => navigate('/sign_up_page')}>
              Sign Up
            </button>
          </div>


          {/* Full Project Description */}
          <div style={{ textAlign: 'left', marginTop: '40px' }}>
            <h2>✨ Full Project Description – “Sales-savvy”</h2>

            <h3>About This Project</h3>
            <p>
              Hello, I’m <strong>Vikasini</strong>. This project, <strong>Sales-savvy</strong>, is a modern e-commerce web application I developed with guidance and mentorship from <strong>KodNest</strong>. The goal was to create a clean, responsive shopping platform that demonstrates real-world frontend development skills.
            </p>
            <p>
              Sales-savvy is designed as a one-stop shopping solution, featuring essential e-commerce functionality such as product browsing, user authentication, shopping cart management, and admin tools for product updates. Through this project, I learned how to plan, design, and build a professional-grade application from scratch.
            </p>

            <h3>My Learning Journey</h3>
            <ul>
              <li><strong>Component-based architecture:</strong> Built reusable UI components</li>
              <li><strong>React Router:</strong> Smooth navigation for pages like Sign In, Sign Up, Product Catalog</li>
              <li><strong>State management:</strong> Used state and props for user interactions</li>
              <li><strong>API integration:</strong> Axios for backend communication</li>
              <li><strong>Responsive design:</strong> CSS for mobile-friendly UI</li>
              <li><strong>Form handling:</strong> Built and validated login/signup forms</li>
              <li><strong>Version control:</strong> Used Git and GitHub for tracking and backups</li>
            </ul>

            <h3>Technologies and Tools Used</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>npm</li>
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Spring Boot & MySQL (backend)</li>
            </ul>

            <h3>Key Features Implemented</h3>
            <ul>
              <li>Secure user authentication with Sign In and Sign Up pages</li>
              <li>Product listing with clean, card-style layouts</li>
              <li>Shopping cart functionality to manage selections</li>
              <li>Admin panel for adding and updating products</li>
              <li>Fully responsive design for all devices</li>
              <li>Modern, commercial-style UI</li>
            </ul>

            <h3>What I Learned and Upskilled</h3>
            <ul>
              <li> React component design</li>
              <li> State and props handling</li>
              <li> Frontend routing and navigation</li>
              <li> API consumption with Axios</li>
              <li> Scalable CSS styling</li>
              <li> Modular project structure</li>
              <li> Debugging and optimization</li>
              <li> Mobile-first responsive layouts</li>
            </ul>

            <h3>Acknowledgment</h3>
            <p>
              I am grateful to <strong>KodNest</strong> and my mentors for their support and guidance throughout this project. Their encouragement played a key role in helping me grow as a developer.
            </p>

            <h3>Connect With Me</h3>
            <p>
              I’m always looking to connect with fellow developers and tech enthusiasts. Feel free to reach out on my social media profiles below:
            </p>
          
            <p className='text-muted' style={{ marginTop: '8px', fontSize: '14px', textAlign: 'center' }}>
              <a href="https://www.linkedin.com/in/vikasinim/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
              <a href="https://linktr.ee/vikasinim" target="_blank" rel="noopener noreferrer">Linktree</a>
            </p>

            <p className="text-muted" style={{ marginTop: '8px', fontSize: '14px', textAlign: 'center' }}>
              Licensed to Vikasini
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
