    let textoIngresado = document.querySelector('.texto-ingresado');
    let resultado = document.querySelector('.mostrar-resultado');

    let botonEncriptar = document.querySelector('.boton-encriptar');
    let botonDesencriptar = document.querySelector('.boton-desencriptar');
    let botonCopiartexto = document.querySelector('.boton-copiar');

    let mensaje1 = document.querySelector('.mensaje-noEncontrado');
    let mensaje2 = document.querySelector('.ingreseTexto');
    
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiartexto.onclick = copiarTexto;

    function encriptar(){

        resultado.value = encriptarTexto(textoIngresado.value);
        resultado.style.backgroundImage = 'none';
        mensaje1.style.display = 'none';
        mensaje2.style.display = 'none';
        botonCopiartexto.style.marginTop = '72px';
        textoIngresado.value = '';

    }

    function desencriptar(){

        resultado.value = desencriptarTexto(textoIngresado.value);
        textoIngresado.value = '';

    }

    function copiarTexto(){
        
        navigator.clipboard.writeText(resultado.value);
        resultado.value = '';
        alert('Texto Copiado!');

    }

    function encriptarTexto(mensaje){

        let texto = mensaje.toLowerCase();
        let palabra = '';

        for(i=0; i<texto.length;i++){

            if(texto[i] == 'a'){

                palabra = palabra + 'ai';

            } else if(texto[i] == 'e'){

                palabra = palabra + 'enter';

            } else if(texto[i] == 'i'){

                palabra = palabra + 'imes';

            } else if(texto[i] == 'o'){

                palabra = palabra + 'ober';

            } else if(texto[i] == 'u'){

                palabra = palabra + 'ufat';
            }   
       
                else {

                palabra = palabra + texto[i];

            }
        
        }

         return palabra;
    }


    function desencriptarTexto(mensaje){

        let texto = mensaje.toLowerCase();
        let palabra = '';

        for(i=0; i<texto.length;i++){

            if(texto[i] == 'a'){

                palabra = palabra + 'a';

                i=i+1;

            } else if(texto[i] == 'e'){

                palabra = palabra + 'e';

                i=i+4;

            } else if(texto[i] == 'i'){

                palabra = palabra + 'i';

                i=i+3;

            } else if(texto[i] == 'o'){

                palabra = palabra + 'o';

                i=i+3;

            } else if(texto[i] == 'u'){

                palabra = palabra + 'u';

                i=i+3;
            }   
       
                else {

                palabra = palabra + texto[i];

            }
        
        }

         return palabra;
    }
    



    