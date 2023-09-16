import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return <Form title={'sign in'} handleClick={handleLogin} />;
}

export default Login;
