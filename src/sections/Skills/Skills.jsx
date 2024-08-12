import styles from './skills.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillsCard from '../../common/SkillsCard';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsCard Icon={checkMarkIcon} skill="HTML" />
        <SkillsCard Icon={checkMarkIcon} skill="CSS" />
        <SkillsCard Icon={checkMarkIcon} skill="React" />
        <SkillsCard Icon={checkMarkIcon} skill="Node" />
        <SkillsCard Icon={checkMarkIcon} skill="Javascript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsCard Icon={checkMarkIcon} skill="Java" />
        <SkillsCard Icon={checkMarkIcon} skill="Spring Boot" />
        <SkillsCard Icon={checkMarkIcon} skill="Oracle/Mysql" />
        <SkillsCard Icon={checkMarkIcon} skill="JSX" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsCard Icon={checkMarkIcon} skill="AWS (Developer certified)" />
        <SkillsCard Icon={checkMarkIcon} skill="MongoDB" />
        <SkillsCard Icon={checkMarkIcon} skill="Git" />
        <SkillsCard Icon={checkMarkIcon} skill="Snowflake" />
        <SkillsCard Icon={checkMarkIcon} skill="SQL/PLSQL" />
      </div>
    </section>
  );
}

export default Skills;
