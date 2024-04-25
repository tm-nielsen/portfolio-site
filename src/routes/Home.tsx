import profile from '../assets/thumb_pfp.png'
import knowledge from '../assets/knowledge.json'

const Home = () => {
  return (
    <>
      <div className="flex-row">
        <img src={profile} alt="placeholder identification picture" />
        <div className='flex-column'>
          <p>Hey there, I'm</p>
          <h1>Twig Nielsen</h1>
          <p>
            a capable developer passionate about creating engaging and accessible experiences.
            Most of the projects I've made and learned from have been games, but I've built few compentent websites along the way using React.
          </p>
        </div>
      </div>
      <>
        <h2>Some Skills I've Acquired</h2>
        <ul>
          {knowledge.skills.map((skillInfo, index) => {
            return (
            <li key={index}>
              <h3>{skillInfo.name}</h3>
              <p>{skillInfo.description}</p>
            </li>
            )
          })}
        </ul>
        <h2>Some Technologies I am Familiar With</h2>
        <ul className='flex-row'>
          {knowledge.technologies.map((entry, index) =>
            <li key={index}>
              <p>{entry}</p>
            </li>
          )}
        </ul>
        <h2>Some Programming Languages I Know</h2>
        {knowledge.languages.map((languageTier, index) => {
          return (
            <>
              <h3>{languageTier.tierName}</h3>
              <ul className='flex-row'>
                  {languageTier.languages.map((language, index) =>
                    <li key={index}>
                      <p>{language}</p>
                    </li>
                  )}
              </ul>
            </>
          )
        })}
      </>
    </>
  )
}

export default Home