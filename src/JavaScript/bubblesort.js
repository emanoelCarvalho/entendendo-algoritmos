function bubbleSort(array) {
    let verificarTroca = true; // variável que verifica se houve troca
    while (verificarTroca) {
        verificarTroca = false; // se não houver troca, o loop para
        for (let i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) { // se o próximo elemento for menor que o atual
            [array[i], array[i + 1]] = [array[i + 1], array[i]];   // troca os elementos de lugar
            verificarTroca = true; // se houve troca, o loop continua
        }
        }
    }
    return array; // retorna o array ordenado
    }

    console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]