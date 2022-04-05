import { HEADERS, URL } from "../constants/en";

export default class HomeService {
    static doSignIn(credentials) {
        const options = { method: 'POST', body: JSON.stringify(credentials), headers: HEADERS };
        return fetch(`${URL}posts/`, options)
            .then(response => response.json())
    }
}
