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
        Check out some of my projects right here
      </div>

      <SideButtons />
      <div className="cards">
        <Card
          link="https://portugal-app.netlify.app/"
          image={portugal}
          headline="Portugal in your pocket"
          app="Mobile App"
          desc="Created using Next Js, Typescript, Redux, Styled Components."
        />
        <Card
          link="https://dashboard-iolanta-scheifel.netlify.app/"
          image={dashboard}
          headline="Smarty Dashboard"
          app="Web App"
          desc="Created using React Js, Context Api, SASS."
        />
        <Card
          link="https://food-app-iolanta.netlify.app/"
          headline="Food Delivery"
          image={food_order}
          app="Web App"
          desc="Created using React Js, Context Api, state management."
        />
        <Card
          link="https://recipes-iolanta.netlify.app"
          headline="Full-Stack Recipe App"
          image={recipe}
          app="Web App"
          desc="Frontend: React Js.
          Backend: PHP and Symfony"
        />
        <Card
          link="https://iolanta-scheifelphotographer.netlify.app/"
          headline="Photographer's Portfolio"
          image={photographer}
          app="Web App"
          desc="Created using React Js, state management."
        />
      </div>
    </div>
  );
};

export default Projects;
