// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/** constante que hace referencia al Dominio que sera utilizado en la aplicación */
 export const BASE_URL = 'https://educasanareadmin.realityapp.co/';
// export const BASE_URL = 'http://192.168.1.144:3000/';

 export const URL_MEDIA = 'https://cato-cms-bucket.s3.amazonaws.com/media/';
  export const URL_CDN = 'https://educasanare.gumlet.io/';

/** llave constante que sera utilizada para las peticiones de tipo autenticación, toma como base a **BASE_URL** */
  export const API_AUTH = `${BASE_URL}`;

/** variable constante que servira como base para los **request** o **peticiones** que se hagan al backend de la aplicación */
  export const API_URL = `${BASE_URL}api/`;


export const environment = {
  production: true
};
