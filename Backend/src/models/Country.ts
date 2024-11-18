export class Country {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Getter für den Namen des Landes
    getName(): string {
        return this.name;
    }
}