import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import BlogPage from './Components/Home/BlogPage.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path: "",
element: <Home />
      },
      {
        path : "/BlogPage/:id",
        element : <BlogPage/> 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
