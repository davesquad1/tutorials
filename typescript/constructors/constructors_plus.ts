class Coffee {
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
  
  const americano = new Coffee(
    ['Americano',
     'espresso',
     'latte',
     'cappuccino'
    ],
    ['450',
     '399',
     '499', 
     '499'
    ]
);

console.log(americano.getName(), americano.getPrice());