// Author: Jona Kaufmann

export class City {
    private name: string;
    private days: number;

    constructor(name: string, days: number) {
        this.name = name;
        this.days = days;
    }

    // Getter für den Namen der Stadt
    getName(): string {
        return this.name;
    }

    // Getter für die Aufenthaltstage
    getDays(): number {
        return this.days;
    }
}