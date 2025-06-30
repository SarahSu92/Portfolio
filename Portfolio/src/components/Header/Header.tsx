import './Header.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="top">
      <nav className="media-icons" aria-label="Social media links">
        <ul>
          <li>
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              aria-label="Send email"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              aria-label="Visit my LinkedIn profile"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username"
              target="_blank"
              aria-label="Visit my Github profile"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </li>
        </ul>
      </nav>

      <h1>Wlecome to my portfolio</h1>
      <h2>Sarah Sundberg</h2>
      <p className="text">
        Driven Frontend student with a strong interest in creating innovative
        and accessible web experiences. Throughout my studies, I have developed
        a solid foundation in TypeScript, HTML5, CSS, Node.js, and various
        frameworks such as Vue and React, with a focus on responsive design and
        accessibility.
      </p>
      <div className="image">
        <img src=".\public\Bild1.jpg" alt="Profile picture"></img>
      </div>
    </div>
  );
};
