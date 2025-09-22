import { Arrow } from '../Arrow/Aorrow';
import './Main.scss';
import './_Tablet.scss';
import './_Desktop.scss';

export const Main = () => {
  return (
    <>
      <div className="undernav">
        <a
          href={`${import.meta.env.BASE_URL}CV Sarah Sundberg.pdf`}
          className="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href="#contact-section" className="contact">
          Contact
        </a>
      </div>
      <h3>Projects</h3>

      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}Merlynquiz.png`}
              alt="Merlyn quiz game, a quizgame."
            />
            <a
              href="https://sarahsu92.github.io/Merlynquiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">Merlyn quiz</h4>
            <p className="aboutp">
              This is a quiz game that I've work tohether with a group of five
              people. The quiz is a about flags and what country each flag
              represent. It's ten questions and you have three anwers to choose
              from, wich one you think it's right. You can follow how many
              questions you have answerd and how far you have come in the
              process with the car at the bottom of the page that moves forward
              for each answerd question. When the quiz is finished the result
              will show have many qustions you answerd correctly and time, also
              an animation pops up with confetti! 🎉 To visit live page click on
              the image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://sarahsu92.github.io/Merlynquiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>

          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
              <span>Eslint</span>
              <span>Prettier</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}Poseidonretreat.png`}
              alt="Poseidons retreat, a hotell/restort webbsite."
            />
            <a
              href="https://medieinstitutet.github.io/fed24d-grafiska-verktyg-elddvargskejsarna/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">Poseidons Retreat</h4>
            <p className="aboutp">
              This project was completed in two teams, the first team was tasked
              with designing a responsive and well-defined website of their
              choice, with an emphasis on consistent colors, typography, and
              element styling throughout the site. The second team then
              implemented the design and built the project using Vue as the
              framework 🚀 The project is a hotell/resort website that offers
              various rooms and booking alternatives. To visit live page click
              on the image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://medieinstitutet.github.io/fed24d-grafiska-verktyg-elddvargskejsarna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>Figma</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
              <span>Prettier</span>
              <span>Vue</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}Atlantisframe.png`}
              alt="Atlantis Frame, a travel webbsite."
            />
            <a
              href="https://sarahsu92.github.io/Atlantis_Frame/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">Atlantis Frame</h4>
            <p className="aboutp">
              This is a side project creating a travel webbpage, learning new
              skills and exploring new technics by adding video material to a
              webbpage. To visit live page click on the image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://sarahsu92.github.io/Atlantis_Frame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Prettier</span>
              <span>Vue</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}APIbooks.png`}
              alt="The Story House, a webbsite about books."
            />
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">The Story House</h4>
            <p className="aboutp">
              The Story House is a simple web application where users can browse
              a list of books, view details and reviews, and add their own
              reviews. Logged-in users can also add new books to the collection.
              All book data is fetched from a custom-built API connected to a
              MongoDB database.
            </p>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
              <span>Vue</span>
              <span>Prettier</span>
              <span>MongoDB</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}Todos.png`}
              alt="Todo-List, a webbsite about your todos."
            />
            <a
              href="https://sarahsu92.github.io/TodoList/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">Todo-List</h4>
            <p className="aboutp">
              This is project is about learning React and creating a simple todo
              list in wich you can add tasks, marked them as complete and remove
              them. To visit live page click on the image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://sarahsu92.github.io/TodoList/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
              <span>Eslint</span>
              <span>Prettier</span>
              <span>JavaScript</span>
              <span>React</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}Gottfridsmunkar.png`}
              alt="Gottfrids Munkar, a donat webbshop."
            />
            <a
              href="https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-SarahSu92"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">Gottfrids Munkar</h4>
            <p className="aboutp">
              This project is a onepage donut webbshop. This is my first
              webbshop creation, learning JavaScript so the page has not much
              CSS to celebrate about because I was focusing more on JavaScript
              and that was also the main focus for this project with the time
              given. The webb page is responsive to adapt all devices such as
              mobile, desktop and desktop. To visit live page click on the
              image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://medieinstitutet.github.io/fed24d-js-intro-inl-1-webshop-SarahSu92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section>
        <article className="projects">
          <div className="image-wrapper">
            <img
              className="image-projects"
              src={`${import.meta.env.BASE_URL}TheZoo.png`}
              alt="The Zoo, home page."
            />
            <a
              href="https://sarahsu92.github.io/TheZoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-live-button"
            >
              View Live Page
            </a>
          </div>
          <div className="projects-wrapper">
            <h4 className="headline">The Zoo</h4>
            <p className="aboutp">
              This project is about fetching an api and creating a functionality
              to feed the animals from it. There are a few rules and the last fed time
              is saved in LocalStorage. To visit live page click on the image.
            </p>
          </div>
          <div className="button">
            <a
              href="https://sarahsu92.github.io/TheZoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View Live Page</button>
            </a>
          </div>
          <div className="tech-wrap">
            <p className="tech-stack">Tech</p>
            <p className="tech">
              <span>Sass</span>
              <span>Vite</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
              <span>Eslint</span>
              <span>Prettier</span>
              <span>JavaScript</span>
              <span>React</span>
            </p>
          </div>
        </article>
      </section>
      {/* -------------------------------------------------- */}
      <section className="tech-skills">
        <article className="tech-skill">
          <h4 className="skill-headline">Skills</h4>
          <div className="tech-wrap">
            <ul className="skills">
              <li className="skill">HTML5</li>
              <li className="skill">CSS3</li>
              <li className="skill">JavaScript</li>
              <li className="skill">EsLint</li>
              <li className="skill">Prettier</li>
              <li className="skill">TypeScript</li>
              <li className="skill">Vue</li>
              <li className="skill">React</li>
              <li className="skill">Vite</li>
              <li className="skill">NPM</li>
              <li className="skill">Node.js</li>
              <li className="skill">MySQL</li>
              <li className="skill">MongoDB</li>
              <li className="skill">Figma</li>
              <li className="skill">Photoshop</li>
              <li className="skill">SASS</li>
            </ul>
          </div>
        </article>
      </section>

      <Arrow />
    </>
  );
};
