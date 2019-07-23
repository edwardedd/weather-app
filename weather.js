
const city = document.getElementById('name_city').value;
const API ="https://api.openweathermap.org/data/2.5/weather?q=";







const weatherBallon = async () => {  
  const city = document.getElementById('name_city').value;  
    return fetch(API+city+"&units=metric&appid=952c0f2355e0268ba4082ae2cfcf5d64").then(res => {
      return res.json();
      console.log(res)
    }).then(data => {
      const temp = document.querySelector(".temp_degree");
      temp.innerHTML = `
        <h4>Temperature:${data.main.temp} C</h4>
        
      `;
      const wind = document.querySelector(".wind");
      wind.innerHTML = `
        <h4>Wind speed:${data.wind.speed} m/s</h4>
      `;
      const icon = document.getElementById("wicon");      
      icon.src = "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png"
      console.log(`${data.weather[0].icon} `);    
      }).catch(err => {
      console.log('error')
       const error = document.getElementById("result");
       error.innerHTML = `
        <h4>incorect name of the city</h4>
      `;
      });
}

$.getJSON('data.json', function(data){
  console.log(data.id)
})

// $(document).ready(function(){
//   $('#name_city').keyup(function(){
//     $('result').html('');
//     var searchFiled = $('#name_city').val();
//     var expression = new RegExp(searchFiled, "i");
//     $.getJSON('data.json', function(data){
//       $.each(data, function(key,value){
//         if(value.name.search(expression) != -1 )
//         {
//           $("result").append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.location+'</span></li>')
//         }
//       })
//     })
//   })
// })





