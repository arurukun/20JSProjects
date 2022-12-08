const main=document.getElementById("main");
const add_user=document.getElementById("add_user");
const dubble=document.getElementById("dubble");
const show_millionaires=document.getElementById("show_millionaires");
const sort=document.getElementById("sort");
const calculate_wealth=document.getElementById("calculate_wealth");

let data=[];
// console.log(main);

// https://randomuser.me/api

async function getUser(){

    const res = await axios.get("https://randomuser.me/api");
    // console.log(res)

    const {data:{results}}=res;
    
    const newName=results[0].name.first+" "+results[0].name.last;
    
    const newUser={
        name:newName,
        money:Math.floor(Math.random()*1000000)
    }
    // console.log(newUser)
    data.push(newUser);
    upData(data)
}


function upData(providedData = data){
    main.innerHTML='<h2 class="text-1xl border-b border-black flex justify-between"><strong >PARSON</strong><div>WEALTH</div></h2>'
    // const name="shrawan"

    providedData.forEach( (item) =>{
        const element=document.createElement("div");
        element.className = "text-1xl flex justify-between";
        element.innerHTML=`<div >${item.name}</div><div>${formatMoney(item.money)}</div>`
        main.appendChild(element);
    } )
}

function formatMoney(number){
    return "$" + number.toFixed(2)
    // .toReplace(/\d(?=(\d{3})+\.)/g,`$&`);
}



add_user.addEventListener("click",getUser)

dubble.addEventListener("click",()=>{
    data.forEach( (item) => {
        item.money = item.money * 2
    })
    upData(data)
})

show_millionaires.addEventListener("click",()=>{
    const abc = data.filter((million)=>{
        return million.money>800000
    })
    data=abc
    upData(data)
})

sort.addEventListener("click",()=>{
    data.sort((x,y)=>{
        return y.money-x.money
    })
    upData(data)
})

calculate_wealth.addEventListener("click",()=>{
    const add=data.reduce((a,add)=>{
        return a+add.money
    },0)

    const element=document.createElement("div");
    element.className = "text-1xl flex justify-between mt-2 text-purple-600 font-bold";
    element.innerHTML=`<div >Total</div><div>${formatMoney(add)}</div>`
    main.appendChild(element);
})

getUser()
getUser()
getUser()

