// const func1 = async() => {
//     const answere = await axios.get("https://reqres.in/api/users");

//     const {data, headers} = answere;
// }

const currency_one=document.getElementById("currency-one");
const amount_one=document.getElementById("amount-one");
const currency_two=document.getElementById("currency-two");
const amount_two=document.getElementById("amount-two");

const rate=document.getElementById("rate");
const swap=document.getElementById("swap");

// console.log(amount_one)

// https://api.exchangerate-api.com/v4/latest/USD

const calculate = async() => {
    localStorage.setItem("selectedRate", JSON.stringify({co:currency_one.value, ct:currency_two.value, ao:amount_one.value}))
    const currency_oneV=currency_one.value;
    const currency_twoV=currency_two.value;
 
    const data =await axios.get(`https://api.exchangerate-api.com/v4/latest/${currency_oneV}`);

    rate.innerText=`1 ${currency_oneV}=${data.data.rates[currency_twoV].toFixed(2)} ${currency_twoV}`
    opp_rate.innerText=`1 ${currency_twoV}=${(1/data.data.rates[currency_twoV]).toFixed(2)} ${currency_oneV}`

    amount_two.value=(amount_one.value*data.data.rates[currency_twoV]).toFixed(2)

}


function setData(){
    const selectedRate=JSON.parse(localStorage.getItem("selectedRate"))
    console.log(selectedRate)
    currency_one.value=selectedRate.co
    currency_two.value=selectedRate.ct
    amount_one.value=selectedRate.ao
}

const change = "change"
currency_one.addEventListener(change,
(e)=>{ 
    calculate(); 
    console.log(e);
}
);
currency_one.addEventListener("change", calculate);
amount_one.addEventListener("input",calculate);
currency_two.addEventListener("change",calculate);
amount_two.addEventListener("input",calculate);


swap.addEventListener("click",()=>{
    const saving=currency_one.value
    currency_one.value=currency_two.value
    currency_two.value=saving
    calculate()
})

// currency_one.addEventListener("change",setData);
// amount_one.addEventListener("input",setData);
// currency_two.addEventListener("change",setData);
// amount_two.addEventListener("input",setData);

setData();
calculate();

