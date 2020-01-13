import {APIGatewayEvent} from "aws-lambda";

export const sayHello = (event: APIGatewayEvent) => {
        return "Hallo " + "User ";
};
