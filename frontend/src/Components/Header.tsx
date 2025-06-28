import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faSearch, 
  faUser, 
  faBars, 
  faTimes, 
  faHome, 
  faFire, 
  faTags, 
  faInfoCircle,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faCog,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'; // Импорт стилей для Header/

interface NavLink {
  name: string;
  path: string;
  icon: any;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Главная', path: '/', icon: faHome },
    { name: 'Топ игр', path: '/top', icon: faFire },
    { name: 'Жанры', path: '/genres', icon: faTags },
    { name: 'О сайте', path: '/about', icon: faInfoCircle },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
    >
      <div className="header-container">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="logo"
        >
          <FontAwesomeIcon icon={faGamepad} className="logo-icon" />
          <Link to="/" className="logo-text">
            GameLand
          </Link>
        </motion.div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className="nav-link"
              >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="search-user">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="search-container"
          >
            <input
              type="text"
              placeholder="Поиск игр..."
              className="search-input"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon"
            />
          </motion.div>
          <div className="user-menu-container">
            {!isAuthenticated ? (
              <div className="auth-buttons">
                <Link to="/login" className="auth-button login-button">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <span>Вход</span>
                </Link>
                <Link to="/register" className="auth-button register-button">
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Регистрация</span>
                </Link>
              </div>
            ) : (
              <div className="user-profile-menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="user-profile-button"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>Профиль</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`dropdown-icon ${userMenuOpen ? 'open' : ''}`}
                  />
                </motion.button>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="dropdown-menu"
                  >
                    <Link to="/profile" className="dropdown-item">
                      <FontAwesomeIcon icon={faUser} />
                      <span>Мой профиль</span>
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                      <FontAwesomeIcon icon={faCog} />
                      <span>Настройки</span>
                    </Link>
                    <button 
                      className="dropdown-item logout-button"
                      onClick={() => {
                        setIsAuthenticated(false);
                        setUserMenuOpen(false);
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      <span>Выход</span>
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </motion.button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mobile-menu"
        >
          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={link.icon} />
                  <span>{link.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mobile-search"
            >
              <input
                type="text"
                placeholder="Поиск игр..."
                className="mobile-search-input"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="mobile-search-icon"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mobile-auth"
            >
              {!isAuthenticated ? (
                <div className="mobile-auth-buttons">
                  <Link
                    to="/login"
                    className="mobile-auth-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span>Вход</span>
                  </Link>
                  <Link
                    to="/register"
                    className="mobile-auth-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Регистрация</span>
                  </Link>
                </div>
              ) : (
                <div className="mobile-profile-menu">
                  <Link
                    to="/profile"
                    className="mobile-auth-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span>Мой профиль</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="mobile-auth-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={faCog} />
                    <span>Настройки</span>
                  </Link>
                  <button
                    className="mobile-auth-link logout-mobile"
                    onClick={() => {
                      setIsAuthenticated(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Выход</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
