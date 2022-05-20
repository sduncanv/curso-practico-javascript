// Código del cuadrado
console.group("Cuadrados");
const perimetroCuadrado = (lado) =>  lado * 4;
const areaCuadrado = (lado) => lado * lado;
console.groupEnd();



// Código del triángulo
console.group("Triángulos");
const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
}
const areaTriangulo = (base, altura) => Math.round((base * altura) / 2);
const alturaTriangulo = (lado1, lado2, base) => {
    return Math.sqrt(lado1**2 -((base**2)/4));
}
console.groupEnd();



// Código del círculo
console.group("Círculos");
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return Math.round(diametro * PI);
}
const areaCirculo = (radio) => {
    return Math.round(Math.pow(radio, 2) * PI);
}
console.groupEnd();



//Aquí interactuamos con el html

const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}



const calcularAlturaTriangulo = () => {
    const input = document.getElementById("lado1");
    const valueSide1 = input.value;
    const input2 = document.getElementById("lado2");
    const valueSide2 = input2.value;
    const input3 = document.getElementById("base");
    const base = input3.value;
    
    if (valueSide1 == valueSide2 && base != valueSide1) {
        const altura = alturaTriangulo(valueSide1, valueSide2, base);
        alert(altura);
    } else {
        alert("El triángulo no es Isoceles");
    }
}
const calcularPerimetroTriangulo = () => {
    const input = document.getElementById("lado1");
    const valueSide1 = Number(input.value);
    const input2 = document.getElementById("lado2");
    const valueSide2 = Number(input2.value);
    const input3 = document.getElementById("base");
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(valueSide1, valueSide2, base);
    alert(perimetro);
}
const calcularAreaTriangulo = () => {
    const input = document.getElementById("lado1");
    const valueSide1 = Number(input.value);
    const input2 = document.getElementById("lado2");
    const valueSide2 = Number(input2.value);
    const input3 = document.getElementById("base");
    const base = Number(input3.value);

    const altura = alturaTriangulo(valueSide1, valueSide2, base);

    const area = areaTriangulo(base, altura);
    alert("El área es: " + area);
}