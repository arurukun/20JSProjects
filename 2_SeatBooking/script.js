const container=document.querySelector(".container");
const seat=document.querySelectorAll(".row .seat:not(.occupied)");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieSelect=document.getElementById("movie");

const ticketPrice=Number(movieSelect.value);

// console.log(+movieSelect.value);
// console.log(ticketPrice);

container.addEventListener("click", e =>{
    if(e.target.classList.contains("seat") ){
        console.log(e.target)
    }
})
