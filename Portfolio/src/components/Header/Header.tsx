import './Header.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return <> 
    <div className="top">
      <nav className="media-icons" aria-label="Social media links">
        <ul className='nav'>
          <li className='nav-icons'>
            <a
              href="mailto:sarah.sundberg@outlook.com"
              target="_blank"
              aria-label="Send email"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="icon" />
            </a>
          </li>
          <li className='nav-icons'>
            <a
              href="https://www.linkedin.com/in/sarah-sundberg92/"
              target="_blank"
              aria-label="Visit my LinkedIn profile"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li className='nav-icons'>
            <a
              href="https://www.github.com/SarahSu92"
              target="_blank"
              aria-label="Visit my Github profile"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="image">
        <img className='profile' src={`${import.meta.env.BASE_URL}image0.jpeg`} alt="Profile picture"></img>
      </div>
      <h1>Hi I'm</h1>
      <h2>Sarah Sundberg</h2>

      <p className="text">
        I am a driven Frontend student with a strong interest in creating innovative
        and accessible web experiences. Throughout my studies, I have developed
        a solid foundation in TypeScript, HTML5, CSS, SQL, UX/UI design and various
        frameworks such as Vue and React, with a focus on responsive design and
        accessibility.
      </p>

      <a
          href="/CV Sarah Sundberg.pdf"
          className="resume-wrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href="#contact-section" className="contact-wrap">
          Contact
        </a>
    </div>
  </>
};
