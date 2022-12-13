const moneyPulus=document.getElementById("money-plus");
const moneyMinus=document.getElementById("money-minus");
const list=document.getElementById("list");
const balance=document.getElementById("balance");
const form=document.getElementById("form");
const text=document.getElementById("text");
const amount=document.getElementById("amount");

const dummyTransactionL=[
    {id:1,text:"rent-house-fee",amount:-50000},
    {id:2,text:"salary",amount:200000},
    {id:3,text:"utility",amount:-10000},
    {id:4,text:"food",amount:-20000}
]

const transaction=dummyTransactionL

function addTransaction(transaction){
    const sign=transaction.amount < 0 ? "-" : "+";
    const item=document.createElement("li")

    item.className="p-4 my-2 bg-white flex justify-between border-r-4 shadow-xl"
    item.classList.add(transaction.amount < 0 ? "border-red-600" : "border-green-600")
    item.innerHTML=`${transaction.text}<div class="flex space-x-2">
        <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="bg-red-200 hover:bg-red-300 rounded-sm transition px-1.5 py-0 border border-black">x</button>
    </div></li>`

    list.appendChild(item);
    // console.log(transaction.amount)
}

function init(){
    list.innerHTML="";
    transaction.forEach(addTransaction)
    updataValue()
}

function updataValue(){
    const amounts=transaction.map(item=>item.amount)

    // calculate all
    const total=amounts.reduce((acc,item)=>acc+=item,0)

    // calculate incom
    const income=amounts.filter(item=>item>0).reduce((acc,item)=>acc+=item,0);

    // calculate expense
    const expense=amounts.filter(item=>item<0).reduce((acc,item)=>acc+=item,0)*-1;
    // console.log(income)
    // console.log(expense)

    balance.innerText=`¥${total}`
    moneyPulus.innerText=`¥${income}`
    moneyMinus.innerText=`¥${expense}`
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let eachItem

    if(text.value.trim() === "" || amount.value.trim() === ""){
        return alert("Please add a text and amount")
    }else{
        eachItem={
            id:createId(),
            text:text.value,
            amount:+amount.value,
        };
    }

    transaction.push(eachItem)
    addTransaction(eachItem)
    updataValue()
    console.log(eachItem)

    text.value="";
    amount.value=""
})

function createId(){
    return Math.floor(Math.random()*100000000)
}
console.log(createId)

init()