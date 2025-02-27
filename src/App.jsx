import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainWeb from "./Pages/Website/MainWeb"
import Home from "./Pages/Website/Home"
import Education from "./Pages/Website/Education"
import Skills from "./Pages/Website/Skills"
import Projects from "./Pages/Website/Projects"
import ExperienceSection from "./Pages/Website/Experience"
import Contact from "./Pages/Website/Contact"
const App = () => {

  const routes = createBrowserRouter([{
    path:"/",
    element:<MainWeb/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/education",
        element:<Education />
      },
      {
        path:"/skills",
        element:<Skills />
      },
      {
        path:"projects",
        element:<Projects />
      },
      {
        path:"experience",
        element:<ExperienceSection />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App