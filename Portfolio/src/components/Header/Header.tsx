import './Header.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <>
      <div className="top">
        <nav className="media-icons" aria-label="Social media links">
          <ul className="nav">
            <li className="nav-icons">
              <a
                href="mailto:sarah.sundberg@outlook.com"
                target="_blank"
                aria-label="Send email"
                rel="noopener noreferrer"
              >
                <HiOutlineMail className="icon" />
              </a>
            </li>
            <li className="nav-icons">
              <a
                href="https://www.linkedin.com/in/sarah-sundberg92/"
                target="_blank"
                aria-label="Visit my LinkedIn profile"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li className="nav-icons">
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
        <div className='profile-section'>
        <div className="image">
          <img
            className="profile"
            src={`${import.meta.env.BASE_URL}image0.jpeg`}
            alt="Profile picture"
          ></img>
        </div>
        <h1>Hi I'm</h1>
        <h2>Sarah Sundberg</h2>

        <p className="text">
          I am a motivated Frontend student with a strong passion for building
          innovative and accessible web applications.
          <br />
          <br /> My academic background has equipped me with a solid foundation
          in TypeScript, HTML5, CSS, SQL, and UX/UI design, along with hands-on
          experience using modern frameworks such as Vue and React.
          <br />
          <br />I have a particular focus on responsive design and accessibility
          best practices, aiming to create the best user experiences that are
          both functional and inclusive.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}CV Sarah Sundberg.pdf`}
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
      </div>
    </>
  );
};
