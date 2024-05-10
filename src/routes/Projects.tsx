import { generateNestedMarkdownJsx } from "../utils/markdownJsxGenerator"
import projectsMarkdown from '../assets/projects.md?raw'

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>I <b>have</b> made a few things that aren't games.</p>
      {generateNestedMarkdownJsx(projectsMarkdown)}
    </>
  )
}