import { 
  faSteam, 
  faXbox, 
  faPlaystation 
} from '@fortawesome/free-brands-svg-icons';

export interface Game {
  id: number;
  title: string;
  genre: string;
  rating: number;
  communityRating: number;
  image: string;
  platforms: any[];
  description: string;
  releaseDate: string;
  developer: string;
  minRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  recRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  trailer: string;
  isFavorite?: boolean;
}

export const featuredGames: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    rating: 4.5,
    communityRating: 8.5,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2r7f.jpg',
    platforms: [faSteam, faXbox, faPlaystation],
    description: 'Cyberpunk 2077 — это приключенческая ролевая игра с открытым миром, действие которой происходит в Найт-Сити, мегаполисе, одержимом властью, гламуром и модификациями тела.',
    releaseDate: '10 декабря 2020',
    developer: 'CD Projekt RED',
    minRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-3570K / AMD FX-8310',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 780 / AMD Radeon RX 470',
      storage: '70 GB'
    },
    recRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i7-4790 / AMD Ryzen 3 3200G',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon R9 Fury',
      storage: '70 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=8X2kIfS6fb8',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Elden Ring',
    genre: 'Souls-like',
    rating: 4.8,
    communityRating: 9.2,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4j7a.jpg',
    platforms: [faSteam, faPlaystation],
    description: 'Elden Ring — это фэнтезийная экшн-RPG с открытым миром от FromSoftware и Джорджа Р. Р. Мартина. Исследуйте Междуземье и станьте Элден Лордом.',
    releaseDate: '25 февраля 2022',
    developer: 'FromSoftware',
    minRequirements: {
      os: 'Windows 10',
      processor: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
      memory: '12 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
      storage: '60 GB'
    },
    recRequirements: {
      os: 'Windows 10/11',
      processor: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB',
      storage: '60 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=E3Huy2cdih0',
    isFavorite: false
  },
  {
    id: 3,
    title: 'God of War: Ragnarök',
    genre: 'Action',
    rating: 4.9,
    communityRating: 9.4,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5hf2.jpg',
    platforms: [faPlaystation],
    description: 'Присоединяйтесь к Кратосу и Атрею в их эпическом путешествии по девяти царствам в поисках ответов, пока приближается Рагнарёк.',
    releaseDate: '9 ноября 2022',
    developer: 'Santa Monica Studio',
    minRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel i5-4670k / AMD Ryzen 3 1200',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1060 / AMD RX 570',
      storage: '190 GB'
    },
    recRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel i5-8600 / AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 2060 / AMD RX 6600 XT',
      storage: '190 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=EE-4GvjKcfs',
    isFavorite: false
  },
  {
    id: 4,
    title: 'The Witcher 3: Wild Hunt',
    genre: 'RPG',
    rating: 4.9,
    communityRating: 9.8,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
    platforms: [faSteam, faXbox, faPlaystation],
    description: 'Вы — Геральт из Ривии, наёмный охотник на чудовищ. Перед вами — континент, раздираемый войной, населенный монстрами, и вам предстоит принять самое важное решение в жизни.',
    releaseDate: '19 мая 2015',
    developer: 'CD Projekt RED',
    minRequirements: {
      os: 'Windows 7 64-bit',
      processor: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      memory: '6 GB RAM',
      graphics: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      storage: '35 GB'
    },
    recRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz',
      memory: '8 GB RAM',
      graphics: 'Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290',
      storage: '35 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=c0i88t0Kacs',
    isFavorite: false
  },
  {
    id: 5,
    title: 'Red Dead Redemption 2',
    genre: 'Action',
    rating: 4.8,
    communityRating: 9.1,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tab.jpg',
    platforms: [faSteam, faXbox, faPlaystation],
    description: 'Америка, 1899 год. Эпоха Дикого Запада подходит к концу. Следуйте за Артуром Морганом и бандой Ван дер Линде в их борьбе за выживание.',
    releaseDate: '26 октября 2018',
    developer: 'Rockstar Games',
    minRequirements: {
      os: 'Windows 7 SP1 64bit',
      processor: 'Intel Core i5-2500K / AMD FX-6300',
      memory: '8 GB RAM',
      graphics: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280',
      storage: '150 GB'
    },
    recRequirements: {
      os: 'Windows 10 64bit',
      processor: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
      memory: '12 GB RAM',
      graphics: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
      storage: '150 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=gmA6MrX81z4',
    isFavorite: false
  },
  {
    id: 6,
    title: 'Horizon Forbidden West',
    genre: 'Action',
    rating: 4.7,
    communityRating: 8.9,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4leh.jpg',
    platforms: [faPlaystation],
    description: 'Присоединяйтесь к Элой в её путешествии по запретному западу, постапокалиптическому открытому миру, полному загадочных монстров.',
    releaseDate: '18 февраля 2022',
    developer: 'Guerrilla Games',
    minRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i3-8100 / AMD Ryzen 3 1300X',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1650 4GB / AMD Radeon RX 5500XT 4GB',
      storage: '100 GB'
    },
    recRequirements: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-8600 / AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6600XT',
      storage: '100 GB SSD'
    },
    trailer: 'https://www.youtube.com/watch?v=Lq594XmpPBg',
    isFavorite: false
  }
];
