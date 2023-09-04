def insertionSort(array) : 
    for i in range(1, len(array)): 
        key = array[i]  
        j = i-1
        while j >= 0 and key < array[j] : # Move elementos de array[0..i-1], que são maiores que key, para uma posição a frente de sua posição atual
                array[j + 1] = array[j] 
                j -= 1
        array[j + 1] = key # Insere key na posição correta
    return array

array = [12, 11, 13, 5, 6]
print(insertionSort(array))
