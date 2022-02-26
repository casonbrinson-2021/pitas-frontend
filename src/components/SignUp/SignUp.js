import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import './SignUp.css';

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { signup } = useAuth();

    const submit = async (e) => {
        e.preventDefault();
        setError('');

        //make sure all fields of the form are filled out
        if(email === '' || username === '' || password === '' || passwordConfirm === '') {
            console.log('user did not fill out all fields');
            return setError('Need to fill out all fields');
        }

        //check the password requirements
        if(password.length < 6) {
            console.log('this thing aint long enough');
            return setError('Password needs to be greater than 6 character');
        }

        //make sure that the password is the same as the confirm password
        if(password !== passwordConfirm) {
            console.log("passwords do not match");
            return setError('Passwords do not match');
        }

        //try to sign the user up
        try {
            setLoading(true);
            await signup(email, password);
            console.log('form submitted');
        } catch {
            console.log("failed to create account");
            setLoading(false);
            return setError('Something went wrong...Please retry');
        }

        setLoading(false);
        //reset all the values of the form 
        setEmail('');
        setUsername('');
        setPassword('');
        setPasswordConfirm('');

        //if all went well then we make it here and go to the dashboard
        navigate('/dashboard');
    }

    const gotoLogin = () => {
        navigate('/login');
    }

    return(
        <div className="signup-outer-container">
            <div className="signup-container">
                <div className="signup-header-container">
                    <h2>Sign Up</h2>
                </div>
                <div className="signup-form-container">
                    <form onSubmit={submit} className="signup-form">
                        <label htmlFor="signup-email" className="signup-label">Email</label>
                        <input type="email" className="signup-input" id="signup-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="signup-username" className="signup-label">Username</label>
                        <input type="text" className="signup-input"  id="signup-username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                        <label htmlFor="signup-password" className="signup-label">Password</label>
                        <input type="text" className="signup-input" id="signup-password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <label htmlFor="signup-confirm-password" className="signup-label">Confirm Password</label>
                        <input type="text" className="signup-input"  id="signup-confirm-password" placeholder="Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>

                        {!loading ? <button id="signup-submit-btn">Sign Up</button> : 
                        <div className="loading-container">
                            <h3>loading...</h3>
                        </div>}
                        
                    </form>
                </div>
                <div className="signup-divider"></div>
                <div className="login-info-container">
                    <div className="login-info-text-container">
                        <h3 className="faint-h3">Already have an account?</h3>
                        <button id="goto-login-btn" onClick={gotoLogin} disabled={loading}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
