const container=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(.occupied)");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieSelect=document.getElementById("movie");

// const ticketPrice=Number(movieSelect.value);
let ticketPrice= +movieSelect.value;

populateUI();

// console.log(+movieSelect.value);
// console.log(ticketPrice);

// update count and total
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll(".row .seat.selected");
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // console.log(selectedSeats)
    // console.log([...selectedSeats])
    // console.log(seatIndex)
    // console.log(seatIndex);

    localStorage.setItem("selectedSeat", JSON.stringify(seatIndex));

    const selectedSeatsCount=selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount * ticketPrice;
}

// for seat celect
container.addEventListener("click", e =>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied") ){
        // console.log(e.target)i
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
})

// for seat price
movieSelect.addEventListener("change", e =>{
    ticketPrice = +movieSelect.value;
    // console.log(e.target.selectedIndex,e.target.value)
    setMovieData(e.target.selectedIndex,e.target.value)
    updateSelectedCount();
})


function setMovieData(movieIndex,moviePrice){
    // console.log(movieIndex)

    // localStorage.setItem("selectedMovie",JSON.stringify([movieIndex,+moviePrice]));
            //  or
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}


function populateUI(){
    const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));

    // console.log(selectedSeat)

    if (selectedSeat !== null && selectedSeat.length > 0){
    // if (selectedSeat.length > 0 && selectedSeat !== null){
        seats.forEach((seat,index) => {
             if (selectedSeat.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }
    
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// initial count and total
updateSelectedCount();