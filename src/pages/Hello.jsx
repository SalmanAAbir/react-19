import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../style.scss';

const Hello = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Hello - React Auth App';
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="hello-page bg-gradient-to-br from-green-50 to-blue-100">
      <div className="hello-content">
        <h1 className="text-6xl font-bold mb-4">Hello</h1>
        {user && (
          <p className="text-xl text-gray-700 mb-4">Welcome, {user.email}!</p>
        )}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Hello;

