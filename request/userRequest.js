class UserRequest {

    static createUserBody() {
        const body = {
            "id": 123,
            "username": "qauser",
            "firstName": "QA",
            "lastName": "User",
            "email": "qa@qa.com",
            "password": "QWERTY123",
            "phone": "905555555555",
            "userStatus": 1
        };
        return body;
    }

    static createUserHeaders() {
        const header = {
            "Content-Type": "application/json",
            "accept": "application/json"
        };
        return header;
    }

    static getUser() {
        return "qauser";
    }
}
module.exports = UserRequest;