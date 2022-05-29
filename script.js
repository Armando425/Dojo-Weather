function displayMessage(){
    alert("Loading weather report...");
}

function acceptCookies(element){
    document.querySelector(element).remove();
}

function convertToFahrenheit(temp){
    return Math.round((9/5)*temp + 32);
}

function converToCelsius(temp){
    return Math.round((5/9)*(temp - 32));
}

function convert(element) {
    for(var i=1; i<9; i++) {
        var temperature = document.querySelector("#temperature" + i);
        var tempValue = parseInt(temperature.innerText);
        if (element.value == "°C"){
            temperature.innerText = converToCelsius(tempValue);
        } else {
            temperature.innerText = convertToFahrenheit(tempValue);
        }
    }
}
