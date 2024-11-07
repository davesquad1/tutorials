// Creating the test class
class test {

// Defining the value property
value = 7;

// Defining the months array
months = [1, 4, 7, 10, 12, 6, 9];

// Filter the all months whioh are greater than 7
// Use this keyword as a pameter of the method
filtered_months = this.months.filter((month) => {
   return month > this.value;
}, this);
}
// Creting the object of the test class
let test_obj = new test();
console.log("Filtered months are " + test_obj.filtered_months);