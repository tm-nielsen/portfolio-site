import CurlInfo from '../assets/project_info/Curl.md?raw'
import PortfolioSiteInfo from '../assets/project_info/Portfolio Site.md?raw'
import WebProjectsInfo from '../assets/project_info/Web Projects.md?raw'
import BCIGameJam2022Info from '../assets/project_info/BCI Game Jam 2022.md?raw'

const projectList: {[title: string]: string} = {
  'Curl': CurlInfo,
  'Portfolio Site': PortfolioSiteInfo,
  'Web Projects': WebProjectsInfo,
  'BCI Game Jam 2022': BCIGameJam2022Info
}

export default projectList

// export default [
//   {title: 'Curl', description: CurlInfo},
//   {title: 'Portfolio Site', description: PortfolioSiteInfo},
//   {title: 'Web Projects', description: WebProjectsInfo},
//   {title: 'BCI Game Jam 2022', description: BCIGameJam2022Info}
// ]