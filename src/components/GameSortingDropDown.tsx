import { useState } from "react"
import { FaCaretUp, FaCaretDown } from "react-icons/fa6"
import { SupplementedGameInfo } from "../types/games"

export type GameSortingMethod = (a: SupplementedGameInfo, b: SupplementedGameInfo) => number
type SortingMethodCollection = {[key: string]: GameSortingMethod}
const sortingMethods: SortingMethodCollection = {
  title: sortByTitle,
  date: sortByDate,
  views: sortByViews,
  downloads: sortByDownloads
}

function sortByTitle(a: SupplementedGameInfo, b: SupplementedGameInfo): number {
  if (a.title > b.title)
    return -1
  else if (a.title < b.title)
    return 1
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

export default function GameSortingDropdown(sendUpdatedSortingMethod: (m: GameSortingMethod) => void) 
{
  const [currentMethodName, setCurrentMethodName] = useState<string>('title')
  const [isDescending, setIsDescending] = useState<boolean>(true)

  function selectSortingMethod(selectedMethodName: string) {
    setCurrentMethodName(selectedMethodName)
    updateSortingMethod(selectedMethodName, true)
  }

  function swapSortOrder() {
    const isNowDescending = !isDescending
    updateSortingMethod(currentMethodName, isNowDescending)
  }

  function updateSortingMethod(methodName: string, descending: boolean): void {
    const newSortingMethod = sortingMethods[methodName]
    setIsDescending(descending)
    if (descending)
      sendUpdatedSortingMethod((a, b) => -newSortingMethod(a, b))
    else
      sendUpdatedSortingMethod(newSortingMethod)
  }

  return (
    <div className="drop-down-root row">
      <label>
        Sort By: 
        <select defaultValue={'title'} onChange={(event) => selectSortingMethod(event.target.value)}>
          {Object.keys(sortingMethods).map(methodName =>
            <option key={methodName} value={methodName}>{methodName}</option>)
          }
        </select>
      </label>
      <button onClick={swapSortOrder}>
        {
          isDescending? <FaCaretDown />
          : <FaCaretUp />
        }
      </button>
    </div>
  )
}