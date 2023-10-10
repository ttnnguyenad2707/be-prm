import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/index'
import { useState, createContext, useEffect } from "react";




function App() {

  
  return (
      <RouterProvider router={appRoutes} />
  );
}

export default App;
