// DOM ELEMENTS 
const championCard = document.querySelector(".card")
const form = document.querySelector(".sign-in")
// console.log(form)

// EVENT LISTENER
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userName = form[0].value
    // console.log(userName)
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_name: userName
        })
    })
        .then(resp => resp.json())
        .then(updatedData => {
            console.log("Success", updatedData)
        })


})



// POST Sign in 

// FETCH FUNCTION
function initialize() {
    fetch(`http://localhost:3000/champions`)
        .then(resp => resp.json())
        .then(championObj => {
            renderChampionObject(championObj)
        })
}
initialize()


function fetchComments() {
    fetch(`http://localhost:3000/comments`)
        .then(resp => resp.json())
        .then(commentObj => {
            // console.log(commentObj)
            // renderComments(commentObj)
        })
}
fetchComments()




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
            <h2>Comments</h2>
            <br>
            <ul data-id="${champion.id}"> 
            <form data-name=${champion.name} data-bio=${champion.bio} data-id=${champion.id} data-image=${champion.image} class="comment-form" id="${champion.id}-submit">
                <input type="textarea" name="comment" style="height:25px">
                <br>
                <input class="submit-button" type="submit" style="margin:10px">
            </form>
            </ul>
        </div>
        `

        championCard.append(newDiv)
        // console.log(champion)
    })
}
function addComment() {
    
    championCard.addEventListener("submit", (e) => {
        e.preventDefault()
        let comment = e.target.comment.value
        let id = e.target.dataset.id
        const ul = e.target.closest("ul")
        console.log(ul)
        // let name = e.target.dataset.name
        // let image = e.target.dataset.image
        // let bio = e.target.dataset.bio
   	const commentObj = {
           comment: comment,
           user_id: 23,
           champion_id: id
   }
       fetch("http://localhost:3000/comments", {
           method: 'POST',
           headers: {
                "Content-Type": "application/json"
   },
           body: JSON.stringify(commentObj),
   })
           .then(response => response.json())
           .then(newObj => {
               let li = document.createElement('li')
               li.textContent = comment
               ul.append(li)
           console.log("Success:", newObj)
   });
        
        
    })
}
addComment()




// function renderComments(commentObj) {
   
//     commentObj.forEach(comment => {
//         const selected = document.getElementById(`${comment.champion.id}-comment`)
//         const li = document.createElement('li')
//         li.textContent = comment.comment
//         // debugger
//         selected.append(li)

//    })

// }












































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

