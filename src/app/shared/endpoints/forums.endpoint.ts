import { API_URL } from 'src/environments/environment';

export class ForumsEndPoint {
    static categories = `${API_URL}category/`;
    static category = `${API_URL}category/?slug={}`;
    static createForum = `${API_URL}forums/`;
    static forum = `${API_URL}forum/?slug={}`;
}
