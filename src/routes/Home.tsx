import profile from '../assets/thumb_pfp.png'

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
        <h2>Some Things I Know</h2>
      </>
    </>
  )
}

export default Home