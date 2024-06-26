import React, { useState, useEffect, useRef } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../DB/FirebaseAuth.js';
import Layout from '../../components/Layout/Layout.jsx';
import axios from 'axios';
import { useAuth } from '../../context/auth.js';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import '../../styles/registerSeller.css';

const RegisterSeller = () => {
    var fname, lname, address, phone, otp, userVerify, uid, displayName, createdAt, lastLoginAt;
    const [btnText, setBtnText] = useState('Get OTP');
    const [user, setUser] = useAuth();
    const navigate = useNavigate();


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
    }, [user]);

    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            var otpInput = document.getElementById('otp');
            fname = document.getElementById('fname').value;
            lname = document.getElementById('lname').value;
            phone = document.getElementById('phone').value;
            address = document.getElementById('address').value;
            var phoneNumber = '+91' + phone;
            const recaptcha = recaptchaRef.current;
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
            // setUser(confirmation);
            userVerify = confirmation;
            setBtnText('Verify OTP');
            setOnClickHandler(() => verifyOtp);
            otpInput.style.pointerEvents = 'auto';
            otpInput.style.opacity = '1';
        } catch (error) {
            console.log(error);
        }
    }

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            otp = document.getElementById('otp').value;
            const data = await userVerify.confirm(otp);
            data.uid = data.user.uid;
            uid = data.uid;
            data.phone = data.user.phoneNumber;
            phone = data.user.phoneNumber;
            data.displayName = fname + lname;
            displayName = fname + ' ' + lname;
            data.address = address;
            data.createdAt = data.user.metadata.createdTime;
            createdAt = data.user.metadata.createdAt;
            data.lastLoginAt = data.user.metadata.lastLoginAt;
            lastLoginAt = data.user.metadata.lastLoginAt;
            console.log(data);
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register-seller`,
                { displayName, phone, uid, address, createdAt, lastLoginAt }
            );
            if (res && res.data.success) {
                toast.success(res.data.message, { duration: 3000 });
                setUser({
                    ...user,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
            }
            setBtnText('Get OTP');
            setOnClickHandler(() => sendOtp);
        } catch (error) {
            console.log(error);
        }
    }

    const toLogin = () => {
        navigate('/login/seller');
    }

    const toUser = () => {
        navigate('/register')
    }

    const [onClickHandler, setOnClickHandler] = useState(() => sendOtp);

    return (
        <Layout title={'Register Seller - Moulik Website'}>
            <div className="regiseller_container">
                <div className="reg_title">
                    <h2>Create Your Seller's Account</h2>
                </div>
                <form className='reg_form' action="">
                    <div className="inpbar">
                        <h4>First Name</h4>
                        <input
                            id='fname'
                            type="text"
                            placeholder='' />
                    </div>
                    <div className="inpbar">
                        <h4>Last Name</h4>
                        <input
                            id='lname'
                            type="text"
                            placeholder='' />
                    </div>
                    <div className="inpbar">
                        <h4>Address</h4>
                        <input
                            id='address'
                            type="text"
                            placeholder='' />
                    </div>
                    <div className="inpbar">
                        <h4>Phone Number</h4>
                        <input
                            id='phone'
                            type="tel"
                            pattern='[0-9]{10}'
                            placeholder='' />
                    </div>
                    <div id='recaptcha'></div>
                    <div className="otpbar">
                        <h4>OTP</h4>
                        <input
                            id='otp'
                            type="text"
                            pattern='[0-9]{6}'
                            placeholder='' />
                    </div>
                    <button className='reg_btn' onClick={onClickHandler}>
                        {btnText}
                    </button>
                </form>
                <div className="divider-container">
                    <div className="line"></div>
                    <span className="divider-text">Already have a account?</span>
                    <div className="line"></div>
                </div>
                <div className='signin_phone'>
                    <button className="phone_text" onClick={toLogin}>Sign in with Phone Number</button>
                    <button className="phone_icon_btn" onClick={toLogin}>
                        <FontAwesomeIcon className='phone_icon' icon={faPhone} />
                    </button>
                </div>

                <div className="divider-container">
                    <div className="sellerline"></div>
                    <span className="divider-text">Planning to buy?</span>
                    <div className="sellerline"></div>
                </div>
                <div className='signin_seller'>
                    <button className="seller_text" onClick={toUser}>Create a user's account</button>
                    <button className="seller_icon_btn" onClick={toUser}>
                        <FontAwesomeIcon className='seller_icon' icon={faUser} />
                    </button>
                </div>

            </div>
        </Layout>
    );
};

export default RegisterSeller;