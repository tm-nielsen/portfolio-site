import { useState, useEffect, createElement } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GameInfo, SupplementedGameInfo, FocusedGameTileProps } from "../types/games"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import GameListSieve, { SieveMethod } from "../components/GameListSieve"
import extraGameInfo from "../assets/extra_game_info.json"
import '../styles/games.css'

const statusCodes = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
}

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [status, setStatus] = useState<string>(statusCodes.LOADING)
  const [sieveMethod, setSieveMethod] = useState<SieveMethod>()

  const {focusedGame} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8080/games')
    .then((res) => {
      return res.json()
    }).then((data): void => {
      setGameList(supplementGameList(data))
      setStatus(statusCodes.LOADED)
    }).catch(error => {
      setStatus(statusCodes.ERROR)
      console.log(error.message)
    })
  }, [])

  function supplementGameList(gameList: [GameInfo]): SupplementedGameInfo[]{
    return gameList.map((gameInfo): SupplementedGameInfo => 
      new SupplementedGameInfo(gameInfo, getExtraGameInfo(gameInfo.title))
    )
  }

  function getExtraGameInfo(gameTitle: string): object {
    let findResult = extraGameInfo.find(element => element.title === gameTitle)
    return findResult? findResult: {}
  }

  function updateSieveMethod(newSieveMethod: SieveMethod) {
    setSieveMethod(() => newSieveMethod)
    if (focusedGame)
      navigate('/games')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    if (sieveMethod)
      return sieveMethod(gameList)
    return gameList
  }

  function getStatusMessage() {
    switch (status){
      case statusCodes.LOADING: return 'Loading'
      case statusCodes.ERROR: return 'Server Offline'
    }
  }

  const displayList = gameList? getDisplayList(): []

  return (
    <div className="flat">
      <h1>Games</h1>
      {GameListSieve(updateSieveMethod)}
      {status === statusCodes.LOADED?
        displayList.length > 0? <ul className='game-list'>
          {
            displayList.map((gameInfo: SupplementedGameInfo) =>
            gameInfo.title === focusedGame?
              createElement(FocusedGameTile, {...new FocusedGameTileProps(gameInfo), key: 'focused-game'})
              : GameTile(gameInfo.title, gameInfo.cover_url))
          }
        </ul> : <h2>No Matching Games</h2>
      : <h2>{getStatusMessage()}</h2>}
    </div>
  )
}