import { motion } from "framer-motion";
import recipe from "./pictures/recipe.jpg";
import photographer from "./pictures/photographer.jpg";
import food_order from "./pictures/food-order.jpg";
import portugal from "./pictures/portugal.jpg";
import dashboard from "./pictures/dashboard.jpg";
import painting from "./pictures/painting.jpeg";

import "./projects.css";
import SideButtons from "../SideButtons/SideButtons";
import Card from "./Card";
import { fadeInUp, stagger } from "../../animations";

const Projects = () => {
  return (
    <motion.div
      className="projects"
      id="projects"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <div className="project-text">
        Check out some of my recent projects right here
      </div>

      <SideButtons />
      <motion.div className="cards" variants={stagger}>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://portugal-app.netlify.app/"
            image={portugal}
            headline="Portugal in your pocket"
            app="Mobile App"
            desc="Created using Next Js, Typescript, Redux, Styled Components."
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://paintings-iolanta.netlify.app/"
            headline="Paintings Library"
            image={painting}
            app="Web App"
            desc="Created using Next Js 13, frame-motion dependancy."
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://dashboard-iolanta-scheifel.netlify.app/"
            image={dashboard}
            headline="Smarty Dashboard"
            app="Web App"
            desc="Created using React Js, Context Api, SASS."
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://food-app-iolanta.netlify.app/"
            headline="Food Delivery"
            image={food_order}
            app="Web App"
            desc="Created using React Js, Context Api, state management."
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://recipes-iolanta.netlify.app"
            headline="Full-Stack Recipe App"
            image={recipe}
            app="Web App"
            desc="Frontend: React Js.
          Backend: PHP and Symfony"
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <Card
            link="https://iolanta-scheifelphotographer.netlify.app/"
            headline="Photographer's Portfolio"
            image={photographer}
            app="Web App"
            desc="Created using React Js, state management."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
