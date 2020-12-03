//const img = document.querySelector("img") ;
//a loop that goes over every champion that creates cards for all champions
//and appends it into the list
const url = ""
const ul = document.querySelector("#card")


let champ = ""
fetch(url)
    .then(response => response.json())
    .then(champObj => {
        champ = champObj
        renderChamp(champObj)
    });

const renderChamp = (champObj) =>{
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



}
