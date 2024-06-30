type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingElement = `h${HeadingLevel}`
type SupportedElement =  'p' | HeadingElement | 'a' | 'img'

export class MarkdownToken {
  element: SupportedElement = 'p'
  body: string = ''

  constructor(body: string = '') {
    this.body = body
  }
}

export class MarkdownHeadingToken extends MarkdownToken {
  element: HeadingElement = 'h1'
  headingLevel: HeadingLevel = 1

  setHeadingLevel(n: number) {
    const headingLevel = n as HeadingLevel
    this.headingLevel = headingLevel
    this.element = `h${headingLevel}`
  }

  constructor(body: string = '', hashCount: number = 0) {
    super(body)
    this.setHeadingLevel(hashCount)
  }
}

export class MarkdownLinkToken extends MarkdownToken {
  element: SupportedElement = 'a' 
  linkIndex: number = 0
  url: string = ''

  constructor(body: string = '', linkIndex: number = 0) {
    super(body)
    this.linkIndex = linkIndex
  }
}
export class MarkdownImageToken extends MarkdownLinkToken {
  element: SupportedElement = 'img'
}

export class InlineMarkdownToken extends MarkdownToken {
  sections: MarkdownToken[] = []

  addSection(token: MarkdownToken) {
    this.sections.push(token)
  }
}

export function tokenizeMarkdown(mdText: string): MarkdownToken[] {
  let tokens = []

  const mdLines = mdText.replace('\r\n', '\n').split('\n')
  for (const line of mdLines) {
    let newToken = getTokenForLine(line)
    if (newToken) tokens.push(newToken)
  }
  const links = getIndexedLinks(mdLines)
  bindLinksToTokens(tokens, links)
  return tokens
}

function getTokenForLine(line: string): MarkdownToken | null {
  if (line === '' || /\[\d+\]: .+/g.test(line))
    return null

  // header
  let regexResult = /^(#+) (.+)\s*/g.exec(line)
  if (regexResult) {
    let [_lineCopy, hashes, body] = regexResult
    return new MarkdownHeadingToken(body, hashes.length)
  }
  // image
  regexResult = /^!\s*\[(.+)\]\s*\[(\d+)\]\s*$/g.exec(line)
  if (regexResult) {
    let [_lineCopy, body, indexString] = regexResult
    return new MarkdownImageToken(body, parseInt(indexString))
  }
  return getBodyToken(line)
}

function getBodyToken(line: string): MarkdownToken {
  let regex = /(.*?)\[(.+?)\]\s*\[(\d+)\](.*)/
  let regexResult = regex.exec(line)
  if (regexResult) {
    let [_lineCopy, leadingBody, linkBody, linkIndexString, trailingBody] = regexResult
    let linkToken = new MarkdownLinkToken(linkBody, parseInt(linkIndexString))
    
    if (leadingBody || trailingBody)
    {
      let inlineToken = new InlineMarkdownToken(leadingBody)
      inlineToken.addSection(linkToken)

      while (trailingBody) {
        regexResult = regex.exec(trailingBody)
        if (regexResult) {
          [_lineCopy, leadingBody, linkBody, linkIndexString, trailingBody] = regexResult
          if (leadingBody) inlineToken.addSection(new MarkdownToken(leadingBody))
          inlineToken.addSection(new MarkdownLinkToken(linkBody, parseInt(linkIndexString)))
        }
        else {
          inlineToken.addSection(new MarkdownToken(trailingBody))
          trailingBody = ''
        }
      }
      return inlineToken
    }
    return linkToken
  }
  return new MarkdownToken(line)
}

function getIndexedLinks(mdLines: string[]) {
  let links: string[] = []
  
  for (const line of mdLines) {
    let regexResult = /\[(\d+)\]: (.+)/g.exec(line)
    if (regexResult) {
      let [_lineCopy, indexString, url] = regexResult
      const linkIndex = parseInt(indexString)
      links[linkIndex] = url
    }
  }
  return links
}

function bindLinksToTokens(tokens: MarkdownToken[], links: string[]) {
  for (let token of tokens) {
    if (token instanceof MarkdownLinkToken) {
      bindLinkToToken(token, links)
    }
    else if (token instanceof InlineMarkdownToken) {
      for (let inlineSection of token.sections)
        if (inlineSection instanceof MarkdownLinkToken)
          bindLinkToToken(inlineSection, links)
    }
  }
}
function bindLinkToToken(token: MarkdownLinkToken, links: string[]) {
  const linkIndex = token.linkIndex
  if (linkIndex < links.length && links[linkIndex])
    token.url = links[linkIndex]
  else
    console.log('Markdown Error: missing link definition for index ' + linkIndex)
}


export class NestedMarkdownToken extends MarkdownHeadingToken {
  children: MarkdownToken[] = []

  addChild(newChild: MarkdownToken) {
    this.children.push(newChild)
  }

  constructor(source: MarkdownHeadingToken) {
    super(source.body, source.headingLevel)
  }
}

export function nestMarkdownTokensByHeading(mdTokens: MarkdownToken[], nestingDepth: number = 3) {
  let rootTokens = []
  let index = 0
  let overflowCount = 0
  
  while (index < mdTokens.length && overflowCount < 500) {
    const [rootToken, newIndex] = nest(mdTokens, index, nestingDepth)
    rootTokens.push(rootToken)
    index = newIndex
    overflowCount++
  }
  return rootTokens
}

function nest(tokens: MarkdownToken[], index: number, nestingDepth: number): [MarkdownToken, number]
{
  const indexedToken = tokens[index]
  index++
  if (!(indexedToken instanceof MarkdownHeadingToken))
    return [indexedToken, index]

  let rootToken = new NestedMarkdownToken(indexedToken)

  while (index < tokens.length) {
    const nextToken = tokens[index]

    if (nextToken instanceof MarkdownHeadingToken && nextToken.headingLevel <= nestingDepth) {
      if (nextToken.headingLevel <= rootToken.headingLevel) {
        return [rootToken, index]
      }
      else {
        const [childToken, newIndex] = nest(tokens, index, nestingDepth)
        rootToken.addChild(childToken)
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