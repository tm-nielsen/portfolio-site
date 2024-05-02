import { useEffect, useState } from "react";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
import extraGameInfo from '../assets/extra_game_info.json'

type Dictionary = {[key: string]: any}
interface CategorizedPropertyAttributes {
  [category: string]: {[tag: string]: PropertyAttributes}
}
class PropertyAttributes {
  enabled: boolean = true
  count: number = 1
}


export default function GameListFilters() {
  const [propertyAttributes, setPropertyAttributes] = useState<CategorizedPropertyAttributes>({})

  useEffect(() =>{
    setPropertyAttributes(getCategorizedPropertyAttributes())
  }, [])

  function getCategorizedPropertyAttributes() {
    let properties: CategorizedPropertyAttributes = {tags: {}, tools: {}, roles: {}}
    extraGameInfo.forEach((gameInfo: Dictionary) => {
      for (const category in properties) {
        if (gameInfo.hasOwnProperty(category))
          gameInfo[category].forEach((tag: string) => {
            if (properties[category].hasOwnProperty(tag))
              properties[category][tag].count++
            else
              properties[category][tag] = new PropertyAttributes()
          });
      }
    })

    console.log(properties)
    return properties
  }

  function onFilterButtonClicked(category: string, tag: string) {
    
  }

  return (
    <label className="flex row">
      Filters
      {
        // aggregatedTagList.keys.map(key =>
        //   <label>
        //     {key}
        //     {aggregatedTagList[key].map(tag =>
        //       <button>{tag}</button>
        //     )}
        //   </label>
        // )
      }
    </label>
  )
}