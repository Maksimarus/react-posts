import React, {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {AuthContext} from '../context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Страница для логина</h1>
      <form onSubmit={login}>
        <TextField
          value=""
          margin="dense"
          fullWidth
          label="Введите логин"
          variant="outlined"
        />
        <TextField
          value=""
          margin="dense"
          fullWidth
          label="Введите пароль"
          variant="outlined"
          type="password"
        />
        <Button type="submit" variant="outlined">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
