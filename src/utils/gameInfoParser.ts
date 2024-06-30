import { ExtraGameInfo } from "../types/games"


export async function parseExtraGameInfo(filePath: string): Promise<ExtraGameInfo>
{
  let fileResponse = await fetch(filePath)
  const mdText = await fileResponse.text()

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
        properties[propertyName] = propertyValue
      }
      else {
        let categoryRegexResult = /(\w+):/g.exec(line)
        if (categoryRegexResult) {
          currentCategory = categoryRegexResult[1]
          tags[currentCategory] = []
        }
        else {
          let tagRegexResult = /\s*-\s*(.+)/g.exec(line)
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