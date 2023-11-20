class veichle {
    constructor(name, manufacturer, veichleID){
        this.name = name;
        this.manufacturer = manufacturer;
        this.veichleID = veichleID;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, veichleID, model, gasOrElec) {
        super(name, manufacturer, veichleID);
        this.model = model;
        this.gasOrElec = gasOrElec;
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, veichleID, model) {
        super(name, manufacturer, veichleID);
        this.model = model;
    }
}

class Employee {
    constructor(name, dateOfBirth, employeeID) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.employeeID = employeeID;
    }
}

class driver extends Employee {
    constructor(name, dateOfBirth, employeeID, licenseID){
        super(name, dateOfBirth, employeeID);
        this.licenseID = licenseID;
    }
}

class pilot extends Employee {
    constructor(name, dateOfBirth, employeeID, licenseID){
        super(name, dateOfBirth, employeeID);
        this.licenseID = licenseID;
    }
}

class reservation{
    constructor(veichleID, employeeID, reservationID, reservationDate){
        super(veichleID, employeeID);
        this.reservationID = reservationID;
        this.reservationDate = reservationDate;
    }
}

const car1 = new Car("Camry", "Toyota", "1234", "Camry", "Gas");
console.log(car1);

const car2 = new Car("corolla", "Toyota", "12345", "corolla", "Gas");
console.log(car2);

const car3 = new Car("hilux", "Toyota", "123456", "hilux", "Gas");
console.log(car3);

const plane1 = new plane("plane1", "boeing", "555", "plane1");
console.log(plane1);

const plane2 = new plane("plane2", "boeing", "444", "plane2");
console.log(plane2);

