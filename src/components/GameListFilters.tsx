import { useEffect, useState } from "react";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
import { SupplementedGameInfo } from "../types/games";
import extraGameInfo from '../assets/extra_game_info.json'

type Dictionary = {[key: string]: any}
interface CategorizedFilterTags {
  [category: string]: {[tag: string]: TagAttributes}
}
class TagAttributes {
  enabled: boolean = false
  count: number = 1
}

export class GameInfoFilterer {
  tagFilters: {[category: string]: string[]} = {}
  flagFilters: string[] = []

  filterGameList(gameList: SupplementedGameInfo[]) {
    return gameList.filter(gameInfo =>
      this.gameFitsCategorizedTagFilters(gameInfo)
      && this.gameFitsFlagFilters(gameInfo)
    )
  }

  gameFitsCategorizedTagFilters(gameInfo: SupplementedGameInfo): boolean {
    for (const category in this.tagFilters) {
      let fitsCategory = true
      this.tagFilters[category].forEach(tag => {
          if (!(gameInfo as Dictionary)[category].includes(tag))
            fitsCategory = false
        }
      )
      if (!fitsCategory)
        return false
    }
    return true
  }

  gameFitsFlagFilters(gameInfo: Dictionary): boolean {
    for (const propertyName in this.flagFilters) {
      if (!gameInfo[propertyName])
        return false
    }
    return true
  }

  constructor(tags: CategorizedFilterTags) {
    this.tagFilters = {}
    for (const category in tags) {
      this.tagFilters[category] = []
      for (const tag in tags[category])
        if (tags[category][tag].enabled)
          this.tagFilters[category].push(tag)
    }

    this.flagFilters = []
  }
}


export default function GameListFilters(sendUpdatedFilterer: (f: GameInfoFilterer) => void) {
  const [filterTags, setFilterTags] = useState<CategorizedFilterTags>({})

  useEffect(() =>{
    setFilterTags(getFilterTags())
  }, [])

  function getFilterTags() {
    let properties: CategorizedFilterTags = {tags: {}, tools: {}, roles: {}}
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

    console.log(properties)
    return properties
  }

  function toggleTagFilter(category: string, tag: string) {
    let newFilterTags = {...filterTags}
    newFilterTags[category][tag].enabled = !newFilterTags[category][tag].enabled
    setFilterTags(newFilterTags)
    sendUpdatedFilterer(new GameInfoFilterer(newFilterTags))
  }

  return (
    <div className="filter-root">
      <h3>Filters:</h3>
      <div className="row">
        {
          Object.keys(filterTags).map(category =>
            <div className="filter-category" key={category}>
              <h4 className="filter-category-header">{category}</h4>
              {
                Object.keys(filterTags[category]).map(tag => {
                  const {enabled, count} = filterTags[category][tag]
                  return <button key={tag} className="filter-button"
                    onClick={() => toggleTagFilter(category, tag)}>
                      {tag + ': ' + count}
                      {enabled? <FaSquareCheck />: <FaSquare />}
                    </button>
                }
              )}
            </div>
          )
        }
      </div>
    </div>
  )
}