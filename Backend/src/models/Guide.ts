// Author: Jona Kaufmann

export class Guide {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Getter für den Namen des Tourguides
    getName(): string {
        return this.name;
    }
}