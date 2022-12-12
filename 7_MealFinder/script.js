const submit=document.getElementById("submit");
const search=document.getElementById("search");
const randomBtn=document.getElementById("random-btn");
const searchHeading=document.getElementById("search-heading");
const meals=document.getElementById("meals");
const singleMeal=document.getElementById("single-meal");

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}

async function searchMeal(e){
    e.preventDefault();
    
    singleMeal.innerHTML="";

    const searching=search.value
    // console.log(searching)

    // empty and show arror
    if(searching.trim()){
        const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
        
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
            // console.log(data.meals[0].strMealThumb)
        }
        
    }else{alert("Please enter a search term")}
}


submit.addEventListener("submit",searchMeal)

meals.addEventListener("click", async(e)=>{
    const mealInfo=e.path[0]

    const mealId=mealInfo.getAttribute("id")
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

    const meal=data.meals[0]

    let ingredient=[];
    for(let i=1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredient.push(`${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`)
        }else{
            break;
        }
    }
    console.log(ingredient)


    meals.innerHTML=`
    <div class='flex flex-col items-center justify-center'>
        <P class="m-5 text-xl font-bold">${meal.strMeal}</p>
        <img src=${meal.strMealThumb} class="w-96 h-96 object-cover"></img>
        <p class="font-bold mt-2">${meal.strArea ? meal.strArea : ""}</p>
        <p class="font-bold mt-2">${meal.strCategory ? meal.strCategory : ""}</p>
        <div class="mx-2 my-12 max-w-[300px]">${meal.strInstructions}</div>
        <ul class="mb-6">
            ${ingredient.map(ing=>`<li>${ing}</li>`).join("")}
        </ul>
    </div>`
    console.log(ingredient)
    console.log(meal)
})

randomBtn.addEventListener("click",async()=>{
    meals.innerHTML="";

    const {data}=await axios.get("https://www.themealdb.com/api/json/v1/1/random.php?")
    const meal=data.meals[0]

    let ingredient=[];
    for(let i=1;i<=20;i++){
        if(meal[`strIngredient${i}`]){
            ingredient.push(`${meal[`strIngredient${i}`]}-${meal[`strMeasure${i}`]}`)
        }else{
            break;
        }
    }
    console.log(ingredient)


    meals.innerHTML=`
    <div class='flex flex-col items-center justify-center'>
        <P class="m-5 text-xl font-bold">${meal.strMeal}</p>
        <img src=${meal.strMealThumb} class="w-96 h-96 object-cover"></img>
        <p class="font-bold mt-2">${meal.strArea ? meal.strArea : ""}</p>
        <p class="font-bold mt-2">${meal.strCategory ? meal.strCategory : ""}</p>
        <div class="mx-2 my-12 max-w-[300px]">${meal.strInstructions}</div>
        <ul class="mb-6">
            ${ingredient.map(ing=>`<li>${ing}</li>`).join("")}
        </ul>
    </div>`
    console.log(ingredient)
    console.log(meal)
})


// await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=su`)