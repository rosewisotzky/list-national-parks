const emptyDiv = document.querySelector("#display-container");


const createHtml = (park) => {
    return `
     <article>
     <h3>${park.name}</h3>
      <p>${park.state}</p>
    </article>`
}


