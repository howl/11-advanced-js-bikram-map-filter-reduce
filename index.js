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
