//Ecuaciones (prealgebra)
//Despejar ecuaciones primer grado
function ecuaciones_primer_grado(operacion_e = 0) {
    let x_e = 0;
    let n_e = document.getElementById('operacion_x');
    let n_e_mat = parseFloat(n_e.value);

    let y_e = document.getElementById('operacion_mat_e');
    let y_e_mat = parseFloat(y_e.value);

    let z_e = document.getElementById('operacion_mat_z');
    let z_e_mat = parseFloat(z_e.value);

    let resultado_e = document.getElementById("resultado_e");

    if (operacion_e == 5) {
        resultado_e.innerHTML = " ";
    } else {
        switch (operacion_e) {
            case 1:
                let rstx = x_e + n_e_mat - n_e_mat;
                resultado_e.innerHTML += 'x = ' + rstx + '<br>';
                let rstz = y_e_mat + z_e_mat - n_e_mat;
                // console.log('x = ' + rstz);
                resultado_e.innerHTML += 'x = ' + rstz + '<br>';
                break;
            case 2:
                (x_e - n_e_mat) + n_e_mat;
                break;
            case 3:
                (x_e * n_e) * n_e;
                break;
            case 4:
                (x_e / n_e) / n_e;
                break;

            default:
                resultado_e.innerHTML += 'Escriba bien!!'
                break;
        }
    }
}
//Funciones
//Funcion lineal
function linear_function(operacion = 0) {
    let md = document.getElementById("valor_m");
    let m = parseFloat(md.value);
    let bd = document.getElementById("operacion_mat");
    let b = 0 || parseFloat(bd.value);
    let x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    let resultado = document.getElementById("resultado");
    if (operacion == 5) {

        resultado.innerHTML = " ";
    } else {
        for (i = 0; i in x; i++) {
            let txt = x[i];
            let opx = txt * m;
            if (x.length) {
                switch (operacion) {
                    case 1:
                        resultado.innerHTML += "Si Y vale :" + txt + " Entonces X vale: " + (opx + b) + "<br>";
                        break;
                    case 2:
                        resultado.innerHTML += "Si Y vale :" + txt + " Entonces X vale: " + (opx - b) + "<br>";
                        break;
                    case 3:
                        resultado.innerHTML += "Si Y vale :" + txt + " Entonces X vale: " + (opx * b) + "<br>";
                        break;
                    case 4:
                        resultado.innerHTML += "Si Y vale :" + txt + " Entonces X vale: " + (opx / b) + "<br>";
                        break;
                    default:
                        resultado.innerHTML += "Si Y vale :" + txt + " Entonces X vale: " + opx + "<br>";
                        break;
                }
            }

        }
    }
}
//Funcion cuadratica y = a.x^2 + b.x + c
function cuadratic_function() {

}