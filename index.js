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
