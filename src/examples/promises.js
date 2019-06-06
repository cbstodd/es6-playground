const myPromise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const loc = 'Annapolis';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=437b7c9d5259eb873a2df29076a0f4df`;

    request.open('GET', api, false);
    request.send();

    const data = JSON.parse(request.responseText);
    const sayWeatherReport = `The weather in ${data.name} is: ${data.weather[0].description} with the temperature of ${Math.floor(data.main.temp)}(F).`;
    const errorMsg = `The API URL was not found. a "${request.status}" status was received.`;

    saySunset = () => {
        const time = data.sys.sunset;
        console.log(`Sunset is at ${time}.`);
    };

    resolve(sayWeatherReport);

    reject(errorMsg);

});

myPromise
    .then((data) => {
        console.log(data);
    })
    .then(() => {
        saySunset();
    })
    .catch((err => {
        console.error(err);
    }));