// Creating the demo class
class demo {
    y = 10;
    // Defining the display method inside the demo class
    display() {
       console.log("This is display method of demo class ");
       console.log("The Value of the Property y of the demo class is " + this.y)
    }
 }
 // Creating the object of the demo class
 var demo_object = new demo();
 
 // Invoke the object of the demo class
 demo_object.display();