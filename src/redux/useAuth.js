import { useSelector } from 'react-redux';
import {
  getUserName,
  getLogging,
 selectIsRefreshing
} from 'redux/authSlice';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLogging);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(getUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
