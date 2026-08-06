import './App.css'
import React from 'react'
import { RouterProvider } from "react-router";
import {routes} from "@routes/routes";

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={routes} />
    </React.Fragment>
  )
}

export default App
