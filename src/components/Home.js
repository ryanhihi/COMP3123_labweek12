import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  if (!isAuthenticated) {
    return <p>Please log in to view this page.</p>;
  }

  return (
    <div>
      <h2>Welcome Home!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
