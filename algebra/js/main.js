function linear_function(operacion) {
    let md = document.getElementById("valor_m");
    let m = parseFloat(md.value);
    let bd = document.getElementById("operacion_mat");
    let b = 0 || parseFloat(bd.value);
    let x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    let resultado = document.getElementById("resultado");
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