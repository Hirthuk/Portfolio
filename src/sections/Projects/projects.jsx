import styles from './projects.module.css';
import viberr from '../../assets/Blog Website.jpg';
import freshBurger from '../../assets/Personality.jpg';
// import hipsster from '../../assets/hipsster.png';
import secrets from '../../assets/SecretsImg.jpg'
import fitLift from '../../assets/fitlift.png';
import qrcode from '../../assets/Qrcode.jpg'
import todo from  '../../assets/Todo.jpg'
import ProjectsCard from '../../common/projectsCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          card={viberr}
          link="https://github.com/Hirthuk/CreateBlogApp"
          h3="CreateBlog"
          p="Simple Blog webiste"
        />
        <ProjectsCard
          card={freshBurger}
          link="https://github.com/Hirthuk/Personality-Website"
          h3="Personality Website"
          p="Personality  Builder"
        />
        <ProjectsCard
          card={secrets}
          link="https://github.com/Hirthuk/Crazysecrets/tree/main"
          h3="Secrets"
          p="Get random secrets"
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
        <ProjectsCard
          card={fitLift}
          link="https://github.com/Hirthuk/SimonGame"
          h3="Simon"
          p="Play Simon game"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;