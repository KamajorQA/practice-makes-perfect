import { useAppSelector } from './reduxHooks';

function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.userReducer);

  return {
    isAuthenticated: !!email,
    email,
    token,
    id,
  };
}

export { useAuth };
