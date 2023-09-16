import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/reduxHooks';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
  return <Form title={'Register'} handleClick={handleRegister} />;
}

export default SignUp;
