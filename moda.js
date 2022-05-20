const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
const lista2 = [7, 8, 9, 9, 8, 7, 8, 9, 9, 9];

/*
const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)

const moda = lista1Array[lista1Array.length - 1]
*/

const calcularModa = (lista) => {
    const objeto = {};

    lista.map(
        function (elemento) {
            if (objeto[elemento]) {
                objeto[elemento] =+ 1;
            } else {
                objeto[elemento] = 1;
            }
        }
    )

    const arrayObjeto = Object.entries(objeto).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )

    const moda = arrayObjeto[arrayObjeto.length - 1];
    return moda;
}