import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth.js';
import { useNavigate } from 'react-router-dom';
import SearchInput from "../Forms/SearchInput.jsx";
import toast from 'react-hot-toast';
import useCategory from '../../hooks/useCategory.js';
import '../../styles/header.css'
import logo1 from '../../images/logo5.png'
import { GiMagnifyingGlass } from 'react-icons/gi';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
    setIsRegistered(true); // Registration successful
  };

  useEffect(() => {
    if (isRegistered) {
      navigate('/login');
      // toast.success('Registration successful!', { duration: 3000 });
    }
  }, [isRegistered, navigate]);
  return (
    <>
      <div id='marquee1' className="marquee">
        <p className="sliding-text">This is sliding text created with CSS animations for better accessibility.</p>
      </div>
      <div id='navbar1' className="navbar1">
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="searchbar">
          <div className="search">
            <input className='srch1' type="text" placeholder='Search for t-shirts, polos and more' />
          </div>
          <button className='srch1btn'>
            <span className="material-symbols-outlined">
              search
            </span>
          </button>
        </div>
        <ul className='right_nav'>
          <li className='cat_li'><Link className='link_cats' to="#">Category &nbsp;<b><i className="fas fa-caret-down"></i></b></Link>
            <ul>
              <li><Link className='link_cat' to="#">T-shirts</Link></li>
              <li><Link className='link_cat' to="#">Polos</Link></li>
            </ul>
          </li>
          <li>FAQ</li>
          <li className="profile">
            <Link className='login_link' to='/login'>Login</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
