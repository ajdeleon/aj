export const projectData = [
  {
    url: 'http://ajdev.xyz',
    codeUrl: 'https://github.com/ajdeleon/indego_project',
    imageSource: '/static/indego.png',
    caption: 'Indego Bike Map',
    description:
      "Inspired by a coding challenge from local Philadelphia company P'unk Ave, this is a full stack project. I used node and mongodb on the backend to pull and store data from the official Indego json endpoint. This data is then piped into a javascript frontend that makes use of the Google Maps API. The individual services (node/express, mongodb, nginx) are linked together using docker-compose.",
    tags: ['docker', 'javascript', 'mongodb', 'google maps api'],
  },
  {
    url: 'https://www.showcasephilly.com',
    codeUrl: 'https://github.com/ajdeleon/Free-Code-Camp-Philly-Showcase',
    imageSource: '/static/showcase.png',
    caption: 'Freecodecamp Philly Member Showcase',
    description:
      'This is an open source project to which I contribute. I help organize a Freecodecamp meetup and one of the projects that has come out of that meetup is this website that serves to showcase all of the great web dev projects people are working on. ',
    tags: ['react', 'semantic-ui'],
  },
  {
    url: 'http://phitcalendar.com',
    codeUrl: 'https://github.com/ajdeleon/phit_calendar',
    imageSource: '/static/phitcalendar.png',
    caption: 'Accessible Phit Calendar',
    description:
      'The calendar for the theater where I do Improv comedy is notoriously inaccessible and complete unresponsive for mobile. This project uses a node server to collect and parse html data, and then a React frontend renders it in a much more readable way.',
    tags: ['react', 'nodejs', 'docker', 'nginx', 'cloud hosting', 'tachyons'],
  },
  {
    url: 'https://amexcomedy.com',
    codeUrl: 'https://github.com/ajdeleon/amex_site',
    imageSource: '/static/amex.png',
    caption: 'NYTE Shift Comedy Website',
    description:
      'This is the website for my improv team NYTE Shift. We very recently had to change our name due to a cease and desist letter and this site will soon be updated to reflect the changes. This was hosted using Netlify.',
    tags: ['react', 'cloud hosting'],
  },
  {
    url: 'http://ajdev.xyz',
    codeUrl: 'https://github.com/ajdeleon/streams',
    imageSource: '/static/streams.png',
    caption: 'Streams',
    description:
      'This is a React/Redux app that allows users to sign in with Google OAuth and stream video using a client like OBS',
    tags: ['react', 'redux', 'rtmp', 'cloud hosting'],
  },
  {
    url: 'https://github.com/ajdeleon/gzclp',
    codeUrl: 'https://github.com/ajdeleon/gzclp',
    imageSource: 'https://via.placeholder.com/200x250.png',
    caption: 'gzclp',
    description:
      'This is a full stack project to keep track of the somewhat popular workout method gzclp. I chose to user docker-compose because it makes it so easy to orchestrate multiple services',
    tags: ['react', 'postgresql', 'nodejs', 'docker', 'tachyons'],
  },
]

const allTags = projectData.reduce((acc, cur) => {
  return [...acc, ...cur.tags]
}, [])

export const uniqueTags = ['all', ...new Set(allTags)]
// ...new Set will return only unique values from array. Easier than a .filter
