const submit=document.getElementById("submit");
const search=document.getElementById("search");
const randomBtn=document.getElementById("random-btn");
const searchHeading=document.getElementById("serch-heading");
const meals=document.getElementById("meals");
const singleMeal=document.getElementById("single-meal");

https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

function searchMeal(e){
    e.preventDefault();
    
    singleMeal.innerHTML="";

    const searching=search.value
    // console.log(searching)

    // empty and show arror
    if(searching.trim()){
        
    }else{alert("Please enter a search term")}
}


submit.addEventListener("submit",searchMeal)
