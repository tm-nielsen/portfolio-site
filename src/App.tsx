import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Games from "./routes/Games"
import MissingPage from "./routes/MissingPage"
import Header from "./components/Header"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <MissingPage />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: 'games',
    element: <Games />
  }
])

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App