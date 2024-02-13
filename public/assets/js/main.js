const result = document.getElementById("result");
const btn = document.getElementById("searchbtn");
const inputField = document.getElementById("inputword");
// console.log (inputField);

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd2175b9474msh54928781a9d1e80p1eb92bjsncae22fa1296e',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
};

// async/await
async function getData() {
    try {
        const input = inputField.value;
        const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${input}`, options);
        // console.log(response);
        const infoFromServer = await response.json();
        // console.log(infoFromServer);

        result.innerHTML = `
        <h1>${infoFromServer.list[0].word}</h1>
        <p>${infoFromServer.list[0].definition}</p>
        <h2>${infoFromServer.list[0].example}</h2>
        <h3>By ${infoFromServer.list[0].author} on ${infoFromServer.list[0].written_on}</h3>
        `;
    } catch (error) {
        console.warn(`Nope:${error}`);
    }
}

// Click
btn.addEventListener("click", () => {
    getData();
});

// Keydown
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        getData();
    }
});
