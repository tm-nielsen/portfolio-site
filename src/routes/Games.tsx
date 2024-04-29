import { useState, useEffect } from "react"

interface GameInfo {
  title: string
}

const Games = () => {
  const [gameList, setGameList] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/games')
    .then((res) => {
      return res.json()
    }).then((data) => {
      setGameList(data.games)
      console.log(data)
    })
  }, [])

  return (
    <>
      <h1>Games</h1>
      <ul>
        {gameList? gameList.map((gameInfo: GameInfo, index) => {
          return <li key={index}>{gameInfo.title}</li>
        }): null}
      </ul>
    </>
  )
}

export default Games