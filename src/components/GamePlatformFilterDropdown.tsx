import { useState } from "react";
import Dropdown from "./Dropdown";
import { FaCaretRight } from "react-icons/fa6"
import { GameInfo } from "../types/games";

export type GameFilterMethod = (a: GameInfo) => boolean
const filterNames: {[key: string]: string} = {
  all: 'All',
  p_web: 'Browser',
  p_windows: 'Windows',
  p_osx: 'Mac OSX',
  p_linux: 'Linux'
}

export default function GamePlatformFilterDropdown(sendUpdatedFilterMethod: (m: GameFilterMethod) => void) {
  const [currentPlatformFilter, setCurrentPlatformFilter] = useState<string>('all')

  function selectPlatformFilter(propertyName: string){
    setCurrentPlatformFilter(propertyName)
    
    if (propertyName === 'all') {
      sendUpdatedFilterMethod((_gameInfo: GameInfo) => true)
      return
    }
    const filterMethod = (gameInfo: GameInfo) => (gameInfo as {[key: string]: any})[propertyName]
    sendUpdatedFilterMethod(filterMethod)
  }

  function getDropdownItems() {
    return Object.keys(filterNames).map(propertyName =>
      { return {
        contents: <>
          {currentPlatformFilter === propertyName?
            <div className="dropdown-icon-container">
              <FaCaretRight />
            </div>: null
          }
          {filterNames[propertyName]}
        </>,
        callback: () => selectPlatformFilter(propertyName)
      }}
    )
  }

  return <Dropdown key='platforms' label='platform' items={getDropdownItems()} />
}