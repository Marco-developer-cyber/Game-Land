import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { featuredGames, type Game } from "./data/games";
import { FaPlay, FaStar, FaHeart, FaRegHeart, FaGamepad, FaTrophy, FaUsers } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { RiFireFill } from "react-icons/ri";
import './App.css';

const MainMenu = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine: any) => {
    const { loadFull } = await import("tsparticles");
    await loadFull(engine);
  }, []);

  // Автоматическая смена featured игры
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Отслеживание позиции мыши для параллакс эффекта
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleFavorite = (gameId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(gameId)) {
      newFavorites.delete(gameId);
    } else {
      newFavorites.add(gameId);
    }
    setFavorites(newFavorites);
  };

  const featuredGame = featuredGames[featuredIndex];

  return (
    <div className="main-menu">
      {/* Улучшенный фон с частицами */}
      <Particles
        id="mainMenuParticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 120 },
            color: { value: ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe", "#00f2fe"] },
            opacity: { 
              value: { min: 0.3, max: 0.8 },
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            size: { 
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 3,
                sync: false
              }
            },
            move: { 
              enable: true, 
              speed: { min: 0.5, max: 2 },
              direction: "none",
              outModes: "out",
              attract: {
                enable: true,
                rotateX: mousePosition.x * 600,
                rotateY: mousePosition.y * 600
              }
            },
            links: {
              enable: true,
              distance: 200,
              color: "#667eea",
              opacity: 0.2,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1
              }
            }
          },
          background: {
            color: {
              value: "transparent"
            }
          }
        }}
        className="particles-bg"
      />

      {/* Динамический фон */}
      <div className="dynamic-bg">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
      </div>

      {/* Hero секция с featured игрой */}
      <motion.div 
        className="hero-showcase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-bg" style={{ backgroundImage: `url(${featuredGame.image})` }}>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-info"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
            }}
          >
            <motion.div 
              className="game-badge"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <RiFireFill /> ПОПУЛЯРНОЕ
            </motion.div>
            
            <motion.h1 
              className="hero-game-title"
              key={featuredGame.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {featuredGame.title}
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {featuredGame.description}
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="stat-item">
                <FaStar />
                <span>{featuredGame.rating}</span>
              </div>
              <div className="stat-item">
                <FaTrophy />
                <span>{featuredGame.genre}</span>
              </div>
              <div className="stat-item">
                <FaUsers />
                <span>Онлайн</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="play-now-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedGame(featuredGame)}
              >
                <FaPlay />
                ИГРАТЬ СЕЙЧАС
              </motion.button>
              
              <motion.button
                className="add-favorite-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleFavorite(featuredGame.id)}
              >
                {favorites.has(featuredGame.id) ? <FaHeart /> : <FaRegHeart />}
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Индикаторы карусели */}
          <div className="carousel-indicators">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === featuredIndex ? 'active' : ''}`}
                onClick={() => setFeaturedIndex(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Заголовок секции игр */}
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2 className="section-title">
          <FaGamepad />
          Популярные игры
        </h2>
        <div className="section-subtitle">
          <BiTrendingUp />
          Откройте для себя лучшие игры этого сезона
        </div>
      </motion.div>

      {/* Улучшенная сетка игр */}
      <motion.div 
        className="games-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {featuredGames.map((game, index) => (
          <motion.div
            key={game.id}
            className="game-card"
            initial={{ opacity: 0, y: 100, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              delay: 1.3 + index * 0.1, 
              duration: 0.8,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{ 
              scale: 1.03,
              y: -15,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            onClick={() => setSelectedGame(game)}
          >
            <div className="card-glow"></div>
            <div className="game-image" style={{ backgroundImage: `url(${game.image})` }}>
              <div className="game-overlay">
                <motion.button
                  className="play-button"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaPlay />
                </motion.button>
                <div className="game-genre-badge">{game.genre}</div>
              </div>
              <button
                className="favorite-button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(game.id);
                }}
              >
                {favorites.has(game.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <div className="game-stats">
                <div className="game-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(game.rating) ? 'star-active' : 'star-inactive'}
                      />
                    ))}
                  </div>
                  <span className="rating-text">{game.rating.toFixed(1)}</span>
                </div>
                <div className="release-year">
                  {new Date(game.releaseDate).getFullYear()}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Улучшенное модальное окно */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            className="game-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              className="game-modal"
              initial={{ scale: 0.5, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedGame(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <div className="modal-image" style={{ backgroundImage: `url(${selectedGame.image})` }}>
                  <div className="modal-gradient"></div>
                </div>
                <div className="modal-title-section">
                  <h2 className="modal-game-title">{selectedGame.title}</h2>
                  <div className="modal-genre-badge">{selectedGame.genre}</div>
                  <div className="modal-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(selectedGame.rating) ? 'star-active' : 'star-inactive'}
                        />
                      ))}
                    </div>
                    <span>{selectedGame.rating.toFixed(1)}/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="modal-content">
                <p className="modal-description">{selectedGame.description}</p>
                
                <div className="modal-details">
                  <div className="detail-card">
                    <strong>Разработчик</strong>
                    <span>{selectedGame.developer}</span>
                  </div>
                  <div className="detail-card">
                    <strong>Дата выхода</strong>
                    <span>{selectedGame.releaseDate}</span>
                  </div>
                </div>
                
                <motion.button
                  className="play-game-button"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  ИГРАТЬ СЕЙЧАС
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainMenu;
