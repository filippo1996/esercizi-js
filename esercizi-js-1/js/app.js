/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.
  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]
*/

const input = [
    [1,2],
    [3,4],
    [5,6]
];


console.log(transpose(input));


/**
 * Transponse
 * @param {array} array 
 * @returns {array}
 */
 function transpose(array){
  return Object.keys(array[0]).map(i => array.map(ele => ele[i]));
}


/**
 * Transponse
 * @param {array} array 
 * @returns {array}

function transpose(array){
    //Recuperiamo gli indici dell'array
    const item =  Object.keys(array[0]).map(i => {
        console.log(i);
        //A ogni indice dell'array recuperiamo i corrispettivi elementi 
        const item2 =  array.map(ele => ele[i]);
        console.log(item2);
        return item2;
    });

    console.log(item);
}
 */
