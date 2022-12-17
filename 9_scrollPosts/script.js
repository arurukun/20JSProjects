// https://jsonplaceholder.typicode.com/posts?_limit=3&_page=2

const filter=document.getElementById("filter");
const postsContainer=document.getElementById("posts-container");
const loading=document.querySelector(".loader");

// console.log(postsContainer);
let limit=4;
let page=1;

async function getPosts(){
    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

    // console.log(data)
    return data
    
}

async function showPosts(){
    const posts=await getPosts();
    // console.log(posts)

    posts.forEach(eachItem=>{
        const eachPost=document.createElement("div")
        eachPost.className=`post md:w-2/3 w-4/5  mx-auto bg-red-900 shadow-orange-300 m-6 px-4 pb-2 text-white shadow-2xl`
        eachPost.innerHTML=`
            <div class="number -ml-8 -mt-5 bg-red-500 w-fit px-3.5 py-1.5 rounded-full">${eachItem.id}</div>
            <div class="post-info">
                <h2 class="post-title text-xl font-bold ">${eachItem.title}</h2>
                <p class="post-body">${eachItem.body}</p>
            </div>
            `
            // console.log(eachItem.id)
        postsContainer.appendChild(eachPost)
    })
    disable=false


}

let disable=false

window.addEventListener("scroll",()=>{
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement

    if(scrollTop + clientHeight >= scrollHeight -20 && !disable){
        disable=true
        setTimeout(()=>{
            page++;
            showPosts()
        },300)
    }
})


filter.addEventListener("input",(e)=>{
    const omoji=e.target.value.toUpperCase()
    const eachArticle=document.querySelectorAll(".post")
    // console.log(omoji)

    eachArticle.forEach(each=>{
        const title=each.querySelector(".post-title").innerText.toUpperCase()
        const body=each.querySelector(".post-body").innerText.toUpperCase()
        // console.log(title)
        
        if(title.indexOf(omoji) > -1 || body.indexOf(omoji) > -1){
            each.classList.remove("hidden")
        }else{
            each.classList.add("hidden")
        }
    })
})


showPosts()