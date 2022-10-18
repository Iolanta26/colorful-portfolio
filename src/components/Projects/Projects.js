import speedgame from "./pictures/speedgame.jpg";
import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.png";
import food_order from "./pictures/food-order.png";
import portugal from "./pictures/portugal.png";
import dashboard from "./pictures/dashboard.png";

import "./projects.css";

const Projects = () => (
  <div className="projects" id="projects">
    <div className="flexContainer">
      <h1 className="projectText">Projects</h1>
      <div className="project-text">Check out some of my work right here</div>
    </div>
    <div className="projectsContainer">
      <a
        href="https://portugal-app.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div class="project-container">
          <div class="img-container">
            <img src={portugal} alt="portugal" />
          </div>
          <div class="text-container">
            <h3>Portugal in your pocket</h3>
            <div>
              Created using Next Js, Typescript, Redux, Styled Components.
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://dashboard-iolanta-scheifel.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div class="project-container">
          <div class="img-container">
            <img src={dashboard} alt="dashboard" />
          </div>
          <div class="text-container">
            <h3>Dashboard for Smarty</h3>
            <div>Created using React Js, Context Api, SASS.</div>
          </div>
        </div>
      </a>
      <a
        href="https://food-app-iolanta.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div class="project-container">
          <div class="img-container">
            <img src={food_order} alt="food order app" />
          </div>
          <div class="text-container">
            <h3>Food Delivery App</h3>
            <div>Created using React Js, Context Api, state management</div>
          </div>
        </div>
      </a>
      <a
        href="https://recipes-iolanta.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div class="project-container">
          <div class="img-container">
            <img src={recipe} alt="recipe app" />
          </div>
          <div class="text-container">
            <h3>Full-Stack Recipe App</h3>
            <div>
              Frontend: React Js <br />
              Backend: PHP and Symfony
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://iolanta-scheifelphotographer.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        {" "}
        <div class="project-container">
          <div class="img-container">
            <img src={photographer} alt="Chat App" />
          </div>
          <div class="text-container">
            <h3>Photographer's Portfolio</h3>
            <div>Created using React Js, state management.</div>
          </div>
        </div>
      </a>

      {/* <a
          href="https://portugal-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={portugal} alt="portugal" />
          <h2>Portugal in your pocket</h2>
          <h2>Mobile App</h2>
          <p>Created using Next Js, Context Api, Styled Components.</p>
        </a>
        <a
          href="https://dashboard-iolanta-scheifel.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={dashboard} alt="portugal" />
          <h2>Dashboard for Smarty</h2>
          <h2>Web App</h2>
          <p>Created using React Js, Context Api, SASS.</p>
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
          href="https://speedgame-iolanta.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="project"
        >
          <img src={speedgame} alt="speedgame" className="projectImage" />
          <h2>React SpeedGame</h2>
          <p>Created using React Js, class components.</p>
        </a> */}
    </div>
  </div>
);

export default Projects;
