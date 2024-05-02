import { useState } from "react"
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


export default function GameSortingDropDown(updateSortingMethod: (m: GameSortingMethod) => void) 
{
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentMethodName, setCurrentMethodName] = useState<string>('title')
  const [isAscending, setIsAscending] = useState<boolean>(false)

  function selectSortingMethod(selectedMethodName: string) {
    console.log(selectedMethodName)
    setCurrentMethodName(selectedMethodName)
    let newSortingMethod = getSortingMethod(selectedMethodName)
    console.log(newSortingMethod)
    updateSortingMethod(newSortingMethod)
  }

  function swapSortOrder() {
    setIsAscending(!isAscending)
    updateSortingMethod(getSortingMethod())
  }

  function getSortingMethod(methodName: string = currentMethodName): GameSortingMethod{
    let selectedSortingMethod = sortingMethods[methodName]
    if (isAscending)
      return wrapAscendingSortingMethod(selectedSortingMethod)
    return selectedSortingMethod
  }

  function wrapAscendingSortingMethod(baseMethod: GameSortingMethod): GameSortingMethod{
    return (a: SupplementedGameInfo, b: SupplementedGameInfo) => -baseMethod(a, b)
  }

  return (
    <div className="drop-down-root row">
      <label htmlFor="game-sorters">Sort By</label>
      <select id="game-sorters" defaultValue={'title'}
      onChange={(event) => selectSortingMethod(event.target.value)}>
        {Object.keys(sortingMethods).map(methodName =>
          <option key={methodName} value={methodName}>{methodName}</option>)
        }
      </select>
    </div>
  )
}