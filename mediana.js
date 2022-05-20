const calcularmediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    40000,
];

const ordenarArray = (array) => {
    return array.sort();
}

const esPar = (numerito) => {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

const calcularMediana = (medianaArray) => {
    let nArray = ordenarArray(medianaArray);
    let mitadLista = parseInt(nArray.length / 2);

    if (esPar(nArray.length)) {
        const elemento1 = nArray[mitadLista - 1];
        const elemento2 = nArray[mitadLista];

        const promedioElemento = calcularmediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento;
    } else {
        mediana = nArray[mitadLista]
    }

    return mediana;
}