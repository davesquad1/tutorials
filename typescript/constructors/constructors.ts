class Product {
    name;
    price;
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getName() {
      return this.name;
    }

    getPrice() {
      return this.price;
    }
  }
  
  const espresso = new Product('Espresso', 399);
  
   // 'Espresso'
  console.log(espresso.getName());
  console.log(espresso.getPrice());