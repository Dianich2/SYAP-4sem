import './App.css'
import SignInForm from './Sign-in'
import SignUpForm from './Sign-up';
import ResetPasswordForm from './ResetPasswordForm';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/sign-in" replace />} />
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
              <Route path="/reset-password" element={<ResetPasswordForm />} />
          </Routes>
      </Router>
  );
}

export default App
