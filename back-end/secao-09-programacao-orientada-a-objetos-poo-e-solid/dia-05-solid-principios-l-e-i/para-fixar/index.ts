interface Transported { }

class Passenger implements Transported {
  constructor(public nome: string, public cpf: number) { }
}

class ShippedItem implements Transported {
  constructor(
    public nome: string, 
    public id: number, 
    public customerID: string,
  ) { }
}

class Flight {
  constructor(public num: number, public payload: Transported[] ) { }

  add(newTransported: Transported): void {
    this.payload.push(newTransported); 
  }

  remove(removedTransportered: Transported): void {
    const index = this.payload.indexOf(removedTransportered, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

abstract class Company {
  constructor(public nome: string, public flights: Flight[]) { }

  newFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  }
}

class TravelingCompany extends Company {
  addToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.add(passenger);
    }
  }

  removeFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.remove(passenger);
    }
  }
}

class ShippingCompany extends Company {
  addToFlight(flightNum: number, item: Transported): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.add(item);
    }
  }

  removeToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.remove(item);
    }
  }
}