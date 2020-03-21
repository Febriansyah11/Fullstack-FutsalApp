import api from "../api/api";

class AuthService {
    login(credentials) {
        return api.post('/login', credentials);
    }

    getUserInfo() {
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getUserId() {
        return JSON.parse(localStorage.getItem("userId"));
    }

    getUserRole(){
        return JSON.parse(localStorage.getItem("userRole"))
    }

    getName() {
        return JSON.parse(localStorage.getItem("userName"))
    }
}

    export default new AuthService();
