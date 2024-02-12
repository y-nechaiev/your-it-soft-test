import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useAppDDispatch } from '../redux/hooks/hooks';
import { logout } from '../redux/user/userSlice';
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper';

const Home: FC = () => {
  const isAuthe = useAuth();
  const dispatch = useAppDDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    removeTokenFromLocalStorage('token');
    navigate('/login');
}

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <p style={{ fontSize: '2em', marginBottom: '20px' }} >Your it soft - test!</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        {isAuthe ? 
        <button onClick={handleLogout} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }}>Logout</button> 
        : <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>}
        <Link to='/profile' style={{ color: '#fff', textDecoration: 'none', marginLeft: '20px' }}>Profile</Link>
      </div>
    </div>
  )
}

export default Home