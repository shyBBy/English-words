const getData = (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    const url = `https://owlbot.info/api/v4/dictionary/${input.value}`;
    fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Token 41e80a6f23cd0003ced3b69973c70f19ad877f73',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
        if(response.status !== 200) {
            throw Error("Odpowiedz inna niż 200");
        } else {
            return response.json();
        }
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
}


document.querySelector('button').addEventListener('click', getData);