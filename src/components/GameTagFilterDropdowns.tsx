import { useEffect, useState } from "react";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { SupplementedGameInfo } from "../types/games";
import extraGameInfo from '../assets/extra_game_info.json'

type Dictionary = {[key: string]: any}
interface CategorizedTagInfo {
  [category: string]: {[tag: string]: TagAttributes}
}
class TagAttributes {
  enabled: boolean = false
  count: number = 1
}

export class GameTagFilterer {
  categorizedTags: {[category: string]: string[]} = {}

  filterGameList(gameList: SupplementedGameInfo[]) {
    return gameList.filter(gameInfo =>
      this.gameHasAllCategorizedTags(gameInfo)
    )
  }

  gameHasAllCategorizedTags(gameInfo: SupplementedGameInfo): boolean {
    for (const category in this.categorizedTags) {
      let fitsCategory = true
      this.categorizedTags[category].forEach(tag => {
          if (!(gameInfo as Dictionary)[category].includes(tag))
            fitsCategory = false
        }
      )
      if (!fitsCategory)
        return false
    }
    return true
  }

  constructor(tags: CategorizedTagInfo) {
    this.categorizedTags = {}
    for (const category in tags) {
      this.categorizedTags[category] = []
      for (const tag in tags[category])
        if (tags[category][tag].enabled)
          this.categorizedTags[category].push(tag)
    }
  }
}


export default function GameTagFilterDropdowns(sendUpdatedFilterer: (f: GameTagFilterer) => void) {
  const [filterTags, setFilterTags] = useState<CategorizedTagInfo>({})

  useEffect(() =>{
    setFilterTags(getFilterTags())
  }, [])

  function getFilterTags() {
    let properties: CategorizedTagInfo = {tags: {}, tools: {}, roles: {}}
    extraGameInfo.forEach((gameInfo: Dictionary) => {
      for (const category in properties) {
        if (gameInfo.hasOwnProperty(category))
          gameInfo[category].forEach((tag: string) => {
            if (properties[category].hasOwnProperty(tag))
              properties[category][tag].count++
            else
              properties[category][tag] = new TagAttributes()
          });
      }
    })
    return properties
  }

  function toggleTagFilter(category: string, tag: string) {
    let newFilterTags = {...filterTags}
    newFilterTags[category][tag].enabled = !newFilterTags[category][tag].enabled
    setFilterTags(newFilterTags)
    sendUpdatedFilterer(new GameTagFilterer(newFilterTags))
  }

  function makeOnCheckboxClicked(category: string, tag:string) {
    return (e: React.MouseEvent<SVGElement, MouseEvent>) => {
      e.stopPropagation()
      toggleTagFilter(category, tag)
    }
  }

  function clearCategoryFilters(category: string) {
    let newFilterTags = {...filterTags}
    Object.keys(newFilterTags[category]).forEach(tag =>
      newFilterTags[category][tag].enabled = false
    )
    setFilterTags(newFilterTags)
    sendUpdatedFilterer(new GameTagFilterer(newFilterTags))
  }

  function getDropdownItemsForTagCategory(category: string) {
    let dropdownItems = [{
      contents: <>- clear -</>,
      callback: () => clearCategoryFilters(category)
    }]
    Object.keys(filterTags[category]).map(tag => {
      const {enabled, count} = filterTags[category][tag]
      dropdownItems.push({
        contents: <>
          <div className="dropdown-icon-container">
            {enabled? 
            <FaSquareCheck onClick={makeOnCheckboxClicked(category, tag)}/>
            : <FaSquare onClick={makeOnCheckboxClicked(category, tag)}/>}
          </div>
          {tag + ': ' + count}
        </>,
        callback: () => toggleTagFilter(category, tag)
      })
    })
    return dropdownItems
  }

  return Object.keys(filterTags).map(category =>
    <Dropdown label={category} items={getDropdownItemsForTagCategory(category)} />)
}