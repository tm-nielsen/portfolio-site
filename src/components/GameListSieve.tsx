import { useState } from "react";
import GameSortingDropdown, { GameSortingMethod } from "../components/GameSortingDropdown"
import GameTagFilterDropdowns, { GameTagFilterer } from "../components/GameTagFilterDropdowns"
import GamePlatformFilterDropdown, { GameFilterMethod } from "../components/GamePlatformFilterDropdown"
import { SupplementedGameInfo } from "../types/games";

export type SieveMethod = (gameList: SupplementedGameInfo[]) => SupplementedGameInfo[]

export default function GameListSieve(onUpdate: (sieveMethod: SieveMethod) => void) {
  const [currentSortingMethod, setCurrentSortingMethod] = useState<GameSortingMethod>()
  const [currentTagFilterer, setCurrentTagFilterer] = useState<GameTagFilterer>()
  const [currentPlatformFilterMethod, setCurrentPlatformFilterMethod] = useState<GameFilterMethod>()

  function updateSortingMethod(sortingMethod: GameSortingMethod) {
    setCurrentSortingMethod(() => sortingMethod)
    onUpdate(generateSieveMethod({sortingMethod}))
  }

  function updateTagFilterer(tagFilterer: GameTagFilterer) {
    setCurrentTagFilterer(tagFilterer)
    onUpdate(generateSieveMethod({tagFilterer}))
  }

  function updatePlatformFilterMethod(platformFilterMethod: GameFilterMethod) {
    setCurrentPlatformFilterMethod(() => platformFilterMethod)
    onUpdate(generateSieveMethod({platformFilterMethod}))
  }

  function generateSieveMethod({
    sortingMethod = currentSortingMethod,
    tagFilterer = currentTagFilterer,
    platformFilterMethod = currentPlatformFilterMethod
  }: {
    sortingMethod?: GameSortingMethod | undefined,
    tagFilterer?: GameTagFilterer | undefined,
    platformFilterMethod?: GameFilterMethod | undefined
  }) {
    return (gameList: SupplementedGameInfo[]) => {
      gameList = gameList.sort(sortingMethod)
      if (platformFilterMethod)
        gameList = gameList.filter(platformFilterMethod)
      if (tagFilterer)
        gameList = tagFilterer.filterGameList(gameList)
      return gameList
    }
  }

  return <div className="dropdown-sieve-group">
    {GameSortingDropdown(updateSortingMethod)}
    {GamePlatformFilterDropdown(updatePlatformFilterMethod)}
    {GameTagFilterDropdowns(updateTagFilterer)}
  </div>
}