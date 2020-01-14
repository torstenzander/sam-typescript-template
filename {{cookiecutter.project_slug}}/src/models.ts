interface Model {
};


class Greeting implements Model {

    readonly say: string;

    constructor(say: string) {
        this.say = say
    }
}
