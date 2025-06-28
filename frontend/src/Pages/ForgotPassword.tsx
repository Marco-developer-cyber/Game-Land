import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/ForgotPassword.css'; // Импорт стилей для ForgotPassword

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация запроса к API
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

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
      className="forgot-password-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="forgot-password-card">
        <Link to="/login" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Назад к входу</span>
        </Link>

        {!isSubmitted ? (
          <>
            <motion.div variants={itemVariants} className="forgot-password-header">
              <h2>Восстановление пароля</h2>
              <p>Введите email, связанный с вашей учетной записью, и мы отправим вам ссылку для сброса пароля</p>
            </motion.div>

            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="forgot-password-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  'Отправить ссылку'
                )}
              </motion.button>
            </motion.form>
          </>
        ) : (
          <motion.div
            className="success-message"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <h3>Проверьте вашу почту!</h3>
            <p>
              Мы отправили ссылку для восстановления пароля на адрес <strong>{email}</strong>.
              Если письмо не пришло, проверьте папку "Спам".
            </p>
            <p className="additional-help">
              Нужна дополнительная помощь? <Link to="/contact">Свяжитесь с нами</Link>
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ForgotPassword;