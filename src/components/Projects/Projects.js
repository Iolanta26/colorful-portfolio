import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.jpg";
import food_order from "./pictures/food-order.jpg";
import portugal from "./pictures/portugal.jpg";
import dashboard from "./pictures/dashboard.jpg";

import "./projects.css";
import SideButtons from "../SideButtons/SideButtons";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="project-text">
        Check out some of my recent projects right here
      </div>

      <SideButtons />
      <div className="cards">
        <Card
          link="https://portugal-app.netlify.app/"
          image={portugal}
          headline="Portugal in your pocket"
          app="Mobile App"
          desc="Created using Next Js, Typescript, Redux, Styled Components."
          className="card-wrapper"
        />
        <Card
          link="https://dashboard-iolanta-scheifel.netlify.app/"
          image={dashboard}
          headline="Smarty Dashboard"
          app="Web App"
          desc="Created using React Js, Context Api, SASS."
          className="card-wrapper-second"
        />
        <Card
          link="https://food-app-iolanta.netlify.app/"
          headline="Food Delivery"
          image={food_order}
          app="Web App"
          desc="Created using React Js, Context Api, state management."
          className="card-wrapper-third"
        />
        <Card
          link="https://recipes-iolanta.netlify.app"
          headline="Full-Stack Recipe App"
          image={recipe}
          app="Web App"
          desc="Frontend: React Js.
          Backend: PHP and Symfony"
          className="card-wrapper-fourth"
        />
        <Card
          link="https://iolanta-scheifelphotographer.netlify.app/"
          headline="Photographer's Portfolio"
          image={photographer}
          app="Web App"
          desc="Created using React Js, state management."
          className="card-wrapper-fifth"
        />
      </div>
    </div>
  );
};

export default Projects;
