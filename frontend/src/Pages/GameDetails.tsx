// import { motion } from "framer-motion";
// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import { useParams } from "react-router-dom";

// // Импортируем данные игр и интерфейс из Home.tsx
// // В реальном приложении это должно быть в отдельном файле или получаться с сервера
// import { featuredGames } from "./Home";

// // Интерфейс для игры (должен совпадать с интерфейсом в Home.tsx)
// interface Game {
//   id: number;
//   title: string;
//   genre: string;
//   rating: number;
//   communityRating: number;
//   image: string;
//   platforms: Array<any>; // FontAwesome icons
//   description: string;
//   releaseDate: string;
//   developer: string;
//   minRequirements: {
//     os: string;
//     processor: string;
//     memory: string;
//     graphics: string;
//     storage: string;
//   };
//   recRequirements: {
//     os: string;
//     processor: string;
//     memory: string;
//     graphics: string;
//     storage: string;
//   };
//   trailer: string;
// }

// const GameDetails = () => {
//   const { id } = useParams<{ id?: string }>(); // Явная типизация для useParams
//   const gameId = id ? parseInt(id, 10) : 0;
//   const game = featuredGames.find((g: Game) => g.id === gameId);

//   if (!game) return <div className="text-center mt-5">Игра не найдена</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mt-5"
//     >
//       <div
//         className="card bg-dark text-light p-4"
//         style={{
//           borderRadius: "25px",
//           background: "linear-gradient(135deg, #1a1a2e, #2e2e48)",
//           boxShadow: "0 15px 50px rgba(0, 255, 204, 0.3)",
//           padding: "30px",
//         }}
//       >
//         <h1 className="display-3 text-center mb-4" style={{ textShadow: "2px 2px 10px #00ffcc" }}>
//           {game.title}
//         </h1>
//         <div
//           className="card-img-top mb-4"
//           style={{
//             height: "450px",
//             backgroundImage: `url(${game.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "20px",
//             boxShadow: "0 5px 15px rgba(0, 0, 0, 0.7)",
//           }}
//         />
//         <p className="lead text-center mb-4" style={{ fontSize: "1.2rem" }}>
//           {game.description}
//         </p>
//         <h4 className="text-center mb-3">Системные требования</h4>
//         <div className="row mb-4">
//           <div className="col-md-6">
//             <h5>Минимальные:</h5>
//             <ul className="list-unstyled">
//               <li><strong>OS:</strong> {game.minRequirements.os}</li>
//               <li><strong>Процессор:</strong> {game.minRequirements.processor}</li>
//               <li><strong>Память:</strong> {game.minRequirements.memory}</li>
//               <li><strong>Видеокарта:</strong> {game.minRequirements.graphics}</li>
//               <li><strong>Хранилище:</strong> {game.minRequirements.storage}</li>
//             </ul>
//           </div>
//           <div className="col-md-6">
//             <h5>Рекомендуемые:</h5>
//             <ul className="list-unstyled">
//               <li><strong>OS:</strong> {game.recRequirements.os}</li>
//               <li><strong>Процессор:</strong> {game.recRequirements.processor}</li>
//               <li><strong>Память:</strong> {game.recRequirements.memory}</li>
//               <li><strong>Видеокарта:</strong> {game.recRequirements.graphics}</li>
//               <li><strong>Хранилище:</strong> {game.recRequirements.storage}</li>
//             </ul>
//           </div>
//         </div>
//         <h4 className="text-center mb-3">Дополнительно</h4>
//         <ul className="list-unstyled text-center">
//           <li><strong>Дата выхода:</strong> {game.releaseDate}</li>
//           <li><strong>Разработчик:</strong> {game.developer}</li>
//           <li><strong>Рейтинг сообщества:</strong> {game.communityRating}/10</li>
//           <li>
//             <a href={game.trailer} target="_blank" rel="noopener noreferrer" className="text-info">
//               Смотреть трейлер
//             </a>
//           </li>
//         </ul>
//         <div className="d-flex justify-content-center mt-4">
//           <Button
//             variant="success"
//             size="lg"
//             className="px-5 py-3"
//             style={{ background: "#00cc00", border: "none", fontSize: "1.3rem" }}
//           >
//             <FontAwesomeIcon icon={faDownload} className="me-2" />
//             Скачать
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default GameDetails;
