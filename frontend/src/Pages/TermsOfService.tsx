import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll, faGavel, faShieldAlt, faUserLock, faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/TermsOfService.css';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: faScroll,
      title: "1. Общие положения",
      content: "Используя GameLand, вы соглашаетесь с настоящими Условиями. Платформа предназначена для пользователей старше 13 лет. Мы оставляем за собой право изменять условия без предварительного уведомления."
    },
    {
      icon: faGavel,
      title: "2. Права и обязанности",
      content: "Вы несете ответственность за контент, который публикуете. Запрещено распространять незаконные материалы, спам или вредоносное ПО. Мы можем ограничить доступ к аккаунту за нарушение правил."
    },
    {
      icon: faShieldAlt,
      title: "3. Конфиденциальность",
      content: "Мы защищаем ваши данные в соответствии с нашей Политикой конфиденциальности. Однако не гарантируем абсолютную безопасность информации в интернете."
    },
    {
      icon: faUserLock,
      title: "4. Аккаунт",
      content: "Вы отвечаете за безопасность своих учетных данных. Запрещено передавать аккаунт третьим лицам. Мы не восстанавливаем аккаунты, утраченные из-за нарушения этого правила."
    },
    {
      icon: faBan,
      title: "5. Ограничения",
      content: "Запрещено использовать GameLand для: распространения пиратского контента, мошенничества, кибербуллинга или любой незаконной деятельности. Нарушители будут заблокированы."
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
      className="terms-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="terms-header">
        <motion.h1 variants={itemVariants}>Условия использования GameLand</motion.h1>
        <motion.p variants={itemVariants} className="last-updated">
          Последнее обновление: {new Date().toLocaleDateString()}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="terms-intro">
        <p>
          Добро пожаловать в GameLand! Пожалуйста, внимательно ознакомьтесь с нашими Условиями использования перед тем, как начать пользоваться платформой.
        </p>
      </motion.div>

      <div className="terms-sections">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="term-card"
          >
            <div className="term-icon">
              <FontAwesomeIcon icon={section.icon} />
            </div>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="terms-footer">
        <p>
          Продолжая использовать GameLand, вы подтверждаете, что прочитали, поняли и согласны с этими Условиями и нашей <Link to="/privacy">Политикой конфиденциальности</Link>.
        </p>
        <div className="acceptance-box">
          <input type="checkbox" id="accept-terms" />
          <label htmlFor="accept-terms">Я принимаю Условия использования</label>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TermsOfService;