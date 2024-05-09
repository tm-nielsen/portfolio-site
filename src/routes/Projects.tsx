import RevealableSection from "../components/RevealableSection"
import { tokenizeMarkdown, nestMarkdownTokensByHeading, NestedMarkdownToken, HeadingElement } from "../utils/markdownParsing"
import projectsMarkdown from '../assets/projects.md?raw'

export default function Projects() {

  function buildContentFromMarkdown(markdownText: string) {
    const tokens = tokenizeMarkdown(markdownText)
    const nestedTokens = nestMarkdownTokensByHeading(tokens)

    return nestedTokens.map(token => 
      buildContentFromToken(token)
    )
  }

  function buildContentFromToken(token: NestedMarkdownToken): JSX.Element {
    if (['h1', 'h2', 'h3'].includes(token.element)) {
      return <RevealableSection title={token.body} HeadingLevel={token.element as HeadingElement}>
        {buildChildren(token)}
      </RevealableSection>
    }
    return <>
      <token.element>
        {token.body}
      </token.element>
      {buildChildren(token)}
    </>
  }
  function buildChildren(token: NestedMarkdownToken): JSX.Element {
    return <>{token.children.map(child => buildContentFromToken(child))}</>
  }

  return (
    <>
      <h1>Projects</h1>
      <p>I <b>have</b> made a few things that aren't games.</p>
      {buildContentFromMarkdown(projectsMarkdown)}
    </>
  )
}