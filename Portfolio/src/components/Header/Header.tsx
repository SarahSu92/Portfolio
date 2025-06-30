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
              <HiOutlineMail className="icon" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              aria-label="Visit my LinkedIn profile"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-username"
              target="_blank"
              aria-label="Visit my Github profile"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" size={24} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="image">
        <img className='profile' src="/Bild1.jpg" alt="Profile picture"></img>
      </div>
      <h1>Welcome to my portfolio</h1>
      <h2>Sarah Sundberg</h2>

      <p className="text">
        I am a driven Frontend student with a strong interest in creating innovative
        and accessible web experiences. Throughout my studies, I have developed
        a solid foundation in TypeScript, HTML5, CSS, SQL, UX/UI design and various
        frameworks such as Vue and React, with a focus on responsive design and
        accessibility.
      </p>
    </div>
  );
};
