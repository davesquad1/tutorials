var obj = {
    // Defining the object properties
    website_name: "TutorialsPoint",
    language: "TypeScript",
 
    // Defining the test() method for the object
    test() {
       return (
          this.website_name +
          " is a decent website to learn " +
          this.language +
          " programming language."
       );
    },
 };
 
 // Call the test() method of obj and store the return value in message.
 let message = obj.test();
 
 // Print the message
 console.log(message);
 