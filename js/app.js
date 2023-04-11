mostrarHora();
setInterval(mostrarHora, 1000); //guardo el identificador unico del setInterval

let ciudad = document.querySelectorAll('.ciudad');
console.log(ciudad);
//ciudad.addEventListener('click', mostrarCiudad);
for (let i = 0; i < ciudad.length; i++) {
  ciudad[i].addEventListener('click', horaCiudad);
}

//Funciones
function mostrarCiudad(event) {
  console.log(event.target.value);
}

// $(function () {
//   mostrarHora();
//   setInterval(mostrarHora, 1000);
//   $('.region').on('click', horaRegion);
// });

function mostrarHora() {
  //Hora local
  let fechaActual = new Date();
  const semana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  //formato 00:00:00
  let segundos = fechaActual.getSeconds();
  if (segundos < 10) segundos = '0' + segundos;
  let minutos = fechaActual.getMinutes();
  if (minutos < 10) minutos = '0' + minutos;
  let horas = fechaActual.getHours();
  if (horas < 10) horas = '0' + horas;

  //parrafo fecha
  let pFecha = document.getElementById('fecha');
  pFecha.innerHTML = `${
    semana[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  //parrafo de la hora
  let pHora = document.getElementById('hora');

  if (horas >= 12) {
    pHora.innerHTML = `0${horas % 12}: ${minutos}: ${segundos} PM`;
  } else {
    pHora.innerHTML = `${horas}: ${minutos}: ${segundos} AM`;
  }

  // let fecha = new Date();
  // let segundos = fecha.getSeconds();
  // if (segundos < 10) segundos = '0' + segundos;
  // let minutos = fecha.getMinutes();
  // if (minutos < 10) minutos = '0' + minutos;
  // let horas = fecha.getHours();
  // if (horas < 10) horas = '0' + horas;

  // $('#hora').html(horas + ':' + minutos + ':' + segundos);
  // $('#dia').html(semana[fecha.getDay()] + ', ');
  // $('#fecha').html(fecha.getDate() + ' de ' + meses[fecha.getMonth()]);
}

function horaCiudad() {
  //Hora ciudades

  let ciudades = [
    { ciudad: 'México DF', diferencia: -3 },
    { ciudad: 'Sao Paulo', diferencia: 0 },
    { ciudad: 'Washington DC', diferencia: -1 },
    { ciudad: 'Madrid', diferencia: 5 },
    { ciudad: 'Seúl', diferencia: 12 },
    { ciudad: 'Toronto', diferencia: -1 },
    { ciudad: 'Bogotá', diferencia: -2 },
    { ciudad: 'Caracas', diferencia: -1 },
  ];
  let fechaActual = new Date();
  let checked = this.checked;
  let index = parseInt(this.value);
  if (checked) {
    console.log(checked);
    hora = fechaActual.getHours() + ciudades[index].diferencia;
    if (hora >= 24) hora = hora - 24;
    if (hora < 10) hora = '0' + hora;
    minutos = fechaActual.getMinutes();
    if (minutos < 10) minutos = '0' + minutos;
    segundos = fechaActual.getSeconds();
    if (segundos < 10) segundos = '0' + segundos;

    //crear el parrafo para la ciudad
    let spanCiudad = document.createElement('span');
    spanCiudad.className = 'ciudad textoBlanco';
    spanCiudad.innerHTML = `${ciudades[index].ciudad}`;

    //crear el div del spanCiudad
    let divCiudad = document.createElement('div');
    divCiudad.className = 'col-6';
    divCiudad.append(spanCiudad);

    //crear el parrafo para la hora de la ciudad
    let spanHora = document.createElement('span');
    spanHora.className = 'hora-ciudad textoBlanco';
    spanHora.innerHTML = `${hora}:${minutos}:${segundos}`;

    //crear el div para el spanHora
    let divHora = document.createElement('div');
    divHora.className = 'col-6';
    divHora.append(spanHora);

    //div que contiene a los otros div
    let divContenedor = document.createElement('div');
    divContenedor.className = `row ${index}`;
    divContenedor.appendChild(divCiudad);
    divContenedor.appendChild(divHora);

    //insertar en el div otros
    let otros = document.getElementById('otros');

    otros.appendChild(divContenedor);

    // otros.append(`<div class='row"
    // ${index} +
    // "'><div class='col-xs-6'><span class='ciudad'>" +
    // ${ciudades[index].ciudad} +
    // "</span></div><div class='col-xs-6'><span class='hora-ciudad'>" +
    // ${hora} +
    // ':' +
    // ${minutos} +
    // ':' +
    // ${segundos} +
    // '</span></div></div>`);

    // $('#otros').append(
    //   "<div class='row" +
    //     index +
    //     "'><div class='col-xs-6'><span class='ciudad'>" +
    //     ciudades[index].ciudad +
    //     "</span></div><div class='col-xs-6'><span class='hora-ciudad'>" +
    //     hora +
    //     ':' +
    //     minutos +
    //     ':' +
    //     segundos +
    //     '</span></div></div>'
    // );
  } else {
    //console.log(checked);
    //console.log(ciudades[index].ciudad);

    let element = document.getElementsByClassName(index);
    console.log(element);
    while (element.length > 0) {
      element[0].parentNode.removeChild(element[0]);
    }

    // let otros = document.getElementById('otros');
    // console.log(otros);
  }
  // } else $('.row' + index).remove();
}
