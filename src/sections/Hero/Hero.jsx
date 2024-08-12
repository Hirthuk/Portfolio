import React from 'react'
import styles from './hero.module.css'
import heroImg from './../../assets/hero-img.png'
import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.svg'
import githubIcon from './../../assets/github-light.svg'
import Linkedin from './../../assets/linkedin-light.svg'
import Instagram from './../../assets/InstaDarkforLight.png'
import CV from './../../assets/Sharankumar_P_Resume.pdf'
import darkInsta from './../../assets/InstaLight_forDark.png'
import darkLinkedin from './../../assets/linkedin-dark.svg'
import darkGithub from './../../assets/github-dark.svg'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
      // By wrapping the Themeprovider inside the app all the things the themeprovider provides can be accessed by all child compoentns
      // By using useTheme(Hold the contenxt(state)) we can get the theme follow the notes for better understanding
    const {theme, toggleTheme} = useTheme();
  
  return (
   <section id='Hero' className= {styles.container}>
    <div className= {styles.colorModecontainer}>
      <img className={styles.Hero} src= {heroImg} alt="Profile picture of Sharan" srcset="" />
       <img className= {styles.colorMode} src= {theme=== 'light' ? sun : moon} alt="Color mode icon" srcset=""
       onClick={toggleTheme} />
    </div>
    <div className= {styles.info}>
      <h1>Sharankumar</h1>
      <h2>FullStack developer</h2>
      <span>
      <a href="https://github.com/Hirthuk" target="_blank" rel="noopener noreferrer">
      <img src={theme=== 'light'? githubIcon: darkGithub} alt="githubPage" srcset="" />
      </a>
      <a href="https://www.linkedin.com/in/sharankumar-p-g3" target="_blank" rel="noopener noreferrer">
      <img src={theme=== 'light' ? Linkedin: darkLinkedin} alt="LinkedinPage" srcset="" />
      </a>
      <a href="https://www.instagram.com/sharan_13_09/" target="_blank" rel="noopener noreferrer">
      <img src={theme=== 'light' ?  Instagram: darkInsta} alt="InstaPage" srcset="" />
      </a>
      </span>
      <p className = {styles.description}>Passionate full stack developer and cloud architect.</p>
      <a href= {CV}  download rel="noopener noreferrer">
        <button className='hover'>Resume</button>
      </a>
    </div>
   </section>
      
    
  )
}


export default Hero
