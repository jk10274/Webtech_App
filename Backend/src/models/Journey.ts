// Author: Jona Kaufmann

export class Journey {
  public id: string;
  public destinationCountry: string;
  public startDate: Date;
  public endDate: Date;

  constructor(
    id: string,
    destinationCountry: string,
    startDate: Date,
    endDate: Date,
    tourguide: string
  ) {
    this.id = id;
    this.destinationCountry = destinationCountry;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public getId(): string {
    return this.id;
  }

  public getDestinationCountry(): string {
    return this.destinationCountry;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setDestinationCountry(destinationCountry: string): void {
    this.destinationCountry = destinationCountry;
  }

  public setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }
}
