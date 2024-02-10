console.log('test this');

// async/await
async function getData(key, city) {
    try {
        const foobar = await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`);
        console.log(foobar);
        const infoFromServer = await foobar.json();

        console.log(infoFromServer);
        console.log(infoFromServer.current.temp_c);

        const content = document.getElementById("weather-info");
        content.innerHTML = `
        <p>Right now it is ...</p>
        <p>${infoFromServer.location.name}, ${infoFromServer.location.country} </p>
        <p>${infoFromServer.current.temp_c} °C</p>
        <p><img src="${infoFromServer.current.condition.icon}" alt="${infoFromServer.current.condition.text}"/>${infoFromServer.current.condition.text}</p>
        `;

    } catch (error) {
        console.warn(`Nope:${error}`);
        // console.warn("Nope:" + error);
    }

}
getData('29a43923498e423e92d183223230102', 'London');