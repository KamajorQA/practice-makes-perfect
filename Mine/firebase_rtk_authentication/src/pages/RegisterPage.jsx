import { Link } from 'react-router-dom';
import SignUp from 'components/SignUp';

function RegisterPage() {
  return (
    <>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </>
  );
}

export default RegisterPage;
