// Simple Example:
const processData = async (num1, num2) => {
    const sum = await num1 + num2;
    return sum;
};

processData(2, 6)
    .then((data) => console.log('Data: ', data))
    .catch((err) => console.error(err));




// Complex Example:
const getWeather = async () => {
    const request = new XMLHttpRequest();
    const loc = 'Annapolis';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=437b7c9d5259eb873a2df29076a0f4df`;

    request.open('GET', api, false);
    request.send();
    const data = await JSON.parse(request.responseText); // await


    if (request.readyState === 4 && request.status === 200) {
        return `The weather in ${data.name} is: ${data.weather[0].description} with the temperature of ${Math.floor(data.main.temp)}(F).`;
    } else if (request.status !== 200) {
        throw Error(`The API URL was not found. a "${request.status}" status was received.`);
    }
};

getWeather()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

