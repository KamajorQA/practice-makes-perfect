import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/reduxHooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((userToken) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: userToken,
            })
          );
        });

        navigate('/');
      })
      .catch(console.error);
  };
  return <Form title={'sign in'} handleClick={handleLogin} />;
}

export default Login;
