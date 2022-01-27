import { API_URL } from 'src/environments/environment';

export class PostEndPoint {
    static post = `${API_URL}postlanguage/?slug={}&language={}`;
    static postSearch = `${API_URL}postlanguagesearch/?search={}&language={}&page={}`;
    static postsOfSection = `${API_URL}postlanguage/?section={}&language={}&page={}`;
    static postsOfSectionByOrder = `${API_URL}postlanguage/?section={}&language={}&page={}&order={}`;
    static postsOfSectionByDate = `${API_URL}postlanguage/?section={}&language={}&page={}&date={}`;
}
