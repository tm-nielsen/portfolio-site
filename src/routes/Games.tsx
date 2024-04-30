import { useState, useEffect } from "react"
import GameTile from "../components/GameTile"
import '../styles/games.css'

const Games = () => {
  const [gameList, setGameList] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/games')
    .then((res) => {
      return res.json()
    }).then((data) => {
      setGameList(data)
      // console.log(data)
    })
  }, [])

  return (
    <>
      <h1>Games</h1>
      <ul className='game-list'>
        {gameList? gameList.map((gameInfo: GameInfo, index) => {
          return GameTile(gameInfo, index)
        }): null}
      </ul>
    </>
  )
}

export default Games