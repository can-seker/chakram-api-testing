const chakram = require('chakram'),
    expect = chakram.expect;

class UserResponse {

    static createUserResult() {
        const result = {
            "code": 200,
            "type": "unknown",
            "message": "123"
          };
        return result;
    }

    static getUserResult() {
        return {
            "id": 123,
            "username": "qauser",
            "firstName": "QA",
            "lastName": "User",
            "email": "qa@qa.com",
            "password": "QWERTY123",
            "phone": "905555555555",
            "userStatus": 1
          };
    }
}
module.exports = UserResponse;