import customhook from "./pictures/customhook.jpg";
import speedgame from "./pictures/speedgame.jpg";
import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.png";
import food_order from "./pictures/food-order.png";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="flexContainer">
        <h1 className="projectText">Projects</h1>
      </div>
      <div className="projectsContainer">
        <div className="project">
          <a
            href="https://iolanta-scheifelphotographer.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item">
              <img src={photographer} alt="Chat App" />
              <p className="hoverText">Photographer's Portfolio</p>
            </div>
          </a>
          <p className="desc">
            Created using React Js, state management and dummy data to store
            images.
          </p>
        </div>
        <div className="project">
          <a
            href="https://recipes-iolanta.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item">
              <img src={recipe} alt="recipe app" />
              <p className="hoverText">Full-Stack Recipe App</p>
            </div>
          </a>
          <p className="desc">
            Frontend: React Js <br />
            Backend: PHP and Symfony <br />
            Backend deployed on Heroku and needs some time to load.
          </p>
        </div>
        <div className="project">
          <a
            href="https://food-app-iolanta.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item">
              <img src={food_order} alt="food order app" />
              <p className="hoverText">Food Order App</p>
            </div>
          </a>
          <p className="desc">
            Frontend: React Js <br />
            Basic food ordering app using state management, hooks, ContextApi.
          </p>
        </div>
        <div className="project">
          <a
            href="https://speedgame-iolanta.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item">
              <img src={speedgame} alt="speedgame" className="projectImage" />
              <p className="hoverText">React SpeedGame</p>
            </div>
          </a>
          <p className="desc">Created using React Js, class components.</p>
        </div>
        <div className="project">
          <a
            href="https://custom-hook-iolanta-scheifel.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="item">
              <img src={customhook} alt="custom hook project" />
              <p className="hoverText">Random GIF App</p>
            </div>
          </a>
          <p className="desc">
            This app is made with React Js to practice custom hooks. Simple Gif
            API from giphy.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
