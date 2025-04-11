import { Link } from 'react-router-dom'
import profile from '../assets/profile_picture.png'
import featuredProjects from '../assets/featured_projects.json'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <div className="row flat-bottom">
        <img src={profile} alt="placeholder identification picture" className='profile-picture' />
        <div className='flat-bottom'>
          <p>Hey there, I'm</p>
          <h1>Twig</h1>
          <i className='subscript'>
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
        {/* <a href="Twig Nielsen CV.pdf" download={true} className='centred-text'>
          Download my CV
        </a> */}
      </div>
      <p className='professional-summary'>...a capable developer passionate about creating engaging and accessible experiences. Most of the projects I've made and learned from have been games, but I've built few competent websites along the way using React.</p>
      <i className='subscript'>
        <p className='centred-text'>Currently working as a Developer (Software, BCI, Gaming) at the University of Calgary</p>
      </i>
      <h2 className='featured'>Featured Projects</h2>
      <ul className='flat'>
        {featuredProjects.map(({title, link, description}, index) =>
          <div key={index}>
            <Link to={link} className='featured'>
              <h3 className='flat centred-text'>{title}</h3>
            </Link>
            <p>{description}</p>
          </div>
        )}
      </ul>
      <Link to='/games' className='games-link'>More Games</Link>
    </>
  )
}