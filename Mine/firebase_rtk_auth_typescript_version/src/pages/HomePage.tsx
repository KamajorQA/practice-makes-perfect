import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/reduxHooks';

function HomePage() {
  const navigate = useNavigate();
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  // актуальность данных о статусе авторизации лучше контролировать через
  //хук onAuthStateChanged из библиотеки firebase/auth
  const { isAuthenticated, email } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}{' '}
      </button>
    </>
  );
}

export default HomePage;
