export default class StorageService {
    static getLSItem(key, parse) {
        return parse
            ? JSON.parse(localStorage.getItem(key))
            : localStorage.getItem(key)
    }

    static setLSItem(key, value, convert) {
        convert
            ? localStorage.setItem(key, JSON.stringify(value))
            : localStorage.setItem(key, value);
    }

    static removeLSItem(key) {
        localStorage.removeItem(key);
    }
}
