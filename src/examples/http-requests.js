// const getWeather = (callback) => {
//     request.addEventListener('readystatechange', (evt) => {
//         const et = evt.target;

//         if (et.readyState === 4 && et.status === 200) {
//             const data = JSON.parse(et.responseText);
//             callback(undefined, data);
//         } else if (et.status !== 200) {
//             callback(et, undefined);
//         }
//     });
// };

const getWeather = () => {
    const request = new XMLHttpRequest();
    const loc = 'Annapolis';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=437b7c9d5259eb873a2df29076a0f4df`;

    request.open('GET', api, false);
    request.send();
    const data = JSON.parse(request.responseText);

    if (request.readyState === 4 && request.status === 200) {
        console.log(`The weather in ${data.name} is: ${data.weather[0].description} with the temperature of ${Math.floor(data.main.temp)}(F).`);
    } else if (request.status !== 200) {
        throw Error(`The API URL was not found. a "${data.status}" status was received.`);
    }
};

getWeather();