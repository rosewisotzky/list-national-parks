fetch("http://localhost:9099/parks")
    .then(response => response.json())
    .then(parsedResponse => {
        parsedResponse.forEach(park => {
            name = park.name;
            state = park.state;
            console.log(name, state)
            emptyDiv.innerHTML += createHtml(park)
        })
        fetch(`https://api.darksky.net/forecast/f0d442c0e2f361f2a3c01bd5db554e8b/${park.latitude},${park.longitude}`)
            .then(response => response.json())
            .then(weatherInfo =>
                park.
                )

    })