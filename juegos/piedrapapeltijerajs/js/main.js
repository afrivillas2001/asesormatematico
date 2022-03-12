function opcion(humano){
    let resultado_texto = ["Empatas", "Ganas", "Pierdes"];
    let nombre = ["Piedra", "Papel", "Tijera", "Lagarto", "Esponja"];

    let jugada = [
        [0,1,2,2,1],
        [2,0,1,1,2],
        [1,2,0,2,1],
        [1,2,1,0,2],
        [2,1,2,1,0],
    ];

    let dec_jugada = [
        ["Empate", "Papel tapa a piedra", "Piedra rompe tijera", "Piedra apalasta lagarto", "Esponja vaporiza piedra"],
        ["Papel tapa piedra", "Empate", "Tijeras cortan papel", "Lagarto devora papel", "Papel desautoriza a esponja"],
        ["Piedra rompe tijeras", "Tijeras cortan papel", "Empate", "Tijeras decapitan lagarto", "Esponja rompe tijeras"],
        ["Piedra aplasta lagarto", "Lagarto devora papel", "Tijeras decapitan lagarto", "Empate", "Lagarto envenena a esponja"],
        ["Esponja vaporiza piedra", "Papel desautoriza a esponja", "Esponja rompe tijeras", "Lagarto envenena a esponja", "Empate"],
    ];

    let cpu = Math.floor(Math.random() * 5);
    let = resultado = jugada[cpu][humano];

   

     console.log("Humano: " + nombre[humano]);
     console.log("Cpu: " + nombre[cpu]);
     console.log(dec_jugada[cpu][humano]);
     console.log(resultado_texto[resultado]);

     let mensaje1;
     let mensaje2;
     let mensaje3;
     let mensaje4;

     mensaje1 = new SpeechSynthesisUtterance("Humano: " + nombre[humano]);
     mensaje2 = new SpeechSynthesisUtterance("Cpu: " + nombre[cpu]);
     mensaje3 = new SpeechSynthesisUtterance(dec_jugada[cpu][humano]);
     mensaje4 = new SpeechSynthesisUtterance(resultado_texto[resultado]);

     window.speechSynthesis.speak(mensaje1);
     window.speechSynthesis.speak(mensaje2);
     window.speechSynthesis.speak(mensaje3);
     window.speechSynthesis.speak(mensaje4);

    //  document.write("Humano: " + nombre[humano]);
    //  document.write("Cpu: " + nombre[cpu]);
    //  document.write(dec_jugada[cpu][humano]);
    //  document.write(resultado_texto[resultado]);


    //  console.log(resultado);
}