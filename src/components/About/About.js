import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import my_photo from '../../img/me.JPG'
import Resume from './Resume'
import resumepdf from './Resume2022.pdf';
import { Document, Page } from '@react-pdf/renderer';


const About = () => {
  const { name, photo, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hello, I am <span className='about__name'>{name}.</span>
        </h1>
      )} 
      
      <img className='about__photo' src={my_photo} alt="me"></img>

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resumepdf} className='about__resume'>resume</a>
          // <Resume className='about__resume' />
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
