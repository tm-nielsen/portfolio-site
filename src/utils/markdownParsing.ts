type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingElement = `h${HeadingLevel}`
type SupportedElement = HeadingElement | 'p'

export class SimpleMarkdownToken {
  element: SupportedElement = 'p'
  body: string = ''
  headingLevel: HeadingLevel | 0 = 0

  setHeadingLevel(n: HeadingLevel) {
    this.headingLevel = n
    this.element = `h${n}`
  }

  constructor(body: string = '', hashCount: number = 0) {
    this.body = body
    if (hashCount > 0)
      this.setHeadingLevel(hashCount as HeadingLevel)
  }
}

export function tokenizeMarkdown(mdText: string) {
  let tokenArray = []

  const mdLines = mdText.split('\r\n')
  for (const line of mdLines) {
    if (line === '')
      continue

    const regExpResult = new RegExp(/(#+) (.+)/g).exec(line)
    if (regExpResult) {
      let [_lineCopy, hashes, body] = regExpResult
      tokenArray.push(new SimpleMarkdownToken(body, hashes.length))
    }
    else
      tokenArray.push(new SimpleMarkdownToken(line))
  }
  return tokenArray
}


export class NestedMarkdownToken extends SimpleMarkdownToken {
  children: NestedMarkdownToken[] = []

  addChild(newChild: NestedMarkdownToken) {
    this.children.push(newChild)
  }

  constructor(simpleToken: SimpleMarkdownToken) {
    super(simpleToken.body, simpleToken.headingLevel)
  }
}

export function nestMarkdownTokensByHeading(mdTokens: SimpleMarkdownToken[]) {
  let result = []
  let index = 0
  let overflowCount = 0
  
  while (index < mdTokens.length && overflowCount < 500) {
    const [childNest, newIndex] = nest(mdTokens, index)
    result.push(childNest)
    index = newIndex
    overflowCount++
  }
  return result
}

function nest(tokens: SimpleMarkdownToken[], index: number): [NestedMarkdownToken, number]
{
  const rootToken = new NestedMarkdownToken(tokens[index])
  index++

  while (index < tokens.length) {
    const nextToken = new NestedMarkdownToken(tokens[index])

    if (nextToken.headingLevel > 0) {
      if (nextToken.headingLevel <= rootToken.headingLevel) {
        return [rootToken, index]
      }
      else {
        const [childNest, newIndex] = nest(tokens, index)
        rootToken.addChild(childNest)
        index = newIndex
      }
    }
    else {
      rootToken.addChild(nextToken)
      index++
    }
  }
  return [rootToken, index]
}