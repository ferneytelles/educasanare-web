import { API_AUTH } from 'src/environments/environment';

/**
 * Authenticate EndPoint
 * Los endpoints son las URLs de una API que responden a una petición.
 * En este caso la petición está relacionada con la autenticación de los usuarios
 */
export class AuthenticateEndpoint {
    /**
     * Endpoint que apunta al token de autenticación
     */
    static authenticate = `${API_AUTH}api/token/`;
    static refresh = `${API_AUTH}api/token/refresh/`;
}
