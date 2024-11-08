// Creating the Vehicle class
class Vehicle {
    vehicle_type

    // Defining the vehicle_type property
    constructor() {
       this.vehicle_type = "medium";
    }
 
    // Show_type method of the Vehicle class.
    show_type() {
       console.log("This is inside the show_type method of the Vehicle class");
       console.log("The vehicle type is " + this.vehicle_type);
    }
 }
 
 // Creating the Car class which is a derived class of the Vehicle class.
 class Car extends Vehicle {
 
    // Defining the display method inside the Car class
    show_message() {
       this.show_type();
       console.log("This is show_message method of Car class ");
    }
 }
 
 // Creating an object of the Car class
 var car_object = new Car();
 
 // Invoke the show_message method of the Car class
 car_object.show_message();
 