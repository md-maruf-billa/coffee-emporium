import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import CoffeeContextProvider from './Context/CoffeeContextProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      
      <RouterProvider router={Routes}/>

    </CoffeeContextProvider>
  </React.StrictMode>,
)
