// First Approach Promise Chaining
fetch("https://api.github.com/users")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    const cards = document.querySelector('.cards');
    let allCards = ''
    data.map((val) => {
        allCards += `<div class="card">
        <img src="${val.avatar_url}">
        <h2 class="username">${val.login}</h2>
        <a href="${val.html_url}" class="button">
        <i class="fa fa-github"></i>
        GitHub
        </a>
    </div>`
    })
    cards.innerHTML = allCards;
})
.catch((err) => {
    console.log(err);
})


// Second Approach Async/Await
/*
async function API(){
    try {
        const cards = document.querySelector('.cards');
        let allCards = ''
        const res = await fetch("https://api.github.com/users");
         const data = await res.json();    
         await data.map((val) => { 
            allCards += `<div class="card">
         <img src="${val.avatar_url}">
         <h2 class="username">${val.login}</h2>
         <a href="${val.html_url}" class="button">
         <i class="fa fa-github"></i>
         GitHub
         </a>
     </div>`
         })
         cards.innerHTML = allCards
    } catch (error) {
     console.log('Error: ', error);
    }
 }
 API()
*/
