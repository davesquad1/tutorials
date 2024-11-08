class Coffee {
    name;
    price;    
    origin;

    constructor(name, price, origin) {
      this.name = name;
      this.price = price;
      this.origin = origin;
    }
  
    getName() {
      return this.name;
    }

    getPrice() {
      return this.price;
    }

    getOrigin() {
      return this.origin;
    }
  }
  
  const coffee = new Coffee(
    ['Americano',
     'espresso',
     'latte',
     'cappuccino'
    ],
    ['450',
     '399',
     '499', 
     '499'
    ],
    ['Columbia',
     'Italy',
     'France',
     'Italy'
    ]
);

console.log(coffee.getName(), coffee.getPrice(), coffee.getOrigin());