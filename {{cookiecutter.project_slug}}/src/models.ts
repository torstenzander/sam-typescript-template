// tslint:disable-next-line:no-empty-interface
export interface Model {
}

export class Greeting implements Model {

    public readonly say: string;

    constructor(say: string) {
        this.say = say;
    }
}
