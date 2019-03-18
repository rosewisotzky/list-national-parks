console.log("Still a cooooooool babe")


    fetch("http://localhost:9099/parks")
    .then(response => response.json())
    .then(parsedResponse => {
        parsedResponse.forEach(park => {
            name = park.name;
            state = park.state;
            console.log(name, state)
            emptyDiv.innerHTML += createHtml(park)
        })
    })
