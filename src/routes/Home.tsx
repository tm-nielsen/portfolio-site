import profile from '../assets/thumb_pfp.png'
import knowledge from '../assets/knowledge.json'

export default function Home() {
  return (
    <>
      <div>
        <div className="row">
          <img src={profile} alt="placeholder identification picture" />
          <div>
            <p>Hey there, I'm</p>
            <h1>Twig Nielsen</h1>
            <i className='subscript'>
              <p className='centred-text'>B.Sc. in Software Engineering</p>
              <p className='centred-text'>(she/her)</p>
            </i>
          </div>
        </div>
          <p>
            A capable developer passionate about creating engaging and accessible experiences.
            Most of the projects I've made and learned from have been games, but I've built few competent websites along the way using React.
          </p>
      </div>
      <div>
        <h2>Some Skills I've Acquired</h2>
        <ul>
          {knowledge.skills.map((skillInfo, index) => {
            return (
            <li key={index}>
              <h3 style={{marginLeft: '0.5em'}}>{skillInfo.name}</h3>
              <p>{skillInfo.description}</p>
            </li>
            )
          })}
        </ul>
        <h2>Some Technologies I am Familiar With</h2>
        <ul className='row'>
          {knowledge.technologies.map((entry, index) =>
            <li key={index}>
              <p>{entry}</p>
            </li>
          )}
        </ul>
        <h2>Some Programming Languages I Know</h2>
        {knowledge.languages.map((languageTier, index) => {
          return (
            <div className='flat' key={index}>
              <h3>{languageTier.tierName}</h3>
              <ul className='row'>
                  {languageTier.languages.map((language, index) =>
                    <li key={index}>
                      <p>{language}</p>
                    </li>
                  )}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}