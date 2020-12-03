//const img = document.querySelector("img") ;
//a loop that goes over every champion that creates cards for all champions
//and appends it into the list
const ul = document.querySelector("#card")


function renderChamps(champObj) {
    const li = document.createElement("li")
        li.innerHTML = `
            <img src = "${champObj.image}" style="width:100%">
            <div class="container">
                <h4>${champObj.name}</h4>
                <p>${champObj.bio}</p>
                <br>
                <button>comments</button>
            </div>
        `
    ul.append(li)


}




let champion
function initialize() {
    fetch('http://localhost:3000/champions')
        .then(resp => resp.json())
        .then(champObj => {
            console.log(champObj)
            champion = champObj
            renderChamps(champObj)
        })
}
initialize()