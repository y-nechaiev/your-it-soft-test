import { FC } from 'react'
import { Link } from 'react-router-dom'

const Profile: FC = () => {
  return (
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
      <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>Profile</h1>
      <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>Go back to home</Link>
    </div>
  )
}

export default Profile