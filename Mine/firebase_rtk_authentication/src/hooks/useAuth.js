import { useSelector } from 'react-redux';

function useAuth() {
  const { email, token, id } = useSelector((state) => state.userReducer);

  return {
    isAuthenticated: !!email,
    email,
    token,
    id,
  };
}

export { useAuth };
