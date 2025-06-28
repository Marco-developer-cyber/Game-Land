import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faEdit,
  faSave,
  faTimes,
  faEye,
  faEyeSlash,
  faCamera,
  faTrophy,
  faStar,
  faCalendar,
  faSignOutAlt,
  faShield
} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Profile.css';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  joinDate: string;
  gamesPlayed: number;
  favoriteGames: string[];
  achievements: number;
  level: number;
  bio: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    id: '1',
    username: 'GameMaster2024',
    email: 'gamemaster@example.com',
    avatar: '/api/placeholder/150/150',
    joinDate: '2024-01-15',
    gamesPlayed: 45,
    favoriteGames: ['The Witcher 3', 'Cyberpunk 2077', 'GTA V'],
    achievements: 128,
    level: 15,
    bio: 'Страстный геймер с 10-летним стажем. Люблю RPG и приключенческие игры!'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(user);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleEditToggle = () => {
    if (isEditing) {
      setEditData(user);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика смены пароля
    console.log('Password change:', passwordData);
    setShowPasswordChange(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
    <div className="profile-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="profile-wrapper"
      >
        {/* Profile Header */}
        <motion.div variants={itemVariants} className="profile-header">
          <div className="profile-cover">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <img src={user.avatar} alt="Profile" />
                {isEditing && (
                  <button className="avatar-edit-btn">
                    <FontAwesomeIcon icon={faCamera} />
                  </button>
                )}
              </div>
              <div className="profile-info">
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={editData.username}
                    onChange={handleInputChange}
                    className="profile-username-edit"
                  />
                ) : (
                  <h1>{user.username}</h1>
                )}
                <p className="profile-level">Уровень {user.level}</p>
                <div className="profile-stats">
                  <div className="stat">
                    <FontAwesomeIcon icon={faGamepad} />
                    <span>{user.gamesPlayed} игр</span>
                  </div>
                  <div className="stat">
                    <FontAwesomeIcon icon={faTrophy} />
                    <span>{user.achievements} достижений</span>
                  </div>
                  <div className="stat">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>С {formatDate(user.joinDate)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon icon={faSave} />
                    Сохранить
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEditToggle}
                    className="btn btn-secondary"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    Отменить
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEditToggle}
                  className="btn btn-primary"
                >
                  <FontAwesomeIcon icon={faEdit} />
                  Редактировать
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        <div className="profile-content">
          {/* Main Info */}
          <motion.div variants={itemVariants} className="profile-section">
            <h2>Основная информация</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{user.email}</span>
                )}
              </div>
              <div className="info-item full-width">
                <label>О себе</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={editData.bio}
                    onChange={handleInputChange}
                    rows={3}
                  />
                ) : (
                  <p>{user.bio}</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div variants={itemVariants} className="profile-section">
            <h2>Безопасность</h2>
            <div className="security-actions">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPasswordChange(!showPasswordChange)}
                className="btn btn-outline"
              >
                <FontAwesomeIcon icon={faShield} />
                Изменить пароль
              </motion.button>
            </div>

            {showPasswordChange && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handlePasswordSubmit}
                className="password-form"
              >
                <div className="form-group">
                  <label>Текущий пароль</label>
                  <div className="input-wrapper">
                    <input
                      type={showPasswords.current ? "text" : "password"}
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPasswords({
                        ...showPasswords,
                        current: !showPasswords.current
                      })}
                    >
                      <FontAwesomeIcon icon={showPasswords.current ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Новый пароль</label>
                  <div className="input-wrapper">
                    <input
                      type={showPasswords.new ? "text" : "password"}
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPasswords({
                        ...showPasswords,
                        new: !showPasswords.new
                      })}
                    >
                      <FontAwesomeIcon icon={showPasswords.new ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Подтвердите новый пароль</label>
                  <div className="input-wrapper">
                    <input
                      type={showPasswords.confirm ? "text" : "password"}
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPasswords({
                        ...showPasswords,
                        confirm: !showPasswords.confirm
                      })}
                    >
                      <FontAwesomeIcon icon={showPasswords.confirm ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <div className="password-actions">
                  <button type="submit" className="btn btn-primary">
                    Сохранить пароль
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPasswordChange(false)}
                    className="btn btn-secondary"
                  >
                    Отменить
                  </button>
                </div>
              </motion.form>
            )}
          </motion.div>

          {/* Favorite Games */}
          <motion.div variants={itemVariants} className="profile-section">
            <h2>Любимые игры</h2>
            <div className="favorite-games">
              {user.favoriteGames.map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="game-card"
                >
                  <FontAwesomeIcon icon={faStar} />
                  <span>{game}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logout */}
          <motion.div variants={itemVariants} className="profile-section">
            <div className="danger-zone">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-danger"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Выйти из аккаунта
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
