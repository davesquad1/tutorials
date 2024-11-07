class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  const espresso = new Product('Espresso', 399);
  
   // 'Espresso'
  console.log(espresso.getName());