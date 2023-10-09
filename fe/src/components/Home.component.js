import { UserContext } from '../App';
import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { checkUser } from '../services/auth.service';
import {useNavigate}from 'react-router-dom'
const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    checkUser(token)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          navigate('/login');
        }
      });
  }, [token, navigate]);

  return (
    <div>
      Home.
      <h1>Hello, {user.lastname}</h1>
    </div>
  );
};

export default Home;
