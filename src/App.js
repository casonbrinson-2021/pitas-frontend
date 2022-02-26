import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute';
import NotAuthenticatedRoute from './components/NotAuthenticatedRoute/NotAuthenticatedRoute';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          //login state doesn't matter
          <Route exact path="/" element={<LandingPage />}/>
        
          //must not be logged in
          <Route element={<NotAuthenticatedRoute />}>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
          </Route>

          //must be logged in
          <Route element={<AuthenticatedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
