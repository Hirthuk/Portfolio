import styles from './projects.module.css';
import FoodBooker from '../../assets/FoodBooker_image.webp'
import HealthDashboard from '../../assets/Healthdashboard.webp'
import Blog from '../../assets/Nike_project_image.jpeg'
import Personality from '../../assets/Personality_devloper.webp'
import GSSTORE from '../../assets/GS_Store.jpeg'
import todo from  '../../assets/Todo.jpg'

import ProjectsCard from '../../common/projectsCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
        card = {GSSTORE}
        link="https://gsstorefrontend.netlify.app/"
        h3="E-Commerce site"
        p= "Fully functional E-Commerce site"
        />
        <ProjectsCard
          card={Blog}
          link="https://walklikepro.netlify.app/"
          h3="Shoe Shop"
          p="React E-commerce site"
        />
        <ProjectsCard
          card={HealthDashboard}
          link="https://hirthuk.github.io/Health_Dashboard/#"
          h3="Health dashboard"
          p="Frontend dashboard"
        />
        <ProjectsCard
          card={FoodBooker}
          link="https://github.com/Hirthuk/FrontEnd_FodBooker"
          h3="Food Booker"
          p="Food ordering app for Office"
        />
         <ProjectsCard
          card={todo}
          link="https://simplereactfrontendtodo.netlify.app/"
          h3="To-do-List"
          p="Simple React based To-do app"
        />
        <ProjectsCard
          card={Personality}
          link="https://github.com/Hirthuk/Personality-Website"
          h3="Personality Website"
          p="Personality  Builder"
        />
       
        
        
        
      </div>
    </section>
  );
}

export default Projects;