import { FC } from 'react'
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  return (
    <div>
      {isAuth ? children :
        <div style={{
          background: '#222',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}>
          <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Log in to view!</h1>
          <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>Go back to home</Link>
        </div>}
    </div>
  )
}

export default ProtectedRoute