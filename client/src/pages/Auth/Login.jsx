import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import '../../styles/login.css';
import { useAuth } from '../../context/auth.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data.message, { duration: 3000 });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        setIsRegistered(true); // Registration successful
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  // Use a useEffect to navigate and show toast after registration
  useEffect(() => {
    if (isRegistered) {
      navigate(location.state || '/');
      // toast.success('Registration successful!', { duration: 3000 });
    }
  }, [isRegistered, navigate, location]);

  return (
    <Layout title={'Login - Ecommerce Website'}>
      <div className="login_container">
        <div className="log_title">
          <h2>LOGIN</h2>
        </div>
        <form className='log_form' action="">
          <div className="emailbar">
            <h4>EMAIL</h4>
            <input type="email" placeholder='' />
          </div>
          <div className="passbar">
            <h4>Password</h4>
            <input type="password" placeholder='' />
          </div>
          <button className='log_btn'>SIGN IN</button>
        </form>
        <h3 className='reg_text'><Link className='link_reg' to='/register'>New to Maulik? Create an account</Link></h3>
        <button className='signin_google'>
          <button className="google_text">Sign in with Google</button>
          <button className="google_icon_btn">
            <FontAwesomeIcon className='google_icon' icon={faGoogle} />
          </button>
        </button>
        <button className='signin_phone'>
          <button className="phone_text">Sign in with Phone Number</button>
          <button className="phone_icon_btn">
            <FontAwesomeIcon className='phone_icon' icon={faPhone} />
          </button>
        </button>
      </div>
    </Layout>
  );
};

export default Login;
