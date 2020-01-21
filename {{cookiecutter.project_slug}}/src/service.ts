import {APIGatewayProxyEvent} from "aws-lambda";
import {Greeting} from "./models";

export const sayHello = (event: APIGatewayProxyEvent) => {
    const greeter = new Greeting('Hello');
    return greeter;
};
