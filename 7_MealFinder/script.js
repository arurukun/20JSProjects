const submit=document.getElementById("submit");
const search=document.getElementById("search");
const randomBtn=document.getElementById("random-btn");
const searchHeading=document.getElementById("search-heading");
const meals=document.getElementById("meals");
const singleMeal=document.getElementById("single-meal");

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

async function searchMeal(e){
    e.preventDefault();
    
    singleMeal.innerHTML="";

    const searching=search.value
    // console.log(searching)

    // empty and show arror
    if(searching.trim()){
        const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searching}`)
        
        searchHeading.innerHTML=`<div class="text-1xl mt-5">Search result for "${searching}"</div>`
        
        if(data.meals === null){
            searchHeading.innerHTML=`<div class="text-1xl mt-5">There are no search result.Try again!</div>`
        }else{
 
            
            meals.innerHTML=
            `<div class="grid grid-cols-2 gap-4">
                ${data.meals.map(meal=>`
                <div class="w-48 h-48 mt-8 bg-[url(${meal.strMealThumb})] bg-cover border border-grey-400">
                    <div id=${meal.idMeal} class="hover:bg-[rgba(0,0,0,0.4)] bg-[rgba(0,0,0,0.7)] h-full w-full flex justify-center items-center transition">
                        <h3 class="text-white">${meal.strMeal}</h3>
                    </div>
                </div>
                `).join('')}
            </div>`
            console.log(data.meals[0].strMealThumb)
        }
        
    }else{alert("Please enter a search term")}
}


submit.addEventListener("submit",searchMeal)

meals.addEventListener("click",e=>{
    const mealInfo=e.path[0]

    const mealId=mealInfo.getAttribute("class")
    console.log(mealId)
})
