import { API_URL } from 'src/environments/environment';

export class SessionEndPoint {
    static resetPassword = `${API_URL}reset-password/`;
    static confirmPassword = `${API_URL}reset-password/confirm/`;
    static dataUser = `${API_URL}user/is_logged/`;
}
