import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Akash kumar | Developer', // e.g: 'Name | Developer'
  lang: 'English, Hindi, Punjabi', // e.g: en, es, fr, jp
  description: 'Welcome To My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My Name Is',
  name: 'Akash Kumar',
  subtitle: 'I am a Frontend Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello Peeps! 👋 I am a Frontend Developer and a Javascript enthusiast. I Love to code in Java and also MySQL is my expertise. Currently I am learning android and making my grip strong in Data Structures and Algorithms.',
  paragraphTwo: 'Apart from all these I love to read non-fiction and self-help books. My favourite book is " The Power of your Subconscious Mind By Dr. Joseph Murphy ". This is because I like to know about mind related facts and thier powers.',
  paragraphThree: 'I am not very much into sports but I like to spend my time playing badminton with my friends. And That\'s all about me and myself 😉',
  resume: 'https://resume.io/r/3eXDUpi4m', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'snake.png',
    title: 'Snake Game',
    info: 'This is an interative snake game which is developed only by the use of vanilla javascript, html and ofcourse css. The features of this game are really simple, you can change the levels - easy, medium, hard and compete with your family and friends by beating their high scores!',
    info2: '',
    url: 'https://akkashsri.github.io/SnakeGame/',
    repo: 'https://github.com/akkashsri/SnakeGame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'canberra.png',
    title: 'Canberra Restaurants',
    info: 'This is a College Project. In this website you can find some retaurants in the canberra city, australia. You can find the menu of the restaurants, their prices and their exact locations with the help embedded map. Technologies used for this project BootStrap, HTML, CSS and Javascript.',
    info2: '',
    url: 'https://akkashsri.github.io/CanberraRestaurantsWebsite/',
    repo: 'https://github.com/akkashsri/CanberraRestaurantsWebsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dragon.png',
    title: 'Dragon Game',
    info: 'This is a dragon run game made purely with VanillaJS, HTML and CSS. It\'s a fun game. You can make the dragon jump upwards and it also walk forward and backwards. Automatic score updation is added. You just don\'t have to collide with the dragon to win the game.  ',
    info2: '',
    url: 'https://akkashsri.github.io/DragonGame/',
    repo: 'https://github.com/akkashsri/DragonGame', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
 
  btn: 'Email',
  email: 'akashkumar59200@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/akkashsri',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/akkashsri',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/akkashsri',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/akkashsri',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
