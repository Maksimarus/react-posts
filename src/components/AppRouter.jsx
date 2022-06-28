import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/router';
import {AuthContext} from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<Navigate to={'/posts'} replace />}></Route>
        </>
      ) : (
        <>
          {publicRoutes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<Navigate to={'/login'} replace />}></Route>
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
