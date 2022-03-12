//Clases

//Prototipo para la figura cuadrado
class Cuadrado {
    constructor(lado, ancho) {
            this.lado = lado;
            this.ancho = ancho;
        }
        //Hallar el area
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.lado * this.ancho;
    }
}
//Prototipo para la figura Circulo
class Circulo {
    constructor(pi, radio) {
            this.pi = pi;
            this.pi2 = this.pi * this.pi;
            this.radio = radio;
        }
        //Hallar el area
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.radio * this.pi2;
    }
}
//Prototipo para la figura Triangulo
class Triangulo {
    constructor(base, lado) {
            this.base = base;
            this.lado = lado;
            this.ladob = this.base / 2;
        }
        //Hallar altura (necesrio para hallar el area)
    get altura() {
        return this.calcAltura();
    }
    calcAltura() {
            return (this.ladob * this.ladob) + (this.lado * this.lado);
        }
        //Hallar el area
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.calcAltura() * this.base / 2;
    }
}

function cuadrado_result() {
    // console.log("hola1");
    let cuadrado_n1 = document.getElementById("cuadrado_n1");
    let lado1 = parseFloat(cuadrado_n1.value);
    let cuadrado_n2 = document.getElementById("cuadrado_n2");
    let lado2 = parseFloat(cuadrado_n2.value);
    let result_r = document.getElementById("result-r");
    const cuadrado_area = new Cuadrado(lado1, lado2);
    result_r.innerHTML = "El resuldato es: " + cuadrado_area.area;
}

function circulo_result() {
    // console.log("hola2");
    let result_c = document.getElementById("result-c");
    let radio_n1 = document.getElementById("circulo_n1");
    let radio = parseFloat(radio_n1.value);
    const pi = 3.1416;
    const circulo_area = new Circulo(pi, radio);
    result_c.innerHTML = "El resuldato es: " + circulo_area.area;
}

function triangulo_result() {
    // console.log("hola3");
    let result_t = document.getElementById("result-t");
    const triangulo_area = new Triangulo();
    result_r.innerHTML = "El resuldato es: " + triangulo_area.area;
}