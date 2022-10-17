var city = document.querySelector(".city-name");
var stateCode = document.querySelector(".state-code");
var iconTemp = document.querySelector(".icon-temp");
var actualTemp = document.querySelector(".actual-temp");
var ip

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60a4f6ad2dmsh4e65e77c48d718cp1d91a1jsnefdabb88c08b',
		'X-RapidAPI-Host': 'fastah-ip.p.rapidapi.com'
	}
};

fetch('https://fastah-ip.p.rapidapi.com/whereis/v1/json/auto', options)
	.then(response => response.json())
	.then(response => {

        ip = response.ip
        const weather = {
            method: 'GET',
            headers: {
                   'X-RapidAPI-Key': '60a4f6ad2dmsh4e65e77c48d718cp1d91a1jsnefdabb88c08b',
                   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
               }
           };
           
       fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ip}`, weather) 
           .then(response => response.json())
           .then(response => {
               console.log(response)
               iconTemp.src = response.current.condition.icon;
               actualTemp.innerHTML = response.current.temp_c
                   
               })
               .catch(err => console.error(err));
   


    })
        
        .catch(err => console.error(err));



const ipLocation = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60a4f6ad2dmsh4e65e77c48d718cp1d91a1jsnefdabb88c08b',
            'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        }
    };
    
    fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8', ipLocation)
    .then(response => response.json())
    .then(response => {
        city.innerHTML = response.city;
        stateCode.innerHTML = response.stateCode;
        console.log(response)})
        .catch(err => console.error(err));
