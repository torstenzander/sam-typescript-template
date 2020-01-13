var chakram = require('chakram'),
    expect = chakram.expect;


describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function () {
        this.timeout(3000);
        chakram.get("http://127.0.0.1/hello").then(function (helloResponse) {
            expect(helloResponse).to.have.status(200);
            expect(helloResponse).to.have.header("content-type", "application/json");
        });
        return chakram.wait();
    });
});
