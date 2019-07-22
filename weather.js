
const city = document.getElementById('name_city').value;
const API ="https://api.openweathermap.org/data/2.5/weather?q=";

// const API = 'https://jsonplaceholder.typicode.com/';





const weatherBallon = async () => {
  // const users = await getUsers();
  const city = document.getElementById('name_city').value;
  console.log(city)

  // const getUsers = () => {
    return fetch(API+city+"&units=metric&appid=952c0f2355e0268ba4082ae2cfcf5d64").then(res => {
      return res.json();
      console.log(res)
    }).then(data => {
      const temp = document.querySelector(".temp_degree");
      temp.innerHTML = `
        <h4>${data.main.temp}</h4>
      `;
      const icon = document.getElementById("wicon");
      
      icon.src = "http://openweathermap.org/img/w/"+ data.weather[0].icon+".png"
      console.log(`${data.weather[0].icon} `)
      // icon.src = `http://openweathermap.org/img/w/10d.png`
      ;
    }).catch(err => {
      console.log('error')
    })
  // };
 
}

// weatherBallon()


