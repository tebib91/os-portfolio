import { Icons } from '@core/models/icons';
import { CvFinder } from '@core/models/cv';
import { MenuBar, MenuContext } from '@core/models/menu';

export const iconsDock: Icons[] = [
  { icon: 'finder.png', label: 'Finder', component: 'FinderComponent' },
  { icon: 'notes.png', label: 'Notes', component: 'FinderComponent' },
  { icon: 'maps.png', label: 'Maps', component: 'MapsComponent' },
  {
    icon: 'calculator.png',
    label: 'Calculator',
    component: 'CalculatorComponent',
  },
  { icon: 'mail.png', label: 'Mail', component: 'FinderComponent' },
  { icon: 'music.png', label: 'Music', component: 'FinderComponent' },
  {
    icon: 'preferences.png',
    label: 'System Preferences',
    component: 'FinderComponent',
  },
  { icon: 'bin.png', label: 'Bin', component: 'FinderComponent' },
];
export const menuContext: MenuContext[] = [
  {
    label: 'Change Background',
    action: 'CB',
  },
  {
    label: 'Create File',
    action: 'CF',
  },
];
export const menusBar: MenuBar[] = [
  {
    icon: 'assets/dock/bin.png',
    label: 'Finder',
    submenu: ['New Finder Window', 'New Folder', 'New Smart Folder'],
  },
  {
    icon: 'assets/dock/finder.png',
    label: 'File',
    submenu: ['New File', 'Open File', 'Propertie File'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Edit',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'View',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Go',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Window',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/mail.png',
    label: 'Help',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
];

export const me: CvFinder = {
  presentation: {
    name: 'Ahmed Tabib',
    description:
      'Ahmed Tabib is a Senior fullstack JS developer with over 6 years of experience.\n    He is someone who combines both the technical and agile aspects.\n    He is ultra sharp in his performances and always has an ear for the top management of IT teams/projects.\n    He has had great missions at SCNF Connect, SFR, Keyrus, KPEIZ & VYND.\n   His professionalism and expertise make him a candidate to absolutely meet.',
    avatarUrl: 'assets/owner/me.webp',
  },
  technologies: [
    {
      name: 'React',
      icon: 'https://img.icons8.com/officel/48/000000/react.png',
      link: 'https://reactjs.org/',
    },
    {
      name: 'Angular',
      icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
      link: 'https://angular.io/',
    },
    {
      name: 'NodeJs',
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
      link: '',
    },
    {
      name: 'MongoDb',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
      link: '',
    },
    {
      name: 'Express',
      icon: 'https://img.icons8.com/color/48/000000/express.png',
      link: '',
    },
    {
      name: 'Git',
      icon: 'https://img.icons8.com/color/48/000000/git.png',
      link: 'https://git-scm.com/',
    },
    {
      name: 'Rxjs',
      icon: 'assets/owner/rxjs.webp',
      link: 'https://www.atlassian.com/',
    },
    {
      name: 'Docker',
      icon: 'https://img.icons8.com/color/48/000000/docker.png',
      link: 'https://www.docker.com/',
    },
    {
      name: 'Google Cloud',
      icon: 'https://img.icons8.com/color/48/000000/google-cloud-platform.png',
      link: 'https://cloud.google.com/',
    },
    {
      name: 'Amazon AWS',
      icon: 'https://img.icons8.com/color/48/000000/amazon.png',
      link: 'https://aws.amazon.com/',
    },
    {
      name: 'Jira',
      icon: 'https://img.icons8.com/color/48/000000/jira.png',
      link: 'https://www.atlassian.com/',
    },
    {
      name: 'Css3',
      icon: 'https://img.icons8.com/color/48/000000/css3.png',
      link: 'https://www.atlassian.com/',
    },
    {
      name: 'Sass',
      icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      link: 'https://sass-lang.com/',
    },
    {
      name: 'HTML5',
      icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
      link: 'https://dev.w3.org/html5/html-author/',
    },
    {
      name: 'Electron JS',
      icon: 'assets/owner/electronjs.webp',
      link: 'https://www.electronjs.org/',
    },
    {
      name: 'Akita',
      icon: 'https://img.icons8.com/color/48/000000/jira.png',
      link: 'https://www.atlassian.com/',
    },
  ],

  experiences: [
    {
      name: 'SNCF Connect & Tech',
      projects: [
        {
          name: 'SNCF Connect & Tech',
          title: 'Centralization application of the SNCF transport system',
          postTitle: 'Fullstack JS Consultant',
          icon: 'assets/owner/sncf.svg',
          description:
            'The digital transformation of the SNCF group to address the customer in all its mobility journey and its interactions with SNCF',
          link: '',
          backgroundImg:
            'https://cdn.lesnumeriques.com/news/17/175503/a98ca522-sncf-connect.jpeg',
          technos: [
            {
              name: 'Amazon AWS',
              icon: 'https://img.icons8.com/color/48/000000/amazon.png',
              link: 'https://aws.amazon.com/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: '',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
    {
      name: 'SFR',
      projects: [
        {
          name: 'SFR',
          title: 'RMC, BFM PLAY and SFR TV Streaming web application',
          postTitle: 'Fullstack Angular 13/ NodeJS Consultant',
          icon: 'https://static.s-sfr.fr/media/hs-logo.svg',
          link: 'https://rmcbfmplay.com',
          backgroundImg:
            'https://alloforfait.fr/wp-content/uploads/2021/06/rmc-bfm-play-300x200.jpg.webp',
          description:
            'As part of its policy to set up an IPTV Streaming Apps platform, SFR has set up several streaming applications for its customers such as: RMC, BFM PLAY SFR TV + Project to migrate the BEAST CMS of SFR TV content and www.rmcsport.tv, www.bfmrmcplay.com www.tv.sfr.fr websites. The project is mainly based on the following sections:\n  *LIVE channel section\n  *LIVE REPLAY channel section\n  *VOD section (movies, series,...)\n*GUIDE section',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: '',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: '',
            },
            {
              name: 'Express',
              icon: 'https://img.icons8.com/color/48/000000/express.png',
              link: '',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
    {
      name: 'ORANGE',
      projects: [
        {
          name: 'ORANGE',
          title: 'Website for managing Orange customer service',
          postTitle: 'Fullstack Angular 10/ NodeJS Consultant',
          icon: 'https://c.woopic.com/logo-orange.png',
          link: 'https://www.orange.fr/portail',
          backgroundImg:
            'https://i0.wp.com/www.mobileworldlive.com/wp-content/uploads/2019/10/3-1.jpg?fit=500%2C333&ssl=1',
          description:
            'Design and development of a website dedicated to Orange customers\n      brings together various online services such as contract management, Consumption tracking, invoice consultation and payment, complaints, assistance,\n      etc.',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: '',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: '',
            },
            {
              name: 'Express',
              icon: 'https://img.icons8.com/color/48/000000/express.png',
              link: '',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
    {
      name: 'KPEIZ',
      projects: [
        {
          name: 'KPEIZ',
          title:
            'Web application project for managing and analyzing social networks',
          postTitle: 'Fullstack Angular 8/NodeJS Consultant',
          icon: 'assets/owner/kpeiz.webp',
          link: 'https://kpeiz.digital',
          backgroundImg: 'assets/owner/kpeiz.png',
          description:
            'Developing an application dedicated to digital marketing that allows\n      to analyze and display KPIs of Brand Insights\n      (Facebook/Instagram Pages) and Market Insights (Activity Sectors)\n      following three aspects:\n      Audience: Total number of followers, Variation of fans...\n      Followers Behavior: Reaction, Interaction ...\n      Media: number of Interactions / hour, Number of posts / day',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: '',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: '',
            },
            {
              name: 'Express',
              icon: 'https://img.icons8.com/color/48/000000/express.png',
              link: '',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
    {
      name: 'VYND',
      projects: [
        {
          name: 'VYND-Alcohol Exchange',
          title: 'Alcohol Exchange Application',
          postTitle: 'Angular Front-end Developer',
          icon: 'assets/owner/vynd-logo.webp',
          link: 'https://vynd.com',
          backgroundImg: 'assets/owner/vyndbackground.jpg',
          description:
            'Developing a web application that allows to analyze and manage\n   reservations, events as well as online payment.',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },

            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
        {
          name: 'VYND-Web Application',
          title: 'Web Application for Restaurant Services Management',
          postTitle: 'Angular Front-end Developer',
          icon: 'assets/owner/vynd-logo.webp',
          link: 'https://vynd.com',
          description:
            'Developing a web application that allows to analyze and manage\n reservations, events as well as online payment.',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: '',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: '',
            },
            {
              name: 'Express',
              icon: 'https://img.icons8.com/color/48/000000/express.png',
              link: '',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
    {
      name: 'AUNA',
      projects: [
        {
          name: 'AUNA',
          title: 'Mobile and Web application project for digital healthcare',
          postTitle: 'Fullstack Developer',
          icon: 'assets/owner/auna_logo.jpg',
          link: 'https://auna.com',
          backgroundImg: 'assets/owner/auna.jpeg',
          description:
            'Developing a digital healthcare platform aimed at providing users\n      with a more convenient, streamlined, and personalized healthcare\n      experience. This includes appointment scheduling, telemedicine,\n      prescription management, and personal health records.',
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },

            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
          ],
        },
      ],
    },
  ],
};
