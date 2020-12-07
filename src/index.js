// DOM ELEMENTS 
const championCard = document.querySelector(".card")
const form = document.querySelector(".sign-in") 
// console.log(form)

// EVENT LISTENER
form.addEventListener("submit", (e) => {
    preventDefault()
const userName = form[0].value
console.log(userName)
fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        user_name: userName
    }),
})
    .then(resp => resp.json())
    .then(updatedData => {
        console.log("Success", updatedData)
    })

   
})  



// POST Sign in 

// FETCH FUNCTION

let globalVariableName
function initialize() {
    fetch(`http://localhost:3000/champions`)
        .then(resp => resp.json())
        .then(championObj => {
            // console.log(championObj)
            renderChampionObject(championObj)
        })
}
initialize()




// RENDER FUNCTION 
function renderChampionObject(championObj) {
    championObj.forEach(champion => {
        const newDiv = document.createElement('div');
        newDiv.className = "champion-card"
        newDiv.dataset.id = champion.id
        newDiv.innerHTML = `
        <img src="${champion.image}">
            <h2>${champion.name}</h2>
            <p>${champion.bio}</p>
            <ul>Comments</ul>
        </div>
        `

        championCard.append(newDiv)
        // console.log(champion)
    })
}















































// const url = ""
// const commentURL = ""
// const ul = document.querySelector("#card")
// const button = document.querySelector("button")


// let champ = ""
// let comments = ""

// fetch(url)
//     .then(response => response.json())
//     .then(champObj => {
//         champ = champObj
//         renderChamp(champObj)
//     });

// fetch(commentURL)
//     .then(response => response.json())
//     .then(commentObj => {
//         comments = commentObj
//         renderComment(commentObj)
//     });

// const renderChamp = (champObj) => {
//     const li = document.createElement("li")
//         li.innerHTML = `
//             <img src = "${champObj.image}" style="width:100%">
//             <div class="container">
//                 <h4>${champObj.name}</h4>
//                 <p>${champObj.bio}</p>
//                 <br>
//                 <button>comments</button>
// }

