import { API_URL } from 'src/environments/environment';

export class PageEndPoint {
    static pages = `${API_URL}page`;
    static page = `${API_URL}pagelanguage/?page={}&language={}`;
}
