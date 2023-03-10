let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let client = order.name;
  let phoneNumber = order.phoneNumber;
  let street = order.address.street;
  let number = order.address.number;
  let apartment = order.address.apartment;
  console.log(`Olá, ${deliveryPerson}, entrega para: ${client}, Telefone: ${phoneNumber}, Endereço: R. ${street}, No: ${number}, AP: ${apartment}`);
}

customerInfo(order);

function orderModifier(order) {
  let client = order.name;
  let pizzas = Object.keys(order.order.pizza);
  let drink = order.order.drinks.type;
  let total = order.payment.total.toFixed(2);
  console.log(`Olá, ${client}, o valor total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$${total}.`);
}

orderModifier(order);