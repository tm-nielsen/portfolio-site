import { useEffect, useState } from "react";
import { FaSquare, FaSquareCheck, FaCaretDown } from "react-icons/fa6";
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

export class GameInfoTagFilterer {
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


export default function GameTagFilterDropdown(sendUpdatedFilterer: (f: GameInfoTagFilterer) => void) {
  const [filterTags, setFilterTags] = useState<CategorizedTagInfo>({})
  const [open, setOpen] = useState<boolean>(false)

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
    sendUpdatedFilterer(new GameInfoTagFilterer(newFilterTags))
  }

  return (
    <div className="filter-root">
      <label>
        Filter By:
        <button onClick={() => setOpen(!open)}>
          Tags
          <FaCaretDown />
        </button>
      </label>
      {
        open? <div className="dropdown-body row">
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
        : null
      }
      {/* <h3>Filters:</h3>
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
      </div> */}
    </div>
  )
}