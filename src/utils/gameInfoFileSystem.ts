import * as fs from "fs"
import { ExtraGameInfo } from "../types/games"


export function parseExtraGameInfo(mdText: string): ExtraGameInfo
{
  const mdLines = mdText.split('\r\n')
  let readingHeader = false
  let currentCategory = ""
  let properties: {[key: string]: string} = {}
  let tags: {[key: string]: string[]} = {}
  
  for (const line of mdLines) {
    if (line.includes("---")) {
      if (!readingHeader)
        readingHeader = true
      else
        break;
    }
    else if (readingHeader) {
      let propertyRegexResult = /\s*(\w+):\s*(.+)/g.exec(line)
      if (propertyRegexResult) {
        const [_lineCopy, propertyName, propertyValue] = propertyRegexResult
        console.log(`${propertyName}: ${propertyValue}`)
        properties[propertyName] = propertyValue
      }
      else {
        let categoryRegexResult = /(\w+):/g.exec(line)
        if (categoryRegexResult) {
          currentCategory = categoryRegexResult[1]
          tags[currentCategory] = []
        }
        else {
          let tagRegexResult = /\s*-\s*([\w ]+)/g.exec(line)
          if (tagRegexResult)
            tags[currentCategory].push(tagRegexResult[1])
        }
      }
    } 
  }

  let firstTagHeaderIndex = mdText.indexOf("---")
  let bodyStartIndex = mdText.indexOf("---", firstTagHeaderIndex + 3)
  bodyStartIndex += "---\r\n\r\n".length
  const bodyText = mdText.substring(bodyStartIndex)

  return new ExtraGameInfo(properties, tags, bodyText)
}

export function writeExtraGameInfo(extraGameInfo: ExtraGameInfo, filePath: string) {
  let fileContent = "---\r\n"
  fileContent += `title: ${extraGameInfo.title}\r\n`
  if (extraGameInfo.cover_override)
    fileContent += `cover_override: ${extraGameInfo.cover_override}\r\n`
  if (extraGameInfo.static_cover_url)
    fileContent += `static_cover_url: ${extraGameInfo.static_cover_url}\r\n`
  for (const tagCategory in extraGameInfo.tags) {
    fileContent += `${tagCategory}:\r\n`
    for (const tagIndex in extraGameInfo.tags[tagCategory])
      fileContent += ` - ${extraGameInfo.tags[tagCategory][tagIndex]}\r\n`
  }
  fileContent += "---\r\n\r\n"
  fileContent += extraGameInfo.markdownBodyText

  fs.writeFile(filePath, fileContent, error => {
    if (error) {
      console.error(error)
    }
  })
}