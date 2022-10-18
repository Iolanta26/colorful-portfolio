import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.png";
import food_order from "./pictures/food-order.png";
import portugal from "./pictures/portugal.png";
import dashboard from "./pictures/dashboard.png";

import "./projects.css";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Projects = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./skills.json"),
    });
  });
  return (
    <div className="projects" id="projects">
      <div className="flexContainer">
        <h1 className="projectText">Projects</h1>
        <div className="animation-container">
          <div className="project-text">
            Check out some of my work right here
          </div>
          <div className="animation" ref={container}></div>
        </div>
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
      </div>
    </div>
  );
};

export default Projects;
