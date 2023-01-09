// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GA_TRACKING_ID: 'G-HQ721RPGYS',
  appVersion: require('../../package.json').version + '-dev',
  firebaseConfig: {
    apiKey: 'AIzaSyCopQRshcAhfs2RTNGtUcoHWXS_KurAqNM',
    authDomain: 'portfolio-6725b.firebaseapp.com',
    projectId: 'portfolio-6725b',
    storageBucket: 'portfolio-6725b.appspot.com',
    messagingSenderId: '787645894829',
    appId: '1:787645894829:web:d2f447a9d197caa4bd7624',
    measurementId: 'G-HTHYBNDKTJ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
