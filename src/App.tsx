import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./routes/Root"
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Games from "./routes/Games"
import MissingPage from "./routes/MissingPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <MissingPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'projects/:selectedProject',
        element: <Projects />
      },
      {
        path: 'games',
        element: <Games />
      },
      {
        path: 'games/:focusedGame',
        element: <Games />
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}