import RevealableSection from '../components/RevealableSection'
import { tokenizeMarkdown, nestMarkdownTokensByHeading,
  MarkdownToken, NestedMarkdownToken, InlineMarkdownToken,
  MarkdownLinkToken, MarkdownImageToken } from './markdownParsing'

export function generateNestedMarkdownJsx(sourceText: string, nestingDepth: number = 3) {
  const tokens = tokenizeMarkdown(sourceText)
  const nestedTokens = nestMarkdownTokensByHeading(tokens, nestingDepth)

  return nestedTokens.map((token, index) => 
    generateTokenJsx(token, index.toString())
  )
}

export function generateTokenJsx(token: MarkdownToken, indexString: string) {
  if (token instanceof NestedMarkdownToken) {
    return <RevealableSection title={token.body} key={indexString} HeadingLevel={token.element}>
      {token.children.map((child, index) =>
        generateTokenJsx(child, `${indexString}:${index}`))
      }
    </RevealableSection>
  }
  if (token instanceof InlineMarkdownToken) {
    return <p key={indexString}>
      {token.body}
      {token.sections.map((section, index) => {
        if (section instanceof MarkdownLinkToken) {
          return <a href={section.url} target='_blank' key={`${indexString}:${index}`}>
            {section.body}
          </a>
        }
        return section.body
      })}
    </p>
  }
  
  if (token instanceof MarkdownImageToken)
    return <img src={token.url} key={indexString} />
  
  if (token instanceof MarkdownLinkToken) {
    return <a href={token.url} target='_blank' key={indexString}>
      {token.body}
    </a>
  }
  
  return <token.element key={indexString} >
    {token.body}
  </token.element>
}

// function buildChildren(children: MarkdownToken[], indexString: string): JSX.Element {
//   return <>
//     {children.map((child, index) =>
//       generateTokenJsx(child, `${indexString}:${index}`))}
//   </>
// }