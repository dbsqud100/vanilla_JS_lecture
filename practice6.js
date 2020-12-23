const weather = document.querySelector(".js-weather");

const API_KEY = "4227cfd79e3bbde092e687e363d5cf55";
const COORDS = 'coords';

function getWeather(lat, log){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //객체의 키의 잉름을 같게 저장할 때는 
        //latitude,
        //longitude 라고만 적어도 적용이 된다.
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('Cant access  geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
        const parseCorrds = JSON.parse(loadCoords);
        getWeather(parseCorrds.latitude,parseCorrds.longitude);
    }
}

function init(){
    loadCoords();
}

init();