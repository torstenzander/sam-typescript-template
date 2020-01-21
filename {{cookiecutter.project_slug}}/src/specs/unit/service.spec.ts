import {sayHello} from "../../service";
import {APIGatewayProxyEvent} from "aws-lambda";

describe('Service test', () => {

    it('Should return Hello', () => {
        const event = {} as APIGatewayProxyEvent;
        const greeter = sayHello(event);
        expect(greeter).toEqual({say: "Hello"});
    });
});
