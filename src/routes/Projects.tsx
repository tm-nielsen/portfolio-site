import { Fragment } from "react/jsx-runtime"
import RevealableSection from "../components/RevealableSection"
import { tokenizeMarkdown, nestMarkdownTokensByHeading, NestedMarkdownToken, HeadingElement } from "../utils/markdownParsing"
import projectsMarkdown from '../assets/projects.md?raw'

export default function Projects() {

  function buildContentFromMarkdown(markdownText: string) {
    const tokens = tokenizeMarkdown(markdownText)
    const nestedTokens = nestMarkdownTokensByHeading(tokens)

    return nestedTokens.map((token, index) => 
      buildContentFromToken(token, index.toString())
    )
  }

  function buildContentFromToken(token: NestedMarkdownToken, indexString: string): JSX.Element {
    if (['h1', 'h2', 'h3'].includes(token.element)) {
      return <RevealableSection title={token.body} key={indexString} HeadingLevel={token.element as HeadingElement}>
        {buildChildren(token, indexString)}
      </RevealableSection>
    }
    return <Fragment key={indexString + '-fragment'}>
      <token.element key={indexString}>
        {token.body}
      </token.element>
      {buildChildren(token, indexString)}
    </Fragment>
  }
  function buildChildren(token: NestedMarkdownToken, indexString: string): JSX.Element {
    return <>
      {token.children.map((child, index) =>
        buildContentFromToken(child, `${indexString}:${index}`))}
    </>
  }

  return (
    <>
      <h1>Projects</h1>
      <p>I <b>have</b> made a few things that aren't games.</p>
      {buildContentFromMarkdown(projectsMarkdown)}
    </>
  )
}