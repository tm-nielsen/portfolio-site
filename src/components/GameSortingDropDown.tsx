import { useState } from "react"
import { FaCaretUp, FaCaretDown } from "react-icons/fa6"
import { SupplementedGameInfo } from "../types/games"

export type GameSortingMethod = (a: SupplementedGameInfo, b: SupplementedGameInfo) => number
type SortingMethodCollection = {[key: string]: {method: GameSortingMethod, descendByDefault: boolean}}
const sortingMethods: SortingMethodCollection = {
  title: {method: sortByTitle, descendByDefault: false},
  date: {method: sortByDate, descendByDefault: true},
  views: {method: sortByViews, descendByDefault: true},
  downloads: {method: sortByDownloads, descendByDefault: true}
}

function sortByTitle(a: SupplementedGameInfo, b: SupplementedGameInfo): number {
  if (a.title > b.title)
    return 1
  else if (a.title < b.title)
    return -1
  return 0
}
function sortByDate(a: SupplementedGameInfo, b: SupplementedGameInfo): number {
  return Date.parse(a.created_at) - Date.parse(b.created_at)
}
function sortByViews(a: SupplementedGameInfo, b: SupplementedGameInfo): number {
  return a.views_count - b.views_count
}
function sortByDownloads(a: SupplementedGameInfo, b: SupplementedGameInfo): number {
  return a.downloads_count - b.downloads_count
}

export default function GameSortingDropDown(sendUpdatedSortingMethod: (m: GameSortingMethod) => void) 
{
  const [currentMethodName, setCurrentMethodName] = useState<string>('title')
  const [isDescending, setIsDescending] = useState<boolean>(false)

  function selectSortingMethod(selectedMethodName: string) {
    setCurrentMethodName(selectedMethodName)
    const {descendByDefault: isNowDescending} = sortingMethods[selectedMethodName]
    updateSortingMethod(selectedMethodName, isNowDescending)
  }

  function swapSortOrder() {
    const isNowDescending = !isDescending
    updateSortingMethod(currentMethodName, isNowDescending)
  }

  function updateSortingMethod(methodName: string, descending: boolean): void {
    let {method} = sortingMethods[methodName]
    setIsDescending(descending)
    if (descending)
      sendUpdatedSortingMethod((a, b) => -method(a, b))
    else
      sendUpdatedSortingMethod(method)
  }

  return (
    <div className="drop-down-root row">
      <label htmlFor="game-sorters">Sort By</label>
      <select id="game-sorters" defaultValue={'title'}
      onChange={(event) => selectSortingMethod(event.target.value)}>
        Sort By: 
        {Object.keys(sortingMethods).map(methodName =>
          <option key={methodName} value={methodName}>{methodName}</option>)
        }
      </select>
      <button onClick={swapSortOrder}>
        {
          isDescending? <FaCaretDown />
          : <FaCaretUp />
        }
      </button>
    </div>
  )
}