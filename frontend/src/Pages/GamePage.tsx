import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faCalendarAlt,
  faClock,
  faUser,
  faGamepad,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { 
  faSteam, 
  faXbox, 
  faPlaystation 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/GamePage.css'; // Импорт стилей для GamePage

interface GameDetails {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
  description: string;
  releaseDate: string;
  playtime: string;
  developer: string;
  platforms: string[];
  screenshots: string[];
}

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Временные данные (заменим на данные из API)
  const game: GameDetails = {
    id: 1,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    rating: 4.5,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2r7f.jpg',
    description: 'Cyberpunk 2077 — это приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках уникального имплантата, который является ключом к бессмертию.',
    releaseDate: '10 декабря 2020',
    playtime: '25-50 часов',
    developer: 'CD Projekt Red',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    screenshots: [
      'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5li7.jpg',
      'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5li8.jpg',
      'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5li9.jpg',
      'https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5lia.jpg'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="game-page-container"
    >
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Назад к играм</span>
      </Link>

      <div className="game-header">
        <div className="game-cover-container">
          <img src={game.image} alt={game.title} className="game-cover" />
        </div>
        <div className="game-header-info">
          <h1 className="game-title">{game.title}</h1>
          <div className="game-meta">
            <div className="game-rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <span>{game.rating.toFixed(1)}</span>
            </div>
            <div className="game-genre">{game.genre}</div>
          </div>
          <div className="game-details">
            <div className="detail-item">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>{game.releaseDate}</span>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faClock} />
              <span>{game.playtime}</span>
            </div>
            <div className="detail-item">
              <FontAwesomeIcon icon={faUser} />
              <span>{game.developer}</span>
            </div>
          </div>
          <div className="game-platforms">
            {game.platforms.map((platform, index) => (
              <div key={index} className="platform-badge">
                {platform === 'PC' && <FontAwesomeIcon icon={faSteam} />}
                {platform === 'PlayStation' && <FontAwesomeIcon icon={faPlaystation} />}
                {platform === 'Xbox' && <FontAwesomeIcon icon={faXbox} />}
                <span>{platform}</span>
              </div>
            ))}
          </div>
          <button className="play-button">
            <FontAwesomeIcon icon={faGamepad} />
            <span>Играть</span>
          </button>
        </div>
      </div>

      <div className="game-content">
        <section className="game-description">
          <h2>Описание</h2>
          <p>{game.description}</p>
        </section>

        <section className="game-screenshots">
          <h2>Скриншоты</h2>
          <div className="screenshots-grid">
            {game.screenshots.map((screenshot, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="screenshot-item"
              >
                <img src={screenshot} alt={`Скриншот ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default GamePage;