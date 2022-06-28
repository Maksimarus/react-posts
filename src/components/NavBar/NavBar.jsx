import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from '@mui/material';

import s from './NavBar.module.css';
import {AuthContext} from '../../context';

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  const navBarItems = [
    {name: 'Posts', link: '/posts'},
    {name: 'About', link: '/About'},
  ];
  const activeLink = ({isActive}) => {
    const style = [s.link];
    if (isActive) style.push(s.active);
    return style.join(' ');
  };

  return (
    <div className={s.navbar}>
      <div>
        {navBarItems.map(item => (
          <NavLink to={item.link} key={item.name} className={activeLink}>
            {item.name}
          </NavLink>
        ))}
      </div>
      {isAuth ? (
        <Button color="error" variant="contained" onClick={logout}>
          Выйти
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
