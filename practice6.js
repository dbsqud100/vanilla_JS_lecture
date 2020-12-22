const COORDS = 'coords';

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

    }
}

function init(){
    loadCoords();
}

init();