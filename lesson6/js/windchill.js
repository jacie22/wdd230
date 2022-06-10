// Wind Chill
let temp = parseFloat( document.getElementById('temp').innerHTML) ;
let windSpeed = parseFloat( document.getElementById('windSpeed').innerHTML) ;
let windChillElement = document.getElementById('windChill') ;



if ( ( temp <= 50 ) && ( windSpeed > 3 ) ) {
    windChill = 35.74 + ( 0.6215 * temp ) - ( 35.75 * ( windSpeed ** 0.16 ) ) + ( 0.4275 * temp * ( windSpeed ** 0.16 ) ) ;
} else {
    windChillElement.innerHTML = "N/A" ;
} ;
