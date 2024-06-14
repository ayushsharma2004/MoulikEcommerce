import React, { useState, useEffect, useRef } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../DB/FirebaseAuth.js';
import Layout from '../../components/Layout/Layout.jsx';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import '../../styles/register.css';

const RegisterEmail = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [user, setUser] = useState(null);
    const [btnText, setBtnText] = useState('Get OTP');


    const recaptchaRef = useRef(null);

    useEffect(() => {
        if (!recaptchaRef.current) {
            recaptchaRef.current = new RecaptchaVerifier(auth, 'recaptcha', {
                size: 'invisible',
                callback: (response) => {
                    console.log('Recaptcha solved', response);
                }
            });

            recaptchaRef.current.render().then(function (widgetId) {
                recaptchaRef.current.widgetId = widgetId;
            }).catch(error => {
                console.log('Recaptcha render error:', error);
            });
        }
    }, []);

    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            var otpInput = document.getElementById('otp');
            var phoneNumber;
            console.log(fname);
            console.log(phone);
            console.log(phoneNumber);
            const recaptcha = recaptchaRef.current;
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
            setUser(confirmation);
            setBtnText('Verify OTP');
            setOnClickHandler(() => verifyOtp);
            otpInput.style.pointerEvents = 'auto';
        } catch (error) {
            console.log(error);
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const data = await user.confirm(otp);
            console.log(data);
            setBtnText('Get OTP');
            setOnClickHandler(() => sendOtp);
        } catch (error) {
            console.log(error);
        }
    }

    const [onClickHandler, setOnClickHandler] = useState(() => sendOtp);

    return (
        <Layout title={'Register - Ecommerce Website'}>
            <div className="regis_container">
                <div className="reg_title">
                    <h2>Create Account</h2>
                </div>
                <form className='reg_form' action="">
                    <div className="inpbar">
                        <h4>First Name</h4>
                        <input
                            id='fname'
                            type="email"
                            onChange={(e) => {
                                setFname(e.target.value);
                            }}
                            placeholder='' />
                    </div>
                    <div className="inpbar">
                        <h4>Last Name</h4>
                        <input
                            value={lname}
                            onChange={(e) => {
                                setLname(e.target.value);
                            }}
                            id='lname'
                            type="email"
                            placeholder='' />
                    </div>
                    <div className="inpbar">
                        <h4>Phone Number</h4>
                        <input
                            id='phone'
                            type="tel"
                            pattern='[0-9]{10}'
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                console.log(e.target.value);
                            }}
                            placeholder='' />
                    </div>
                    <div id='recaptcha'></div>
                    <div className="otpbar">
                        <h4>OTP</h4>
                        <input
                            id='otp'
                            type="text"
                            pattern='[0-9]{6}'
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value);
                            }}
                            placeholder='' />
                    </div>
                    <button className='reg_btn' onClick={onClickHandler}>
                        {btnText}
                    </button>
                </form>
                <h3 className='log_text'><Link className='link_log' to='/login'>Already have a account? Login</Link></h3>
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

export default RegisterEmail;
