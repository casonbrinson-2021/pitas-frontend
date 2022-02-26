import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './ForgotPassword.css';

function ForgotPassword() {

    const [email ,setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');
    const { resetPassword } = useAuth();

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        setMessage('');
        setError('');
        try {
            setLoading(true);
            await resetPassword(email);
            console.log("succesfully sent reset email")
            setMessage('Check your email inbox');
            setSent(true);
        } catch {
            setLoading(false);
            setMessage('Failed to send reset email');
            setSent(false);
            console.log("failed to send reset email");
            return setError('Failed to send reset email');
        }

        setLoading(false);
    }

    const gotoLogin = () => {
        navigate('/login');
    }

    return (
        <div className="forgot-outer-container">
            <div className="forgot-container">
                <div className="forgot-header-container">
                    <h2>Forgot Password</h2>
                </div>
                <div className="forgot-form-container">
                    {message ? <p className={sent ? "forgot-success" : "forgot-fail"}>{message}</p> : ''}
                    <form onSubmit={submit} className="forgot-form">
                        <label htmlFor="forgot-email" className="forgot-label">Email</label>
                        <input type="email" className="forgot-input" id="forgot-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        {!loading ? <button id="forgot-submit-btn">Send Reset Email</button> : 
                        <div className="loading-container">
                            <h3>loading...</h3>
                        </div>}
                    </form>

                    <div className="login-link-container">
                        <button onClick={gotoLogin} className="login-link">Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;