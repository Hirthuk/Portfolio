import styles from './projects.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
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
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Personality Website"
          p="Personality analyzer and Builder"
        />
        <ProjectsCard
          card={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectsCard
          card={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;