def bubbleSort(lista):
    for i in range(len(lista)): #percorre a lista
        for j in range(len(lista)-1): #percorre a lista -1
            if lista[j] > lista[j+1]: #se o elemento da posição j for maior que o elemento da posição j+1
                lista[j],lista[j+1] = lista[j+1],lista[j] #troca os elementos de posição
    return lista #retorna a lista ordenada

lista = [5,4,3,2,1]
print(bubbleSort(lista))