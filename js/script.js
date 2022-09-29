function getWeather() {
    let place = $('#cityname').val();
    fetch('http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=15a622c2964fc19cc968e28786ca07f4') .then(response =>{
        return response.json();
    }).then(data =>{
        let tempD = new day (data.main,data.wind,data.sys,data.weather,data.dt,data.name);
        displayDay(tempD);
    });
}

function get5Day () {
    let place = $('#cityname').val();
    fetch('http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=15a622c2964fc19cc968e28786ca07f4') .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data);
        display5Day(data.list,data.city.name);
    }, (error) => {
        console.log("doesn't exists");
    });
}

//still in the making
