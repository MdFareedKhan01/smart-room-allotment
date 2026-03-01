import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("studentId");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar-home">
      <div className="logo-home" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
        RoomEngine
      </div>

      <div className="nav-links-home">
        {!isLoggedIn ? (
          <LoginIcon
            sx={{
              fontSize: '2.5rem',
              color: '#22c55e',
              '&:hover': {
                backgroundColor: '#0f766e',
              },
            }}
            onClick={() => navigate("/Login")}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <div className="nav-links-home">
            <HomeIcon
              sx={{
                fontSize: '2.5rem',
                color: '#22c55e',
                '&:hover': {
                  backgroundColor: '#0f766e',
                },
              }}
              onClick={() => navigate("/")}
              style={{ cursor: 'pointer' }}
            />
            <AccountCircleIcon
              sx={{
                fontSize: '2.5rem',
                color: '#22c55e',
                '&:hover': {
                  backgroundColor: '#0f766e',
                },
              }}
              onClick={() => navigate("/Dashboard")}
              style={{ cursor: 'pointer' }}
            />
            <LogoutIcon
              onClick={handleLogout}
              sx={{
                fontSize: '2.5rem',
                color: '#22c55e',
                '&:hover': {
                  backgroundColor: '#0f766e',
                },
              }}
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
