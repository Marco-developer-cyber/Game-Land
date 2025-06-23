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
  faInfoCircle 
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="user-button"
          >
            <FontAwesomeIcon icon={faUser} />
          </motion.button>
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
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;