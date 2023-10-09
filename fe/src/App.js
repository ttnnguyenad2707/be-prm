import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/index'
import { useState, createContext, useEffect } from "react";



export const UserContext = createContext({
  // user: {},
  // setUser: () => { },
  // logout: () => { },
  // updateUser: () => { },
});
function App() {
  const [user, setUser] = useState({});
  // const token = Cookies.get('accessToken');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>

      <RouterProvider router={appRoutes} />
    </UserContext.Provider>

  );
}

export default App;
