const lista1 = [
    {distancia: 20, velocidad: 120},
    {distancia: 30, velocidad: 130},
    {distancia: 40, velocidad: 140},
    {distancia: 50, velocidad: 150}
];

const calcularMediaArmonica = (lista) => {
    const n = lista.length;
    
    const diVelocidad = lista.map(
        function (elemento) {
            return 1 / elemento.velocidad;
        }
    );

    const sumaVelocidades = diVelocidad.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    const mediaArmonica = n / sumaVelocidades;

    return mediaArmonica;
}