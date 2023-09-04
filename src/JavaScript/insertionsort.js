//me faça um exemplo de insertion sort em javascript

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) { 
        let j = i - 1; 
        let aux = array[i]; //armazena o valor da posição atual
        while (j >= 0 && array[j] > aux) { //enquanto o valor da posição anterior for maior que o valor da posição atual
            array[j + 1] = array[j]; //o valor da posição anterior é movido para a posição atual
            j--; 
        }
        array[j + 1] = aux; //o valor da posição atual é movido para a posição anterior
    }
    return array;
}

console.log(insertionSort([5, 4, 3, 2, 1]));