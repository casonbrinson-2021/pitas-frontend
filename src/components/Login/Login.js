import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();

    const submit = async (e) => {
        e.preventDefault();
        setError('');

        //make sure all fields of the form are filled out
        if(email === '' || password === '') {
            console.log('user did not fill out all fields');
            return setError('Need to fill out all fields');
        }

        //try to login the user
        try {
            setLoading(true);
            await login(email, password);
            console.log('form submitted');
        } catch {
            console.log('failed to login');
            setLoading(false);
            return setError('Please try again');
        }

        setLoading(false);
        setEmail('');
        setPassword('');
        
        //if all went well then we make it here and go to the dashboard
        navigate('/dashboard');
    }

    const gotoSignUp = () => {
        navigate('/signup');
    }

    const gotoForgot = () => {
        navigate('/forgot-password');
    }

    return(
        <div className="login-outer-container">
            <div className="login-container">
                <div className="login-header-container">
                    <h2>Login</h2>
                </div>
                <div className="login-form-container">
                    <form onSubmit={submit} className="login-form">
                        <label htmlFor="login-email" className="login-label">Email</label>
                        <input type="email" className="login-input" id="login-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="login-password" className="login-label">Password</label>
                        <input type="text" className="login-input" id="login-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        {!loading ? <button id="login-submit-btn">Login</button> : 
                        <div className="loading-container">
                            <h3>loading...</h3>
                        </div>}
                    </form>
                </div>
                <div className="forgot-link-container">
                    <button onClick={gotoForgot} className="forgot-link">Forgot Password?</button>
                </div>
                <div className="login-divider"></div>
                <div className="signup-info-container">
                    <div className="signup-info-text-container">
                        <h3 className="faint-h3">Don't have an account</h3>
                        <button id="goto-signup-btn" onClick={gotoSignUp} disabled={loading}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;