const loc = 'Annapolis';
const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=437b7c9d5259eb873a2df29076a0f4df`;

fetch(api, {})
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(`Status did not return a 200, it returned ${res.status}...`);
        }
    })
    .then((data) => console.table(data))
    .catch((err) => console.error(err));