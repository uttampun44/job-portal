import './App.css'
import React from 'react'
import { RouterProvider } from "react-router";
import Routes from "@routes/routes";

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={Routes} />
    </React.Fragment>
  )
}

export default App
