const chakram = require('chakram'),
    expect = chakram.expect;
const params = require('../data');
const UserRequest = require('../request/userRequest');
const UserResponse = require('../response/userResponse');

describe("User Tests", function () {

    it("TC0001 /v2/user", function () {
        const response = chakram.post(params.baseUrl + "/v2/user", UserRequest.createUserBody(), UserRequest.createUserHeaders());
        expect(response).to.have.status(200);
        expect(response).to.have.json(UserResponse.createUserResult());
        return chakram.wait();
    });

    it("TC0002 /v2/user/{userName}", function () {
        const response = chakram.get(params.baseUrl + "/v2/user/" + UserRequest.getUser());
        expect(response).to.have.status(200);
        expect(response).to.have.json(UserResponse.getUserResult());
        return chakram.wait();
    });
});