import React from 'react';
import {useSelector} from 'react-redux';
import createRouter from './routes';

export default function AuthRoutes() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(true);

  return <Routes />;
}
