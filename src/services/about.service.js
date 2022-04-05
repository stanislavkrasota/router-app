import { URL } from "../constants/en";

export default class AboutService {
    static getAllUsers() {
        return fetch(`${URL}users/`)
            .then(response => response.json());
    }
}
