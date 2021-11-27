// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/** constante que hace referencia al Dominio que sera utilizado en la aplicación */
export const BASE_URL = 'http://edu.casanare.gov.co/';

export const URL_MEDIA = 'https://cato-cms-bucket.s3.amazonaws.com/media/';
export const URL_CDN = 'https://educasanare.gumlet.io/';

/** llave constante que sera utilizada para las peticiones de tipo autenticación, toma como base a **BASE_URL** */
export const API_AUTH = `${BASE_URL}`;

/** variable constante que servira como base para los **request** o **peticiones** que se hagan al backend de la aplicación */
export const API_URL = `${BASE_URL}api/`;


export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
