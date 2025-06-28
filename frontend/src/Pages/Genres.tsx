import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faHeart,
  faCalendarAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Genres.css';
import { featuredGames, type Game } from '../data/games';

const Genres: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState<string>('Все');
  const [games] = useState<Game[]>(featuredGames);

  const genres = ['Все', ...new Set(games.map(game => game.genre))];

  const filteredGames = activeGenre === 'Все' 
    ? games 
    : games.filter(game => game.genre === activeGenre);

  return (
    <div className="home-container">
      <h1 className="page-title">Популярные игры</h1>
      
      {/* Фильтры */}
      <div className="filters">
        {genres.map(genre => (
          <button
            key={genre}
            className={`filter-btn ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Сетка игр */}
      <div className="games-grid">
        <AnimatePresence>
          {filteredGames.map(game => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="game-card"
            >
              <Link to={`/game/${game.id}`} className="game-link">
                {/* Верхняя часть с изображением */}
                <div className="card-top">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="game-image"
                    loading="lazy"
                  />
                  <div className="game-badges">
                    {game.rating > 4.5 && (
                      <span className="top-badge">
                        <FontAwesomeIcon icon={faStar} /> Топ
                      </span>
                    )}
                    <button 
                      className={`favorite-btn ${game.isFavorite ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        // Обработка добавления в избранное
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>

                {/* Нижняя часть с информацией */}
                <div className="card-bottom">
                  <h3 className="game-title">{game.title}</h3>
                  
                  <div className="game-meta">
                    <span className="genre">{game.genre}</span>
                    <span className="rating">
                      <FontAwesomeIcon icon={faStar} /> {game.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="game-details">
                    <div className="detail-item">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{game.releaseDate}</span>
                    </div>
                    <div className="detail-item">
                      <FontAwesomeIcon icon={faUser} />
                      <span>{game.developer}</span>
                    </div>
                  </div>

                  <div className="platforms">
                    {game.platforms.map((PlatformIcon, idx) => (
                      <FontAwesomeIcon 
                        key={idx} 
                        icon={PlatformIcon} 
                        className="platform-icon"
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Genres;