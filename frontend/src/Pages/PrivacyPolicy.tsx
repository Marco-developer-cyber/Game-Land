import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faDatabase, 
  faUserShield, 
  faCookie, 
  faEyeSlash,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/PrivacyPolicy.css'; // Импорт стилей для PrivacyPolicy

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: faShieldAlt,
      title: "1. Сбор информации",
      content: "Мы собираем только необходимые данные для работы сервиса: email, имя пользователя, данные об устройстве и активности на платформе. Платежная информация обрабатывается через защищенные платежные системы."
    },
    {
      icon: faDatabase,
      title: "2. Использование данных",
      content: "Ваши данные используются для: предоставления услуг GameLand, улучшения пользовательского опыта, отправки важных уведомлений и защиты от мошенничества. Мы никогда не продаем ваши данные третьим лицам."
    },
    {
      icon: faUserShield,
      title: "3. Защита данных",
      content: "Мы применяем современные методы шифрования (SSL/TLS), регулярные аудиты безопасности и ограниченный доступ к персональным данным. Все пароли хранятся в хешированном виде."
    },
    {
      icon: faCookie,
      title: "4. Cookies и аналитика",
      content: "GameLand использует cookies для работы сайта и аналитики. Вы можете отключить cookies в настройках браузера, но это может повлиять на функциональность платформы."
    },
    {
      icon: faEyeSlash,
      title: "5. Конфиденциальность для детей",
      content: "Наш сервис не предназначен для детей младше 13 лет. Мы не собираем данные о пользователях этого возраста и удаляем такие аккаунты при обнаружении."
    },
    {
      icon: faLock,
      title: "6. Ваши права",
      content: "Вы можете запросить доступ к вашим данным, их исправление или удаление в любое время через настройки аккаунта или обратившись в нашу поддержку."
    }
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

  return (
    <motion.div
      className="privacy-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="privacy-header">
        <motion.h1 variants={itemVariants}>Политика конфиденциальности GameLand</motion.h1>
        <motion.p variants={itemVariants} className="effective-date">
          Действует с {new Date().toLocaleDateString()}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="privacy-intro">
        <p>
          Ваша конфиденциальность крайне важна для нас. В этом документе описано, как GameLand собирает, использует и защищает ваши личные данные.
        </p>
      </motion.div>

      <div className="privacy-sections">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="privacy-card"
          >
            <div className="privacy-icon">
              <FontAwesomeIcon icon={section.icon} />
            </div>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="privacy-footer">
        <div className="contact-info">
          <h4>Контакты по вопросам конфиденциальности</h4>
          <p>Если у вас есть вопросы о нашей политике, напишите на <a href="mailto:privacy@gameland.com">privacy@gameland.com</a></p>
        </div>
        
        <div className="policy-updates">
          <h4>Обновления политики</h4>
          <p>Мы можем периодически обновлять эту политику. Все изменения будут опубликованы на этой странице.</p>
        </div>

        <div className="legal-links">
          <Link to="/terms">Условия использования</Link>
          <Link to="/cookies">Политика cookies</Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicy;