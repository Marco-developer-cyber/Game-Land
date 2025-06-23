import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  // faGamepad, 
  faFilter,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { 
  faSteam, 
  faXbox, 
  faPlaystation 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; // Импорт стилей для Home

interface Game {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
  platforms: any[];
  isFavorite?: boolean;
}

const Home: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState<string>('Все');
  const [games, setGames] = useState<Game[]>([
    {
      id: 1,
      title: 'Cyberpunk 2077',
      genre: 'RPG',
      rating: 4.5,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2r7f.jpg',
      platforms: [faSteam, faXbox, faPlaystation],
      isFavorite: false
    },
    {
      id: 2,
      title: 'Elden Ring',
      genre: 'Souls-like',
      rating: 4.8,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4j7a.jpg',
      platforms: [faSteam, faPlaystation],
      isFavorite: false
    },
    {
      id: 3,
      title: 'God of War: Ragnarök',
      genre: 'Action',
      rating: 4.9,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5hf2.jpg',
      platforms: [faPlaystation],
      isFavorite: false
    },
    {
      id: 4,
      title: 'The Witcher 3: Wild Hunt',
      genre: 'RPG',
      rating: 4.9,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      platforms: [faSteam, faXbox, faPlaystation],
      isFavorite: false
    },
    {
      id: 5,
      title: 'Red Dead Redemption 2',
      genre: 'Action',
      rating: 4.8,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tab.jpg',
      platforms: [faSteam, faXbox, faPlaystation],
      isFavorite: false
    },
    {
      id: 6,
      title: 'Horizon Forbidden West',
      genre: 'Action',
      rating: 4.7,
      image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4leh.jpg',
      platforms: [faPlaystation],
      isFavorite: false
    }
  ]);

  const genres = ['Все', 'RPG', 'Action', 'Souls-like'];

  const filteredGames = activeGenre === 'Все' 
    ? games 
    : games.filter(game => game.genre === activeGenre);

  const toggleFavorite = (id: number) => {
    setGames(games.map(game => 
      game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      {/* Фильтры по жанрам */}
      <div className="filters-container">
        {genres.map((genre) => (
          <motion.button
            key={genre}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`filter-button ${activeGenre === genre ? 'active' : ''}`}
            onClick={() => setActiveGenre(genre)}
          >
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            {genre}
          </motion.button>
        ))}
      </div>

      {/* Сетка игр */}
      <div className="games-grid">
        <AnimatePresence>
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
              className="game-card"
            >
              <div className="game-image-container">
                {!game.image && (
                  <div className="skeleton-img" />
                )}
                {game.image && (
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="game-image"
                  />
                )}
                <div className="game-overlay" />
                {game.rating > 4.7 && (
                  <div className="top-badge">
                    Топ
                  </div>
                )}
                <button 
                  className={`favorite-button ${game.isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(game.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="game-info">
                <h3 className="game-title">{game.title}</h3>
                <div className="game-genre">{game.genre}</div>
                <div className="game-footer">
                  <div className="game-rating">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <span>{game.rating.toFixed(1)}</span>
                  </div>
                  <div className="game-platforms">
                    {game.platforms.map((PlatformIcon, index) => (
                      <FontAwesomeIcon 
                        key={index} 
                        icon={PlatformIcon} 
                        className="platform-icon"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Home;