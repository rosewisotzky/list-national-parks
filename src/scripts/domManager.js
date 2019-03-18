const emptyDiv = document.querySelector("#display-container");
// const articleClass = document.querySelector("article")

const createHtml = (park) => {
    let parkClass = ""
        if (park.visited) {
            parkClass = "visited"
        } else {
            parkClass = "unvisited"
        }
    return `
     <article class="${parkClass}">
     <h3>${park.name}</h3>
      <p>${park.state}</p>
    </article>`


}