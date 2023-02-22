import 'modern-normalize';
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "hocs/PublicRoute";
import { PrivateRoute } from "hocs/PrivateRoute";
import { Loader } from 'components/common/Loader/Loader';
import { refreshUser } from 'redux/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
const AppBar = lazy(() => import('layouts/AppBar'))
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index path="/"
              element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="login"
              element={<PublicRoute restricted><Login /></PublicRoute>} />
            <Route path="register"
              element={<PublicRoute restricted><Register /></PublicRoute>} />
            <Route path='contacts'
              element={<PrivateRoute><Contacts /></PrivateRoute>} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
    </Suspense>
  );
};
