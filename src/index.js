//const img = document.querySelector("img") ;
//a loop that goes over every champion that creates cards for all champions
//and appends it into the list
<<<<<<< HEAD:src/index.js
=======
const url = ""
const commentURL = ""
>>>>>>> 11cf123199ffba6e98d6096a7898759768cf1fe6:index.js
const ul = document.querySelector("#card")
const button = document.querySelector("button")


<<<<<<< HEAD:src/index.js
function renderChamps(champObj) {
=======
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
>>>>>>> 11cf123199ffba6e98d6096a7898759768cf1fe6:index.js
    const li = document.createElement("li")
        li.innerHTML = `
            <img src = "${champObj.image}" style="width:100%">
            <div class="container">
                <h4>${champObj.name}</h4>
                <p>${champObj.bio}</p>
                <br>
                <button>comments</button>
<<<<<<< HEAD:src/index.js
            </div>
        `
    ul.append(li)


}

=======
}
>>>>>>> 11cf123199ffba6e98d6096a7898759768cf1fe6:index.js

button.addEventListener('click', renderComment())

<<<<<<< HEAD:src/index.js

let champion
function initialize() {
    fetch('http://localhost:3000/champions')
        .then(resp => resp.json())
        .then(champObj => {
            console.log(champObj)
            champion = champObj
            renderChamps(champObj)
        })
=======
function renderComment(commentObj){
    const comments = document.querySelector("#commentList")
    commentObj.forEach(element => {
        const commentLi = createElement("li")
        commentLi.textContent = "${commentObj.comment}"
        comments.appendChild(commentLi)
    });
>>>>>>> 11cf123199ffba6e98d6096a7898759768cf1fe6:index.js
}
initialize()