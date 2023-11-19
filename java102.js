class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Airplane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  const car1 = new Car('Sedan', 'Toyota', 'C001', 'Gas');
  const car2 = new Car('Electric', 'Tesla', 'C002', 'Electric');
  const car3 = new Car('SUV', 'Honda', 'C003', 'Gas');
  
  const airplane1 = new Airplane('Boeing 747', 'Boeing', 'A001', 'Commercial');
  const airplane2 = new Airplane('Cessna 172', 'Cessna', 'A002', 'Private');
  
  const driver1 = new Driver('John Doe', 'D001', '1990-01-01', 'DL001');
  const pilot1 = new Pilot('Jane Smith', 'P001', '1985-05-15', 'PL001');
  
  const reservations = [];
  
  function makeReservation(employeeId, vehicleId) {
    const employee = findEmployeeById(employeeId);
    const vehicle = findVehicleById(vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log("Pilots cannot drive cars.");
    } else if (employee instanceof Driver && vehicle instanceof Airplane) {
      console.log("Drivers cannot fly airplanes.");
    } else {
      const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log("Reservation successful:", reservation);
    }
  }
  
  function findEmployeeById(employeeId) {
    const employees = [driver1, pilot1]; // Add more employees as needed
    return employees.find(employee => employee.id === employeeId);
  }
  
  function findVehicleById(vehicleId) {
    const vehicles = [car1, car2, car3, airplane1, airplane2]; // Add more vehicles as needed
    return vehicles.find(vehicle => vehicle.id === vehicleId);
  }
  
  // Example reservations
  makeReservation('D001', 'C001'); // Successful reservation
  makeReservation('P001', 'C002'); // Pilots cannot drive cars
  makeReservation('D001', 'A001'); // Drivers cannot fly airplanes
  
  // Print all reservations using map
  const reservationDetails = reservations.map(reservation => ({
    ReservationID: reservation.reservationID,
    EmployeeID: reservation.employeeId,
    VehicleID: reservation.vehicleId,
    ReservationDate: reservation.reservationDate.toISOString(),
  }));
  
  console.log("All Reservations:", reservationDetails);
  