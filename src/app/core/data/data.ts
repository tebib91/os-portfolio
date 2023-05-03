import { Icons } from '@core/models/icons';
import { CvFinder } from '@core/models/cv';
import { MenuBar } from '@core/models/menu';

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

export const menusBar: MenuBar[] = [
  {
    icon: 'assets/dock/bin.png',
    label: 'Finder',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
  },
  {
    icon: 'assets/dock/finder.png',
    label: 'File',
    submenu: ['Subitem 1', 'Subitem 2', 'Subitem 3'],
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
      " est un développeur fullstack JS Senior ayant à son actif +6 ans d'expérience.\n    C'est quelqu'un qui combine à la fois l'aspect technique et agile.\n    C'est quelqu'un d'ultra sharp au niveau de ses prestations et a toujours l'oreille au top management des équipes/projets IT.\n    Il a fait de belles missions chez SCNF Connect, SFR, Keyrus, KPEIZ & VYND.\n   Son professionnalisme et son savoir faire font de lui un candidat à rencontrer absolument.",
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
          title: 'Application centralization du systeme SNCF de transport ',
          postTitle: 'Consultant Fullstack JS',
          icon: 'assets/owner/sncf.svg',
          description:
            'la transformation numérique du groupe SNCF pour adresser le client dans l’ensemble de son parcours de mobilité et ses interactions avec SNCFla',
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
          title: 'Application web de Streaming RMC, BFM PLAY et SFR TV',
          postTitle: 'Consultant Fullstack Angular 13/ NodeJS',
          icon: 'https://static.s-sfr.fr/media/hs-logo.svg',
          link: 'https://rmcbfmplay.com',
          backgroundImg:
            'https://alloforfait.fr/wp-content/uploads/2021/06/rmc-bfm-play-300x200.jpg.webp',

          description:
            "Dans le cadre de sa politique de mettre en place une plateforme d'IPTV Streaming Apps, SFR a mis en place pour ses clients plusieurs applications de streaming\ntelsque : RMC, BFM PLAY SFR TV + Projet de Migration du CMS BEAST des\n  contenus TV de SFR et des sites web www.rmcsport.tv, www.bfmrmcplay.com\n  www.tv.sfr.fr.\n  Le projet repose essentiellement sur les rubriques suivantes :\n  *Rubrique des chaines en LIVE\n  *Rubrique des chaines en LIVE REPLAY\n  *Rubrique VOD (films, séries,...)\n*Rubrique GUIDE",
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
          title: 'Site web de gestion de service client orange',
          postTitle: 'Consultant Fullstack Angular 10/ NodeJS',
          icon: 'https://c.woopic.com/logo-orange.png',
          link: 'https://www.orange.fr/portail',
          backgroundImg:
            'https://i0.wp.com/www.mobileworldlive.com/wp-content/uploads/2019/10/3-1.jpg?fit=500%2C333&ssl=1',

          description:
            'Conception et développement d’un site web destiné aux clients Orange\n      regroupe les différents services en ligne tel que la gestion des contrats, Suivi de\n      consommation, consultation et paiement des factures, réclamations, assistance,\n      etc.',
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
            'Projet d’application web de gestion et d’analyse des réseaux sociaux',
          postTitle: 'Consultant Fullstack Angular 8/ NodeJS',
          icon: 'assets/owner/kpeiz.webp',
          link: 'https://kpeiz.digital',
          backgroundImg: 'assets/owner/kpeiz.png',
          description:
            'Développement d’une application dédiée pour le marketing digital qui permet\n      d’analyser et d’afficher les indicateurs de performance KPIs des Brand Insights\n      (Pages Facebook/Instagram) et des Market Insights (Secteurs d’activités)\n      suivant trois volets :\n      Audience : Nombre total des followers, Variation des fans...\n      Comportement des followers : Réaction, Interaction ...\n      Media : nombre des Interactions / heure, Nombre de postes / jour',
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
          name: 'VYND',
          title: "Application Bourse d'Alcool",
          postTitle: 'Développeur Front-end Angular',
          icon: 'assets/owner/vynd-logo.webp',
          link: 'https://vynd.com',
          backgroundImg:
            'https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.6435-9/190022057_1627723174085266_6217815876299948795_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=bOJttNLHvcAAX8lnyEY&_nc_oc=AQms47MF2Gn4toseAZmCznemcDUl1-SJrjiVdvJQCF2F9XQ2qQWQVvR60nN7iS-qeWw&_nc_ht=scontent.fcdg2-1.fna&oh=00_AfAzsBT_ffitp1cn_q9hGdKl7-2DANDtSioQPRnvCHRUnQ&oe=641EE1F4',

          description:
            'Développement d’une application web qui permet d’analyser et gérer les\n   réservations, les évènements aussi que le paiement en ligne.',
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
          name: 'VYND',
          title: 'Application Web de Gestion des Services des Restaurants',
          postTitle: 'Développeur Front-end Angular',
          icon: 'assets/owner/vynd-logo.png',
          link: 'https://vynd.com',
          description:
            'Développement d’une application web qui permet d’analyser et gérer les\n réservations, les évènements aussi que le paiement en ligne.',
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
          title: 'Application de gestion RH',
          postTitle: 'Développeur Web PHP',
          icon: 'https://auna.com.tn/wp-content/uploads/2020/06/logo-auna.png',
          link: 'https://auna.com.tn',
          backgroundImg:
            'https://auna.com.tn/wp-content/uploads/2018/08/col-bg-1.jpg',
          description:
            "Développement d’une application web qui permet de gerer l'affectation des classes aussi que la gestion des abscences.",
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
