//select 
const filterButtons = document.querySelectorAll("#myBtnContainer button");
const filterableCards = document.querySelectorAll(".filterable_cards .bard");
//filterCards
const filterCards = e => {
    document.querySelector(".btn.btn-outline-primary.active").classList.remove("active");
    e.target.classList.add("active");

    //iterare cards
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

//add listener
filterButtons.forEach(button => button.addEventListener("click", filterCards));

//join channel button
const joinBtn = document.getElementById('join-channel');

joinBtn.addEventListener('click', () => {
  window.open('https://t.me/nutrikatkapro', '_blank');
});


// //get-started button
// const getStartBtn = document.getElementById('get-started');

// getStartBtn.addEventListener('click', () => {
//   window.open('https://t.me/nutrikatkapro');
// });