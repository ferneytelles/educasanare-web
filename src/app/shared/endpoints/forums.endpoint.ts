import { API_URL } from 'src/environments/environment';

export class ForumsEndPoint {
    static categories = `${API_URL}category/?language={}`;
    static category = `${API_URL}category/?slug={}&language={}`;
    static createForum = `${API_URL}forums/`;
    static deleteForum = `${API_URL}forums/{}/`;
    static forumsByCAtegory = `${API_URL}forum/?category={}&page={}&order={}`;
    static forum = `${API_URL}forum/?slug={}`;
}
