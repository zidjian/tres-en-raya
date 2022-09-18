let btn_iniciar = document.getElementById('iniciar_juego');
let tr_tabla = document.getElementById('tr_tabla');
let modal = document.querySelector('.estado');
let tr_elemento = document.querySelector('.tr_elemento');
const mostrar_mensaje = document.getElementById("mensaje");

let tres_en_raya = [];
let quien = '';
let estadoJuego = true;
let ganador = '';

btn_iniciar.addEventListener( 'click', inicializar );

function ponerValor( lugar ) {
    let posicion = document.getElementById('lugar' + lugar);
    posicion.setAttribute("disabled", "");
    if( quien == 2 ) {
        posicion.innerHTML = 'O';
        tres_en_raya[ lugar ] = 'O';
        quien = 1;
        document.getElementById('estado_x').innerText = 'X: Tu turno';
        document.getElementById('estado_o').innerText = 'O:';
    } else if( quien == 1 ) {
        posicion.innerHTML = 'X';
        tres_en_raya[ lugar ] = 'X';
        quien = 2;
        document.getElementById('estado_x').innerText = 'X:';
        document.getElementById('estado_o').innerText = 'O: Tu turno';
    }
    comprobarGanador();
}

function comprobarGanador() {
    let donde = '';
    if( tres_en_raya[ 0 ] == 'X' && tres_en_raya[ 1 ] == 'X' && tres_en_raya[ 2 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 3 ] == 'X' && tres_en_raya[ 4 ] == 'X' && tres_en_raya[ 5 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 6 ] == 'X' && tres_en_raya[ 7 ] == 'X' && tres_en_raya[ 8 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 0 ] == 'X' && tres_en_raya[ 3 ] == 'X' && tres_en_raya[ 6 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 1 ] == 'X' && tres_en_raya[ 4 ] == 'X' && tres_en_raya[ 7 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 2 ] == 'X' && tres_en_raya[ 5 ] == 'X' && tres_en_raya[ 8 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 0 ] == 'X' && tres_en_raya[ 4 ] == 'X' && tres_en_raya[ 8 ] == 'X' ) {
        donde = 'X';
    }
    if( tres_en_raya[ 2 ] == 'X' && tres_en_raya[ 4 ] == 'X' && tres_en_raya[ 6 ] == 'X' ) {
        donde = 'X';
    }


    if( tres_en_raya[ 0 ] == 'O' && tres_en_raya[ 1 ] == 'O' && tres_en_raya[ 2 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 3 ] == 'O' && tres_en_raya[ 4 ] == 'O' && tres_en_raya[ 5 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 6 ] == 'O' && tres_en_raya[ 7 ] == 'O' && tres_en_raya[ 8 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 0 ] == 'O' && tres_en_raya[ 3 ] == 'O' && tres_en_raya[ 6 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 1 ] == 'O' && tres_en_raya[ 4 ] == 'O' && tres_en_raya[ 7 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 2 ] == 'O' && tres_en_raya[ 5 ] == 'O' && tres_en_raya[ 8 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 0 ] == 'O' && tres_en_raya[ 4 ] == 'O' && tres_en_raya[ 8 ] == 'O' ) {
        donde = 'O';
    }
    if( tres_en_raya[ 2 ] == 'O' && tres_en_raya[ 4 ] == 'O' && tres_en_raya[ 6 ] == 'O' ) {
        donde = 'O';
    }

    if ( donde != '' ) {
        finJuego( donde );
    } else {
        let lleno = 0;
        for (var i = 0; i < tres_en_raya.length; i++) {
            if( tres_en_raya[ i ] != -1 ) {
                lleno++;
            }
        }
        console.log(lleno);
        if( lleno == 9) {
            finJuego( '' );
        }
    }
}

function inicializar() {
    mostrar_mensaje.innerHTML = '';
    quien = Math.floor( Math.random() * 2 ) + 1;
    if( quien == 2 ) {
        document.getElementById('estado_x').innerText = 'X:';
        document.getElementById('estado_o').innerText = 'O: Tu turno';
    } else if( quien == 1 ) {
        document.getElementById('estado_x').innerText = 'X: Tu turno';
        document.getElementById('estado_o').innerText = 'O:';
    }
    console.log(quien);
    tres_en_raya = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    console.log('inicio');
    if( estadoJuego == true ) {
        modal.style.display = 'none';
        estado = false;
        console.log('iniciado');
    }
    mostrarArray();
}

function mostrarArray() {
    let mensaje = "";
    for( let i = 0; i < tres_en_raya.length; i++ ) {

        mensaje += `
            <li>
                <button class="tr_elemento" id="lugar` + i + `" onclick="ponerValor(` + i + `)"></button>
            </li>
        `;
    }
    tr_tabla.innerHTML = mensaje;
}

function finJuego( jugador ) {
    if ( jugador == 'X' || jugador == 'O' ) {
            modal.style.display = 'flex';
            modal.querySelector('h2').innerHTML = 'Gano ' + jugador;
            modal.querySelector('button').innerHTML = 'Reintentar juego';
        // finJuego( donde );
    } else {
        modal.style.display = 'flex';
        modal.querySelector('h2').innerHTML = 'Empate';
        modal.querySelector('button').innerHTML = 'Reintentar juego';
        console.log('empate');
    }
}