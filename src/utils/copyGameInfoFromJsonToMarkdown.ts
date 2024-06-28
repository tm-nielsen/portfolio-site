import { ExtraGameInfo } from "../types/games";
import { writeExtraGameInfo } from "./gameInfoFileSystem";
import extraGameInfo from "../assets/extra_game_info.json"


for (const index in extraGameInfo) {
  const infoObject = extraGameInfo[index]
  
  let aggregatedTags = {tags: infoObject.tags, tools: infoObject.tools, roles: infoObject.roles}
  let bodyText = `# Description\r\n${infoObject.description}\r\n\r\n`
  bodyText += `# What I Learned\r\n${infoObject.learning}`
  let writeableGameInfo = new ExtraGameInfo({}, aggregatedTags, bodyText)
  
  writeableGameInfo.title = infoObject.title
  if ("cover_override" in infoObject)
    writeableGameInfo.cover_override = infoObject.cover_override as string
  if ("static_cover_url" in infoObject)
    writeableGameInfo.static_cover_url = infoObject.static_cover_url as string

  writeExtraGameInfo(writeableGameInfo, `src/assets/game_info/${infoObject.title}.md`)
}