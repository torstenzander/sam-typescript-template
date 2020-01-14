import {APIGatewayEvent} from "aws-lambda";

export const sayHello = (event: APIGatewayEvent) => {
        return new Greeting('hello');
};
