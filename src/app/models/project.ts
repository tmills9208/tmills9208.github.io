export enum ProjectTag {
  // Main Techs
  dotNet = '.NET Framework',
  dotNetCore = '.NET Core',
  rust = "Rust",
  csharp = "C#",
  unity = "Unity Engine",

  javascript = 'Javascript',
  angular = 'Angular 8+',
  vue = 'Vue',
  react = 'React.js',
  node = 'Node.js',
  
  // More Techs
  expressjs = 'Express.js',
  // API's
  rest_api = 'REST API',
  public_api = 'Public API',
  // CSS
  scss = "SCSS",
  tailwind = "Tailwind CSS",
  bootstrap = 'Bootstrap CSS',
  // Misc
  college = "College",
}

export interface ProjectData {
  name: string,
  coverImg: string,
  slug: string,
  datePublished: Date,
  description: string,
  urls: {
    github?: string,
    deployment?: string,
    other?: string
  },
  markdown: string,
  tags: ProjectTag[],
}

export const PROJECTS: ProjectData[] = [
  {
    name: 'Food Ideas',
    coverImg: '/assets/images/projects/food-ideas-2020.png',
    slug: 'food-ideas-2020',
    datePublished: new Date(2020, 12, 15),
    description: 'A simple weather app I began creating. Already utilizing OpenWeatherAPI, and Google Maps Geocoding so you can look by addresses or cities. It currently displays basic information. Further things to add would be: Address field autocomplete, display of more weather data, separate into tabs for minute, daily, hourly, current, etc.',
    urls: {
      deployment: '',
      github: 'https://github.com/tmills9208/angular15-weatherapp',
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
    coverImg: '/assets/images/projects/weather-app-2023.png',
    slug: 'weather-app-2023',
    datePublished: new Date(2023, 4, 4),
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