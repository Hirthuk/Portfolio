import styles from './projects.module.css';
import FoodBooker from '../../assets/FoodBooker_image.webp'
import HealthDashboard from '../../assets/Healthdashboard.webp'
import Blog from '../../assets/Nike_project_image.jpeg'
import Personality from '../../assets/Personality_devloper.webp'



import qrcode from '../../assets/Qrcode.jpg'
import todo from  '../../assets/Todo.jpg'

import ProjectsCard from '../../common/projectsCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          card={Blog}
          link="https://walklikepro.netlify.app/"
          h3="Shoe Shop"
          p="React E-commerce site"
        />
        <ProjectsCard
          card={FoodBooker}
          link="https://github.com/Hirthuk/FrontEnd_FodBooker"
          h3="Food Booker"
          p="Food ordering app for Office"
        />
        <ProjectsCard
          card={HealthDashboard}
          link="https://github.com/Hirthuk/Dashoborad_React"
          h3="Health dashboard"
          p="Schedule workout and diet"
        />
        <ProjectsCard
          card={Personality}
          link="https://github.com/Hirthuk/Personality-Website"
          h3="Personality Website"
          p="Personality  Builder"
        />
        <ProjectsCard
          card={todo}
          link="https://github.com/Hirthuk/React/blob/master/319-keeper-app-part-3-starting"
          h3="To-do-List"
          p="React based To-do list site"
        />
        <ProjectsCard
          card={qrcode}
          link="https://github.com/Hirthuk/QrCode-generator"
          h3="QR-Code"
          p="convert Url into QR-Code"
        />
        
        
        
      </div>
    </section>
  );
}

export default Projects;