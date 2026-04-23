//RESUELVE LOS EJERCICIOS AQUI
// 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numbers.map(value => value ** value);

// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map(food => {
  switch (food) {
    case 'Pizza':
      return 'Como soy de Italia, amo comer Pizza';
    case 'Ramen':
      return 'Como soy de Japón, amo comer Ramen';
    case 'Paella':
      return 'Como soy de Valencia, amo comer Paella';
    case 'Entrecot':
      return 'Aunque no como carne, el Entrecot es sabroso';
  }
});

// 3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
const result3 = staff.map(empleado =>
  `${empleado.name} es ${empleado.role} y le gusta ${empleado.hobbies[0]} y ${empleado.hobbies[1]}`
);

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(number => number % 2);

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }];
const result5 = foodList2.filter(food => food.isVeggie).map(food => {
  let texto = 'Que ric';
  switch (food.name) {
    case 'Tempeh':
      texto += `o ${food.name}`;
      break;
    case 'Tofu burguer':
      texto += `a ${food.name}`;
      break;
  }
  return texto += ' me voy a comer!';
});

// 6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const result6 = inventory.filter(item => item.price > 300).map(item => item.name);

// 7.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acc, num) => acc * num, 1);

// 8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
  'Me',
  'llamo',
  'Zapato',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
const result8 = sentenceElements.join(' ');
