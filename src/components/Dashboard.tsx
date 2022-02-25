import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [error, setError] = useState('');
  const [loading, setLodaing] = useState(false);

  const navigate = useNavigate();

  const { logOut, currentUser } = useAuth();

  const handleLogout = async () => {
    console.log('Logout: ');
    console.log(logOut);
    try {
      setError('');
      setLodaing(true);
      console.log('handle logout called 1');
      await logOut();
      console.log('handle logout called 2');
      navigate('/');
      console.log('handle logout called 3');
    } catch {
      console.log('handle logout called 4');
      setError('Failed to logout');
    }
    console.log('handle logout called 5');
    setLodaing(false);
  };

  return (
    <div>
      <div>Dashboard</div>
      <button onClick={handleLogout}>Logout</button>
      <p>{currentUser.email}</p>
    </div>
  );
};
