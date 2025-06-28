import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, 
  faStar, 
  faCalendarAlt,
  faUser,
  faMicrochip,
  faMemory,
  faSdCard,
  faDesktop,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { featuredGames, type Game } from "../data/games";
import '../Styles/GameDetails.css'; // Импорт стилей для GameDetails

const GameDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const gameId = id ? parseInt(id, 10) : 0;
  const game = featuredGames.find((g: Game) => g.id === gameId);

  if (!game) return <div className="text-center mt-5">Игра не найдена</div>;

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container py-5"
    >
      <motion.div
        className="game-detail-card"
        variants={itemVariants}
      >
        {/* Заголовок и основная информация */}
        <div className="game-header">
          <motion.h1 className="game-title" variants={itemVariants}>
            {game.title}
            <button className="favorite-btn">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </motion.h1>
          
          <motion.div className="game-meta" variants={itemVariants}>
            <div className="game-rating">
              <FontAwesomeIcon icon={faStar} />
              <span>{game.rating.toFixed(1)}</span>
              <span className="community-rating">({game.communityRating}/10)</span>
            </div>
            <div className="game-genre">{game.genre}</div>
          </motion.div>
        </div>

        {/* Основное содержимое */}
        <div className="game-content">
          {/* Обложка и описание */}
          <motion.div className="game-cover-container" variants={itemVariants}>
            <div 
              className="game-cover"
              style={{ backgroundImage: `url(${game.image})` }}
            />
          </motion.div>
          
          <motion.div className="game-description" variants={itemVariants}>
            <h2>Описание</h2>
            <p>{game.description}</p>
          </motion.div>

          {/* Системные требования */}
          <motion.div className="requirements-section" variants={itemVariants}>
            <h2>Системные требования</h2>
            <div className="requirements-grid">
              <div className="requirements-card">
                <h3>Минимальные</h3>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>{game.minRequirements.os}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faMicrochip} />
                  <span>{game.minRequirements.processor}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faMemory} />
                  <span>{game.minRequirements.memory}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>{game.minRequirements.graphics}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faSdCard} />
                  <span>{game.minRequirements.storage}</span>
                </div>
              </div>

              <div className="requirements-card">
                <h3>Рекомендуемые</h3>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>{game.recRequirements.os}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faMicrochip} />
                  <span>{game.recRequirements.processor}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faMemory} />
                  <span>{game.recRequirements.memory}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span>{game.recRequirements.graphics}</span>
                </div>
                <div className="requirement-item">
                  <FontAwesomeIcon icon={faSdCard} />
                  <span>{game.recRequirements.storage}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Дополнительная информация */}
          <motion.div className="game-info" variants={itemVariants}>
            <h2>Детали</h2>
            <div className="info-grid">
              <div className="info-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Дата выхода: {game.releaseDate}</span>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faUser} />
                <span>Разработчик: {game.developer}</span>
              </div>
              <div className="info-item">
                <a href={game.trailer} target="_blank" rel="noopener noreferrer">
                  Смотреть трейлер
                </a>
              </div>
            </div>
          </motion.div>

          {/* Кнопка скачивания */}
          <motion.div 
            className="download-btn-container"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" size="lg" className="download-btn">
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Скачать
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameDetails;