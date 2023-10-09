import { UserContext } from '../App';
import React, { useContext } from 'react';
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    
    <div>Home.
      <h1>Hello, {user.lastname}</h1>
    </div>
  )
}

export default Home