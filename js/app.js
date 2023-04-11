mostrarHora();
setInterval(mostrarHora, 1000); //guardo el identificador unico del setInterval

//TODO: Traer region para hacer un addEventListener

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
    pHora.innerHTML = `${horas % 12}: ${minutos}: ${segundos} PM`;
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

function horaRegion() {
  //Hora Regiones

  let regiones = [
    { region: 'México DC', diferencia: -3 },
    { region: 'Sao Paulo', diferencia: 0 },
    { region: 'Washington DC', diferencia: -1 },
    { region: 'Madrid', diferencia: 5 },
    { region: 'Seúl', diferencia: 12 },
    { region: 'Toronto', diferencia: -1 },
    { region: 'Bogotá', diferencia: -2 },
    { region: 'Caracas', diferencia: -1 },
  ];
  let fechaActual = new Date();
  let checked = this.checked;
  let index = parseInt(this.value);
  if (checked) {
    hora = fechaActual.getHours() + regiones[index].diferencia;
    if (hora >= 24) hora = hora - 24;
    if (hora < 10) hora = '0' + hora;
    minutos = fechaActual.getMinutes();
    if (minutos < 10) minutos = '0' + minutos;
    segundos = fechaActual.getSeconds();
    if (segundos < 10) segundos = '0' + segundos;

    let otros = document.getElementsById('otros');

    otros.append(`<div class='row" 
    ${index} +
    "'><div class='col-xs-6'><span class='ciudad'>" +
    ${regiones[index].region} +
    "</span></div><div class='col-xs-6'><span class='hora-ciudad'>" +
    ${hora} +
    ':' +
    ${minutos} +
    ':' +
    ${segundos} +
    '</span></div></div>`);

    // $('#otros').append(
    //   "<div class='row" +
    //     index +
    //     "'><div class='col-xs-6'><span class='ciudad'>" +
    //     regiones[index].region +
    //     "</span></div><div class='col-xs-6'><span class='hora-ciudad'>" +
    //     hora +
    //     ':' +
    //     minutos +
    //     ':' +
    //     segundos +
    //     '</span></div></div>'
    // );
  } else $('.row' + index).remove();
}
