import { ProjectData, ProjectTag } from "../models/project";

export const USING_THESE_TECHS: string[] = ['Angular', 'Unity3D', 'Shaders', 'Blender'];

export const PROJECTS: ProjectData[] = [
  {
    name: 'TicTacToe',
    coverImg: 'assets/images/projects/tictactoe-2019.png',
    slug: 'tictactoe-2019',
    datePublished: new Date(2019, 10, 25),
    description: 'A simple game of tic-tac-toe that I programmed for the \'Game Development\' course at the time. Just a simple recreation of the game, following best object oriented practices, and also stylizing it, similar to the NORAD screens in the film WarGames (1983).',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/TicTacToe-Monogame',
      other: ''
    },
    markdown: 'tictactoe-2019',
    tags: [
      ProjectTag.college,
      ProjectTag.csharp,
    ]
  },
  {
    name: 'College Capstone Project - Tink.com',
    coverImg: 'assets/images/projects/capstone-2021.png',
    slug: 'college-capstone-2021',
    datePublished: new Date(2021, 3, 15),
    description: 'A full gaming/social-media web application we proposed and developed for our final cumulative project of our College program. I was mostly in charge of the front-end development, with my two colleagues performing as a back-end developer, and a project manager respectively. The project had won 2nd place for being intuitive and functionally stable, along with a good marketing proposal.',
    urls: {
      deployment: '',
      github: 'https://github.com/GrahamWhite/CapstoneProject',
      other: ''
    },
    markdown: 'capstone-2021',
    tags: [
      ProjectTag.college,
      ProjectTag.javascript,
      ProjectTag.react,
      ProjectTag.node,
      ProjectTag.expressjs,
    ]
  },
  {
    name: 'Sokoban',
    coverImg: 'assets/images/projects/sokoban-2019.png',
    slug: 'sokoban-2019',
    datePublished: new Date(2019, 9, 15),
    description: 'A follow along project, at the time, during my participation in the \'Game Development\' course in college. The game is simply programmed with C#, using the Monogame .NET library. It is actually 2 applications: A level editor, and the Game app itself.',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/Sokoban-Monogame',
      other: ''
    },
    markdown: 'sokoban-2019',
    tags: [
      ProjectTag.college,
      ProjectTag.csharp,
    ]
  },
  {
    name: 'Discord Mock UI',
    coverImg: 'assets/images/projects/discord-ui-mock-2020.png',
    slug: 'discord-ui-mock-2020',
    datePublished: new Date(2020, 3, 15),
    description: 'For the \'Mobile Programming 1\' course, where we learned to make hybrid web applications to be ported onto mobile via. Cordova. The idea was to simply remake the look and functionality of the popular Social Messaging App, Discord. This app ir ported to Cordova, with simple HTML, CSS, and Javascript. Plus also using jQuery itself and its mobile layout components provided with jQuery Mobile.',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/DiscordBootleg-Android-Hybrid-App',
      other: ''
    },
    markdown: 'discord-ui-2020',
    tags: [
      ProjectTag.college,
      ProjectTag.javascript,
    ]
  },
  {
    name: 'Dino Eater',
    coverImg: 'assets/images/projects/dino-eater-2019.png',
    slug: 'dino-eater-2019',
    datePublished: new Date(2019, 11, 15),
    description: 'Final project for the \'Game Development\' course I partook at the time. A simple game, where you move around, eating smaller dinos by moving into them, and avoind ones bigger than you. The more you eat, the more you grow. This game was made exclusively with the Monogame .NET library',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/DinoEater-Monogame',
      other: ''
    },
    markdown: 'dino-eater-2019',
    tags: [
      ProjectTag.college,
      ProjectTag.csharp,
    ]
  },
  {
    name: 'Food Ideas',
    coverImg: 'assets/images/projects/food-ideas-2020.png',
    slug: 'food-ideas-2020',
    datePublished: new Date(2020, 11, 15),
    description: 'A final project for the \'Emerging Technologies\' course at the time. Displays recipes from a public API, and saves your data simply to your local storage. Purely for practical and simple usage.',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/Food-Ideas',
      other: ''
    },
    markdown: 'food-ideas-2020',
    tags: [
      ProjectTag.college,
      ProjectTag.public_api,
      ProjectTag.javascript,
    ]
  },
  {
    name: 'Weather App',
    coverImg: 'assets/images/projects/weather-app-2023.png',
    slug: 'weather-app-2023',
    datePublished: new Date(2023, 3, 4),
    description: 'A simple weather app I began creating. Already utilizing OpenWeatherAPI, and Google Maps Geocoding so you can look by addresses or cities. It currently displays basic information. Further things to add would be: Address field autocomplete, display of more weather data, separate into tabs for minute, daily, hourly, current, etc.',
    urls: {
      deployment: 'https://angular-weather-app-sage.vercel.app/',
      github: 'https://github.com/tmills9208/angular15-weatherapp',
      other: ''
    },
    markdown: 'weather-app-2023',
    tags: [
      ProjectTag.angular,
      ProjectTag.public_api,
      ProjectTag.scss,
    ]
  },
]