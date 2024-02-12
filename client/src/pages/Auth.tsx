import { FC, useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material';
import { AuthService } from '../services/auth.service'
import { setTokenToLocalStorage } from '../helpers/localstorage.helper';
import { useAppDDispatch } from '../redux/hooks/hooks';
import { login } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Auth: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isAuthe = useAuth();
  const dispatch = useAppDDispatch();
  const navigate = useNavigate();

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registrartion({ email, password });
      if (data) {
        setIsAuth(!isAuth);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });
      if (data) {
        setTokenToLocalStorage('token', data.token);
        dispatch(login(data));
        navigate('/');
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isAuthe) {
      navigate('/');
    }
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
        {isAuth ? 'Login' : 'Registration'}
      </h1>

      <form style={{ width: '33%', display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '1rem' }}>
        <TextField
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { background: '#222', color: 'white', borderColor: 'white' } }}
        />
        <TextField
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ style: { background: '#222', color: 'white', borderColor: 'white' } }}
        />
        <Button
          variant='contained'
          color='primary'
          style={{ width: '66%', margin: '10px auto' }}
          onClick={(e: any) => (isAuth ? handleLogin(e) : handleRegistration(e))}
        >
          Submit
        </Button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isAuth ? (
          <Button style={{ color: '#95a5a6', }} onClick={() => setIsAuth(!isAuth)}>
            You don't have an account?
          </Button>
        ) : (
          <Button style={{ color: '#95a5a6' }} onClick={() => setIsAuth(!isAuth)}>
            Already have an account?
          </Button>
        )}
      </div>
    </div>
  )
}

export default Auth;
