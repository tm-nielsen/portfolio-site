import { useParams } from "react-router-dom"
import { generateMarkdownJsx } from "../utils/markdownJsxGenerator"
import { Link } from "react-router-dom"
import projectInfoList from '../utils/project_list'
import '../styles/projects.css'

export default function Projects() {
  const {selectedProject} = useParams()

  return (
    <>
      <h1>Projects</h1>
      <p className="centred-text">
        A number of the cool things I've made aren't included in the dynamically generated{"\ "}
        <Link className="flat" to="/games">Games Page</Link>.
      </p>
      <ul className="project-link-list">
        {
          Object.keys(projectInfoList).map((projectName: string) =>
          <Link to={'/projects/' + projectName} key={projectName}>
            {projectName}
          </Link>)
        }
      </ul>
      {
        (selectedProject && selectedProject in projectInfoList)?
        generateMarkdownJsx(projectInfoList[selectedProject], 1): null
      }
    </>
  )
}