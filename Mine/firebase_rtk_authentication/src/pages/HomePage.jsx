import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';

function HomePage() {
  const navigate = useNavigate();
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated, email } = useAuth();
  const dispatch = useDispatch();

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
