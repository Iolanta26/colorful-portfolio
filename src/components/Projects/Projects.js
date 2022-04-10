import customhook from "./pictures/customhook.jpg";
import speedgame from "./pictures/speedgame.jpg";
import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.png";
import food_order from "./pictures/food-order.png";
import green from "./green.svg";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <img src={green} alt="" className="green" />
      <div className="flexContainer">
        <h1 className="projectText">Projects</h1>
      </div>
      <div className="projectsContainer">
        <a
          href="https://iolanta-scheifelphotographer.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={photographer} alt="Chat App" />
          <h2>Photographer's Portfolio</h2>
          <p>
            Created using React Js, state management and dummy data to store
            images.
          </p>
        </a>

        <a
          href="https://recipes-iolanta.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={recipe} alt="recipe app" />
          <h2>Full-Stack Recipe App</h2>
          <p>
            Frontend: React Js <br />
            Backend: PHP and Symfony <br />
            Backend deployed on Heroku and needs some time to load.
          </p>
        </a>

        <a
          href="https://food-app-iolanta.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={food_order} alt="food order app" />
          <h2>Food Order App</h2>
          <p>
            Frontend: React Js <br />
            Basic food ordering app using state management, hooks, ContextApi.
          </p>
        </a>

        <a
          href="https://speedgame-iolanta.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={speedgame} alt="speedgame" className="projectImage" />
          <h2>React SpeedGame</h2>
          <p>Created using React Js, class components.</p>
        </a>

        <a
          href="https://custom-hook-iolanta-scheifel.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={customhook} alt="custom hook project" />
          <h2>Random GIF App</h2>
          <p>
            This app is made with React Js to practice custom hooks. Simple Gif
            API from giphy.com.
          </p>
        </a>

        <a
          href="https://custom-hook-iolanta-scheifel.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={customhook} alt="custom hook project" />
          <h2>Random GIF App</h2>
          <p>
            This app is made with React Js to practice custom hooks. Simple Gif
            API from giphy.com.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
