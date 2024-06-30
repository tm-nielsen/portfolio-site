import { Link } from "react-router-dom"
import { generateNestedMarkdownJsx } from "../utils/markdownJsxGenerator"
import projectsMarkdown from '../assets/projects.md?raw'
import '../styles/projects.css'

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p className="centred-text">
        A number of the cool things I've made aren't included in the dynamically generated{"\ "}
        <Link className="flat" to="/games">Games Page</Link>.
      </p>
      {generateNestedMarkdownJsx(projectsMarkdown, 3, 1)}
    </>
  )
}