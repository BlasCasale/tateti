// mi js para el tateti

// jugador 1
let nombreJugador1
let puntajeJugador1 = 0
let simboloJugador1

// jugador 2
let nombreJugador2
let puntajeJugador2 = 0
let simboloJugador2

// variable para el turno
let turnoDelJugador
const cantidadDeTurnos = 1


// simbolos 
const equis = `img/x.webp`
const circulo = `img/circulo.webp`

// las const y let para acceder a todo
const jugadores = document.getElementById('jugadores')
const padreTateti = document.getElementById('padreTateti')
const turno = document.getElementById('turno')


// funciones 

// simplifico alerta para no repetir exactamente lo mismo
const alertaNegativa = () => {
    Toastify({
        text: "Ingresa un nombre",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(90deg, rgba(59,131,149,1) 30%, rgba(53,77,99,1) 83%)",
            color: "#fff",
            borderRadius: "30px",
            border: "solid 2px white"
        },
        stopOnFocus: true,
    }).showToast()
}

// aca con los datos ya capturados, creo el html para mostrar los nombres y puntajes
const crearJugadores = () => {
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    div.classList.add('cajaJugador')
    div2.classList.add('cajaJugador')

    jugadores.append(div, div2)

    const h2J1 = document.createElement('h2')
    const h2J2 = document.createElement('h2')

    const pJ1 = document.createElement('p')
    const pJ2 = document.createElement('p')

    
    h2J1.innerText = nombreJugador1
    h2J2.innerText = nombreJugador2
    pJ1.innerText = puntajeJugador1
    pJ2.innerText = puntajeJugador2

    div.append(h2J1, pJ1)
    div2.append(h2J2, pJ2)
}

// con esto creo el html para poder elegir el simbolo que usa cada jugador 
const crearSimbolo = () => {

    const div = document.createElement('div')
    div.classList.add('cajaJugadores')

    const div2 = document.createElement('div')
    div2.classList.add('cajaSimbolos')

    const h3 = document.createElement('h3')
    h3.innerText = `¿${nombreJugador1} que simbolo elegis?`

    const btn = document.createElement('button')
    const btn2 = document.createElement('button')
    btn.setAttribute('id', 'simbolo1')
    btn2.setAttribute('id', 'simbolo2')

    const simbolo1 = document.createElement('img')
    const simbolo2 = document.createElement('img')

    simbolo1.classList.add('simbolos')
    simbolo2.classList.add('simbolos')

    simbolo1.src=equis
    simbolo2.src=circulo

    turno.appendChild(div)
    div.append(h3, div2)
    div2.append(btn, btn2)
    btn.append(simbolo1)
    btn2.append(simbolo2)
}

// con esto creo el html para poder elegir cada jugador
const elegirJugador = () => {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const btn = document.createElement('button')
    const btn2 = document.createElement('button')
    
    div.classList.add('cajaJugadores')
    
    h2.innerText = `¿Quien comienza?`
    
    btn.innerText = `Jugador 1`
    btn.setAttribute('id', 'jugador1')
    
    btn2.innerText = `Jugador 2`
    btn2.setAttribute('id', 'jugador2')
    
    padreTateti.appendChild(div)
    div.append(h2, btn, btn2)
}

// con esto voy a decir a quien le toca empezar

const decirTurno = () => {
    const h3 = document.createElement('h3')
    h3.innerText = `Es el turno de ${turnoDelJugador}`
}



// toma de datos del jugador

const h3 = document.createElement('h3')
h3.innerText = `Jugador 1, indicanos tu nombre`

const h3J2 = document.createElement('h3')
h3J2.innerText = `Jugador 2, indicanos tu nombre`

const input = document.createElement('input')
const input2 = document.createElement('input')

const btn = document.createElement('button')
btn.innerText = `Enviar nombre`
const btn2 = document.createElement('button')
btn2.innerText = `Enviar nombre`

jugadores.prepend(h3)
jugadores.append(input)
jugadores.append(btn)

btn.addEventListener('click', () => {
    // aca le doy valor a la variable jugador y hago un prevent por si no completa el campo

    if (input.value == "") {
        alertaNegativa()
    } else {
        nombreJugador1 = input.value     // cuando conteste vacio el html

        jugadores.innerHTML = ""

        // creo el HTML para el otro jugador

        jugadores.prepend(h3J2)
        jugadores.append(input2)
        jugadores.append(btn2)
    }
})

btn2.addEventListener('click', ()=>{
        // aca le doy valor a la variable jugador y hago un prevent por si no completa el campo

        if (input2.value == "") {
            alertaNegativa()
        } else {
            nombreJugador2 = input2.value
        
            // cuando conteste vacio el html
        
            jugadores.innerHTML = ""

            crearJugadores()

            crearSimbolo()
        }
})


// aca hago el codigo para elegir el simbolo
const simbolo1 = document.getElementById('simbolo1')
const simbolo2 = document.getElementById('simbolo2')

simbolo1.addEventListener('click', () => {

})

// simbolo2.addEventListener('click', () => {
//     // simboloJugador1 = circulo
//     // simboloJugador2 = equis

//     // turno.innerHTML = ""
//     // elegirJugador()
// })


// aca hago el codigo de quien empieza

const jugador1 = document.getElementById('jugador1')
const jugador2 = document.getElementById('jugador2')

// jugador1.addEventListener('click', () => {
//     turnoDelJugador = nombreJugador1
// })

// jugador2.addEventListener('click', () => {
//     turnoDelJugador = nombreJugador2
// })


