interface City {
    name: string;
    days: number;
  }
  
  interface Country {
    name: string;
  }
  
  interface Guide {
    name: string;
  }
  
  interface Journey {
    id: number;
    cities: City[];
    country: Country;
    startDate: string;
    endDate: string;
    guide: Guide;
  }