
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': '7b452c9c8bmsh9be3a717deccf19p158f03jsnac33c68e9d09'
    }
  };
  let datosApi ;

  //-----APLICACION DE FETCH-----

//TRAE LOS DATOS DEL CLIMA ACTUAL DESDE LA API, Y FORMA LA ALERTA DE MENSAJE DE INCIO

  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=-31.4135%2C%20-64.18105%2C%20C%C3%B3rdoba%20Argentina', options)
  .then(response => response.json() )
  .then(data => {

  Swal.fire({
    title: 'BIENVENIDO',
    text: "Con " + data.current['temp_c']+"°, está ideal para un helado!",
    imageUrl: '/media/img/logo-grido-azul.png',
    imageWidth: 300,
    showConfirmButton: false,
    timer: 2500,
  })

})
  .catch(err => console.error(err));





  
  
  
  