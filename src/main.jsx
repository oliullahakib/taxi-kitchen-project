import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Layouts/Root.jsx'
import CurrentOrder from './components/Pages/CurrentOrderSection.jsx'
import CurrentCookingSection from './components/Pages/CurrentCookingSection.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    loader:()=> fetch("/orders.json"),
    children:[
      {
        index:true,
        Component:CurrentOrder,
        
      },
      {
        path:'cooking',
        Component:CurrentCookingSection
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
