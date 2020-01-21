// tslint:disable-next-line:no-empty-interface
export interface Model {
}

export class Greeting implements Model {

    private readonly say: string;

    constructor(say: string) {
        this.say = say;
    }
}
