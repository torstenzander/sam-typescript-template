import {APIGatewayEvent} from "aws-lambda";
import {successResponse} from "./http";
import {sayHello} from "./service";

export const greetings = async (event: APIGatewayEvent) => {
    return successResponse(200, sayHello(event));
};
