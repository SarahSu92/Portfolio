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
          I am Frontend Developer with a strong interest in creating
          modern, user-friendly, and accessible web applications.
          Experienced in developing responsive solutions and
          working with API integrations and modern development
          tools. Motivated by solving problems and building digital
          solutions that provide value to users.
          Seeking an opportunity to contribute technical expertise,
          dedication, and a strong desire to continue growing and
        developing as a software developer.
        </p>
      </div>
    </>
  );
};
