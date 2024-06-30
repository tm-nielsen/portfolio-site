import { useState, useEffect, createElement } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { GameInfo, SupplementedGameInfo, FocusedGameTileProps, ExtraGameInfo } from "../types/games"
import { parseExtraGameInfo } from "../utils/gameInfoFileSystem"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import GameListSieve, { SieveMethod } from "../components/GameListSieve"
import offlineGameInfo from '../assets/offline_game_info.json'
import '../styles/games.css'

const statusCodes = {
  LOADING: 1,
  LOADED: 0,
  OFFLINE: 2
}

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [status, setStatus] = useState<number>(statusCodes.LOADING)
  const [sieveMethod, setSieveMethod] = useState<SieveMethod>()

  const {focusedGame} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_PATH)
    .then((res) => {
      return res.json()
    }).then((data): void => {
      supplementGameList(data).then(supplementedGameList =>
        setGameList(supplementedGameList)
      ).then(() => setStatus(statusCodes.LOADED))
    }).catch(error => {
      console.log(error.message)
      supplementGameList(offlineGameInfo as any).then(supplementedGameList =>
        setGameList(supplementedGameList)
      ).then(() => setStatus(statusCodes.OFFLINE))
    })
  }, [])

  async function supplementGameList(gameList: [GameInfo]): Promise<SupplementedGameInfo[]>{
    let supplementedGameList = gameList.map(async (gameInfo): Promise<SupplementedGameInfo> => {
      let extraGameInfo = await getExtraGameInfo(gameInfo.title)
      return new SupplementedGameInfo(gameInfo, extraGameInfo)
    })
    return await Promise.all(supplementedGameList)
  }

  async function getExtraGameInfo(gameTitle: string): Promise<ExtraGameInfo> {
    const filePath = `/game_info/${gameTitle}.md`

    let fileHeaderResponse = await fetch(filePath, {method: "HEAD"})
    if (fileHeaderResponse.headers.get("Content-Type") == "text/markdown")
      return await parseExtraGameInfo(filePath)
    return new ExtraGameInfo({}, {}, "No site description yet.")
  }

  function updateSieveMethod(newSieveMethod: SieveMethod, shouldResetSelection: boolean = true) {
    setSieveMethod(() => newSieveMethod)
    if (shouldResetSelection && focusedGame)
      navigate('/games')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    if (sieveMethod)
      return sieveMethod(gameList)
    return gameList
  }

  const displayList = gameList? getDisplayList(): []

  return (
    <div className="flat">
      <h1>Games</h1>
      <p className="centred-text">
        Below is a dynamic list of all my projects on{"\ "}
        <a className="flat" href="https://klungore.itch.io" target="_blank">Itch.io</a>.
      </p>
      <p className="centred-text">
        Others are on the <Link className="flat" to="/projects">Projects page</Link>.
      </p>
      <div/>
      {GameListSieve(updateSieveMethod, gameList)}
      {status === statusCodes.LOADING?
        <h2>Loading</h2>
      : displayList.length > 0? <ul className='game-list'>
          {
            displayList.map((gameInfo: SupplementedGameInfo) =>
            gameInfo.title === focusedGame?
              createElement(FocusedGameTile, {...new FocusedGameTileProps(gameInfo), key: 'focused-game'})
              : GameTile(gameInfo.title, gameInfo.cover_url))
          }
        </ul> : <h2>No Matching Games</h2>
      }
      {status === statusCodes.OFFLINE?
        <>
          <h2>Back End Offline.</h2>
          <p>This version of the games list was loaded by a manual backup and is thus outdated.</p>
        </>: null
      }
    </div>
  )
}