window.addEventListener('load', ()=> {
  let long;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long)
      console.log(lat)

      const api = `https://api.darksky.net/forecast/f8f82802a688f76ce3ae8ea995de55cc/${lat},${long}`
    })
  }else{
    h1.textContent="not working"
  }

  fetch(api)
      .then(data)
})