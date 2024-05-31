import { Link } from 'react-router-dom'
import RevealableSection from '../components/RevealableSection'
import profile from '../assets/profile_picture.png'
import knowledge from '../assets/knowledge.json'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <div className="row flat-bottom">
        <img src={profile} alt="placeholder identification picture" className='profile-picture' />
        <div className='flat-bottom'>
          <p>Hey there, I'm</p>
          <h1>Twig Nielsen</h1>
          <i className='subscript'>
            <p className='centred-text'>B.Sc. in Software Engineering</p>
            <p className='centred-text'>(she/her)</p>
          </i>
        </div>
      </div>
      <div className='flat-top flat-bottom'>
        <a href="mailto: tmnielsen33@gmail.com" target="_blank" className='centred-text'>
          tmnielsen33@gmail.com
        </a>
        <a href="http://github.com/tm-nielsen" target="_blank" className='centred-text'>
          Github: tm-nielsen
        </a>
      </div>
      <p className='games-link-body'>
        You should check out my <Link to='/games' className='flat'>Games</Link>
      </p>
      <RevealableSection title="About Me">
        <p>
          I'm a capable developer passionate about creating engaging and accessible experiences. Most of the projects I've made and learned from have been games, but I've built few competent websites along the way using React.
        </p>
      </RevealableSection>
      <RevealableSection title="Skills I have Acquired">
        <ul className='flat-list'>
          {knowledge.skills.map((skillInfo, index) => {
            return (
            <li key={index}>
              <RevealableSection title={skillInfo.name} HeadingLevel='h3' contentPadding={0.5}>
                <p className='flat'>{skillInfo.description}</p>
              </RevealableSection>
            </li>
            )
          })}
        </ul>
      </RevealableSection>
      <RevealableSection title="Technologies I am Familiar With">
        <ul className='row'>
          {knowledge.technologies.map((entry, index) =>
            <li key={index}>
              <p className='flat'>{entry}</p>
            </li>
          )}
        </ul>
      </RevealableSection>
      <RevealableSection title="Programming Languages I Know">
        {knowledge.languages.map((languageTier, index) => {
          return (
            <div className='flat' key={index}>
              <h3>{languageTier.tierName}</h3>
              <ul className='row'>
                  {languageTier.languages.map((language, index) =>
                    <li key={index}>
                      <p className='flat'>{language}</p>
                    </li>
                  )}
              </ul>
            </div>
          )
        })}
      </RevealableSection>
    </>
  )
}