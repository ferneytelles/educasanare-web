import { API_URL } from 'src/environments/environment';

export class PageEndPoint {
    static projectInfo = `${API_URL}menulanguage/menu-principal`;
    static pages = `${API_URL}page/?project={}`;
    static page = `${API_URL}pagelanguage/?pg={}&language={}`;
}
