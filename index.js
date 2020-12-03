//const img = document.querySelector("img") ;
//a loop that goes over every champion that creates cards for all champions
//and appends it into the list
const url = ""
const commentURL = ""
const ul = document.querySelector("#card")
const button = document.querySelector("button")


let champ = ""
let comments = ""

fetch(url)
    .then(response => response.json())
    .then(champObj => {
        champ = champObj
        renderChamp(champObj)
    });

fetch(commentURL)
    .then(response => response.json())
    .then(commentObj => {
        comments = commentObj
        renderComment(commentObj)
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

button.addEventListener('click', renderComment())

function renderComment(commentObj){
    const comments = document.querySelector("#commentList")
    commentObj.forEach(element => {
        const commentLi = createElement("li")
        commentLi.textContent = "${commentObj.comment}"
        comments.appendChild(commentLi)
    });
}
