import { CvFinder } from '@core/models/cv';
import { Icons } from '@core/models/icons';
import { MenuBar, MenuContext } from '@core/models/menu';

export const iconsDock: Icons[] = [
  { icon: 'assets/dock/finder.png', label: 'Finder', id: 'FinderComponent' },
  { icon: 'assets/dock/notes.png', label: 'Notes', id: 'FinderComponent' },
  { icon: 'assets/dock/maps.png', label: 'Maps', id: 'MapsComponent' },
  {
    icon: 'assets/dock/calculator.png',
    label: 'Calculator',
    id: 'CalculatorComponent',
  },
  { icon: 'assets/dock/mail.png', label: 'Mail', id: 'FinderComponent' },
  { icon: 'assets/dock/music.png', label: 'Music', id: 'FinderComponent' },
  {
    icon: 'assets/dock/preferences.png',
    label: 'System Preferences',
    id: 'FinderComponent',
  },
  { icon: 'assets/dock/bin.png', label: 'Bin', id: 'FinderComponent' },
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
      'Ahmed Tabib is a Senior Fullstack JS developer with over 7 years of experience, specializing in React, NodeJS, and AWS services. He combines technical expertise with agile methodologies, working on key projects in transportation, streaming, and digital marketing. Ahmed has led and contributed to successful projects for SNCF Connect, SFR, Orange, KPEIZ, and VYND, delivering high-performance applications that meet complex business needs.',
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
      link: 'https://nodejs.org/en',
    },
    {
      name: 'MongoDb',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'Express',
      icon: 'https://img.icons8.com/color/48/000000/express.png',
      link: 'https://expressjs.com/',
    },
    {
      name: 'Git',
      icon: 'https://img.icons8.com/color/48/000000/git.png',
      link: 'https://git-scm.com/',
    },
    {
      name: 'Rxjs',
      icon: 'assets/owner/rxjs.webp',
      link: 'https://rxjs.dev/',
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
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'Sass',
      icon: 'https://sass-lang.com/assets/img/logos/logo.svg',
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
  ],
  experiences: [
    {
      name: 'SNCF Connect',
      projects: [
        {
          name: 'LIVE',
          title: 'Centralization and Real-Time Transport Information System',
          postTitle: 'Consultant Fullstack React / NodeJS / AWS',
          icon: 'assets/owner/sncf.svg',
          description:
            'Provides real-time information on transportation, centralizing data about train schedules, delays, and platform assignments. It enables seamless communication between agents and passengers.',
          tasks: [
            'Developed API/lambdas using TypeScript for processing transport data',
            'Refactored Java legacy code into TypeScript with Jest for integration tests',
            'Fetched data from AWS S3 and stored it in DynamoDB',
            'Monitored system components using AWS CloudWatch and DataDog',
            'Implemented Robot Framework for automated testing with Selenium',
            'Developed front-end modules using ReactJs for Live IHM, AFL, and TFT',
            'Utilized AWS services like Lambda, DynamoDB, and Step Function to enhance system architecture',
            'Followed Domain-Driven Design (DDD) to build an efficient and maintainable codebase',
          ],
          technos: [
            {
              name: 'Amazon AWS',
              icon: 'https://img.icons8.com/color/48/000000/amazon.png',
              link: 'https://aws.amazon.com/',
            },
            {
              name: 'ReactJs',
              icon: 'https://img.icons8.com/officel/48/000000/react.png',
              link: 'https://reactjs.org/',
            },
            {
              name: 'TypeScript',
              icon: 'https://img.icons8.com/color/48/000000/typescript.png',
              link: 'https://www.typescriptlang.org/',
            },
            {
              name: 'AWS Lambda',
              icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',
              link: 'https://aws.amazon.com/lambda/',
            },
            {
              name: 'DynamoDB',
              icon: 'https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000',
              link: 'https://aws.amazon.com/dynamodb/',
            },
            {
              name: 'CloudWatch',
              icon: 'https://img.icons8.com/color/48/000000/amazon-web-services.png',
              link: 'https://aws.amazon.com/cloudwatch/',
            },
            {
              name: 'Jenkins',
              icon: 'https://img.icons8.com/color/48/000000/jenkins.png',
              link: 'https://www.jenkins.io/',
            },
            {
              name: 'RobotFramework',
              icon: 'https://img.icons8.com/color/48/000000/robot.png',
              link: 'https://robotframework.org/',
            },
            {
              name: 'SonarQube',
              icon: 'https://img.icons8.com/color/48/000000/sonarqube.png',
              link: 'https://www.sonarqube.org/',
            },
            {
              name: 'OctoPerf',
              icon: 'https://img.icons8.com/color/48/000000/performance.png',
              link: 'https://octoperf.com/',
            },
          ],
          backgroundImg:
            'https://cdn.lesnumeriques.com/news/17/175503/a98ca522-sncf-connect.jpeg',
        },
      ],
    },
    {
      name: 'SFR',
      projects: [
        {
          name: 'RMC, BFM PLAY, and SFR TV Streaming Web Application',
          title: 'IPTV Streaming Platform Development',
          postTitle: 'Consultant Fullstack Angular 13 / NodeJS',
          icon: 'https://static.s-sfr.fr/media/hs-logo.svg',
          description:
            'Developed an IPTV streaming platform to provide SFR customers with live channels, VOD, and replay services. The project covered a wide array of features, including TV guides, live TV, and VOD streaming.',
          tasks: [
            'Set up project architecture and design patterns for IPTV streaming services',
            'Implemented modules for the TV guide, live channels, and replay functionality',
            'Optimized SEO using Angular Universal SSR',
            'Integrated analytical tools like Médiamétrie and AT Internet for traffic measurement',
            'Implemented front-end using Angular 13 with a focus on UX/UI design standards',
            'Developed NodeJs backend services to enhance performance and data reliability',
            'Managed database queries and access to MongoDB to ensure data consistency',
            'Utilized NX tools for managing the monorepository structure of the project',
          ],
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: 'https://nodejs.org/en',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: 'https://www.mongodb.com/',
            },
            {
              name: 'Express',
              icon: 'https://img.icons8.com/color/48/000000/express.png',
              link: 'https://expressjs.com/',
            },
            {
              name: 'Git',
              icon: 'https://img.icons8.com/color/48/000000/git.png',
              link: 'https://git-scm.com/',
            },
            {
              name: 'RxJs',
              icon: 'https://img.icons8.com/color/48/000000/react-native.png',
              link: 'https://rxjs.dev/',
            },
            {
              name: 'NX tools',
              icon: 'https://nx.dev/nx-logo.png',
              link: 'https://nx.dev/',
            },
            {
              name: 'Angular Universal',
              icon: 'https://angular.io/assets/images/logos/angular/angular.png',
              link: 'https://angular.io/guide/universal',
            },
          ],
          backgroundImg:
            'https://alloforfait.fr/wp-content/uploads/2021/06/rmc-bfm-play-300x200.jpg.webp',
        },
      ],
    },
    {
      name: 'Orange',
      projects: [
        {
          name: 'Customer Service Management Web Application',
          title: 'Online Service Management Platform for Orange',
          postTitle: 'Consultant Fullstack Angular 10 / NodeJS',
          icon: 'https://c.woopic.com/logo-orange.png',
          description:
            'Developed a comprehensive customer service management platform to allow Orange users to manage their accounts, check consumption, pay bills, and access customer support.',
          tasks: [
            'Led front-end architecture and built key modules using Angular 10',
            'Developed NodeJs APIs to interact with back-end services',
            'Configured Gitlab CI/CD pipelines for continuous integration and testing',
            'Integrated Docker for containerization and streamlined deployments',
            'Conducted unit and integration testing to ensure quality delivery',
            'Documented technical details in Confluence for knowledge sharing',
          ],
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: 'https://nodejs.org/en',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: 'https://www.mongodb.com/',
            },
            {
              name: 'Docker',
              icon: 'https://img.icons8.com/color/48/000000/docker.png',
              link: 'https://www.docker.com/',
            },
            {
              name: 'Kubernetes',
              icon: 'https://img.icons8.com/color/48/000000/kubernetes.png',
              link: 'https://kubernetes.io/',
            },
            {
              name: 'GitLab CI/CD',
              icon: 'https://img.icons8.com/color/48/000000/gitlab.png',
              link: 'https://about.gitlab.com/',
            },
          ],
          backgroundImg:
            'https://i0.wp.com/www.mobileworldlive.com/wp-content/uploads/2019/10/3-1.jpg?fit=500%2C333&ssl=1',
        },
      ],
    },
    {
      name: 'KPEIZ',
      projects: [
        {
          name: 'Social Media Management Web Application',
          title: 'Marketing Analytics Platform Development',
          postTitle: 'Fullstack Angular 8 / NodeJS Consultant',
          icon: 'assets/owner/kpeiz.webp',
          description:
            'Developed a platform dedicated to analyzing and displaying key performance indicators (KPIs) of social media accounts like Facebook and Instagram for marketing purposes.',
          tasks: [
            'Developed user management, tagging, and billing modules',
            'Implemented REST APIs for secure communication with social media platforms (Graph API)',
            'Integrated payment module using Stripe for billing functionality',
          ],
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: 'https://nodejs.org/',
            },
            {
              name: 'MongoDb',
              icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
              link: 'https://www.mongodb.com/',
            },
            {
              name: 'Stripe',
              icon: 'https://img.icons8.com/color/48/000000/stripe.png',
              link: 'https://stripe.com/',
            },
            {
              name: 'Graph API',
              icon: 'https://img.icons8.com/color/48/000000/facebook.png',
              link: 'https://developers.facebook.com/docs/graph-api',
            },
          ],
          backgroundImg: 'assets/owner/kpeiz.png',
        },
      ],
    },
    {
      name: 'VYND',
      projects: [
        {
          name: 'Alcohol Exchange Application',
          title: 'Frontend Developer for Real-Time Pricing App',
          postTitle: 'Angular Front-End Developer',
          description:
            'Developed a web application for the Alcohol Exchange, where beer prices change dynamically based on real-time sales data.',
          icon: 'assets/owner/vynd-logo.webp',
          tasks: [
            'Developed the front-end using Angular 6 and ElectronJS for a real-time cashier application',
            'Integrated QZ Tray for ticket printing functionality',
            'Conducted performance tests for real-time synchronization across applications',
          ],
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'ElectronJS',
              icon: 'https://img.icons8.com/color/48/000000/electron.png',
              link: 'https://www.electronjs.org/',
            },
            {
              name: 'WebSockets',
              icon: 'https://img.icons8.com/color/48/000000/websocket.png',
              link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
            },
            {
              name: 'QZ Tray',
              icon: 'https://qz.io/images/qz-icon.png',
              link: 'https://qz.io/',
            },
          ],
          backgroundImg: 'assets/owner/vyndbackground.jpg',
        },
      ],
    },
    {
      name: 'AUNA',
      projects: [
        {
          name: 'Digital Healthcare Platform',
          title: 'Fullstack Developer for Healthcare Application',
          postTitle: 'Fullstack Developer',
          description:
            'Developed a platform for managing healthcare services, allowing users to schedule appointments, manage prescriptions, and access telemedicine services.',
          icon: 'assets/owner/auna_logo.jpg',
          tasks: [
            'Developed front-end using Angular 10 and integrated with backend services using NodeJS',
            'Created REST APIs for managing appointments and user data',
            'Implemented responsive design for mobile and desktop versions',
          ],
          technos: [
            {
              name: 'Angular',
              icon: 'https://img.icons8.com/color/48/000000/angularjs.png',
              link: 'https://angular.io/',
            },
            {
              name: 'NodeJs',
              icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
              link: 'https://nodejs.org/',
            },
            {
              name: 'Responsive Design',
              icon: 'https://img.icons8.com/color/48/000000/responsive.png',
              link: 'https://www.w3schools.com/css/css_rwd_intro.asp',
            },
          ],
          backgroundImg: 'assets/owner/auna.jpeg',
        },
      ],
    },
  ],
};
