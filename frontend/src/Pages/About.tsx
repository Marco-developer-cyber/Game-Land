import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faUsers, 
  faHeart, 
  faRocket,
  faEnvelope,
  faStar,
  faCode,
  faPalette,
  faDatabase,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faTelegram,
  faDiscord,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import '../Styles/About.css';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Алексей Иванов',
      role: 'Frontend Developer',
      icon: faCode,
      description: 'Специализируется на React и современных веб-технологиях',
      social: [
        { icon: faGithub, url: '#' },
        { icon: faTwitter, url: '#' }
      ]
    },
    {
      name: 'Мария Петрова',
      role: 'UI/UX Designer',
      icon: faPalette,
      description: 'Создает потрясающие пользовательские интерфейсы',
      social: [
        { icon: faGithub, url: '#' },
        { icon: faTwitter, url: '#' }
      ]
    },
    {
      name: 'Дмитрий Смирнов',
      role: 'Backend Developer',
      icon: faDatabase,
      description: 'Архитектор серверной части и API',
      social: [
        { icon: faGithub, url: '#' },
        { icon: faTwitter, url: '#' }
      ]
    }
  ];

  const features = [
    {
      icon: faGamepad,
      title: 'Огромная коллекция',
      description: 'Тысячи игр всех жанров и платформ'
    },
    {
      icon: faStar,
      title: 'Система рейтингов',
      description: 'Честные оценки от реальных игроков'
    },
    {
      icon: faUsers,
      title: 'Сообщество',
      description: 'Активное сообщество геймеров'
    },
    {
      icon: faHeart,
      title: 'Избранное',
      description: 'Сохраняй любимые игры в избранном'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Игр в каталоге' },
    { value: '500K+', label: 'Пользователей' },
    { value: '24/7', label: 'Поддержка' },
    { value: '2018', label: 'Год основания' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(95, 75, 139, 0.4)"
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about-container"
    >
      {/* Hero секция */}
      <motion.section variants={itemVariants} className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="hero-icon"
          >
            <FontAwesomeIcon icon={faGamepad} />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Добро пожаловать в <span className="gradient-text">GameLand</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="hero-description"
          >
            Ваш проводник в мире игр. Мы создали платформу, где каждый геймер 
            найдет что-то особенное для себя.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-button"
            >
              Начать исследовать
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
        <div className="hero-pattern"></div>
      </motion.section>

      {/* Статистика */}
      <motion.section variants={itemVariants} className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* О проекте */}
      <motion.section variants={itemVariants} className="about-section">
        <div className="section-header">
          <h2 className="section-title">О нашем проекте</h2>
          <p className="section-subtitle">Мы создаем лучший игровой опыт</p>
        </div>
        <div className="about-content">
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="about-card"
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Наша миссия</h3>
            <p>
              Мы создаем лучшую платформу для поиска и открытия новых игр. 
              Наша цель — объединить геймеров всего мира и помочь им найти 
              идеальные игры для любого настроения.
            </p>
          </motion.div>
          
          <motion.div
            whileHover="hover"
            variants={cardVariants}
            className="about-card"
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <h3>Наши ценности</h3>
            <p>
              Мы верим в силу игр объединять людей, создавать незабываемые 
              впечатления и вдохновлять на новые свершения. Каждая игра — 
              это целая вселенная приключений.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Особенности */}
      <motion.section variants={itemVariants} className="features-section">
        <div className="section-header">
          <h2 className="section-title">Что мы предлагаем</h2>
          <p className="section-subtitle">Уникальные возможности для геймеров</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              className="feature-card"
              custom={index}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Команда */}
      <motion.section variants={itemVariants} className="team-section">
        <div className="section-header">
          <h2 className="section-title">Наша команда</h2>
          <p className="section-subtitle">Профессионалы, которые создают GameLand</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover="hover"
              className="team-card"
            >
              <div className="team-avatar">
                <FontAwesomeIcon icon={member.icon} />
              </div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p>{member.description}</p>
              <div className="team-social">
                {member.social.map((social, i) => (
                  <a key={i} href={social.url} className="social-link">
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA секция */}
      <motion.section variants={itemVariants} className="cta-section">
        <div className="cta-content">
          <h2>Готовы начать?</h2>
          <p>Присоединяйтесь к нашему сообществу прямо сейчас</p>
          <Link to="/register">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-button"
          >
            Зарегистрироваться
          </motion.button>
        </Link>
        </div>
      </motion.section>

      {/* Контакты */}
      <motion.section variants={itemVariants} className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">Мы всегда рады вашим вопросам и предложениям</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@gameland.com">info@gameland.com</a>
              </div>
            </div>
          </div>
          <div className="social-links">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/gameland"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://t.me/gameland"
              className="social-link"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://discord.gg/gameland"
              className="social-link"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://youtube.com/gameland"
              className="social-link"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;