//fetch("https://crudcrud.com/api/cbfed77be6054adbbe1bbc56f3414044").then((res)=>{return res.json()}).then((json)=>{console.log(json)})
console.log("??");
const post_url = "https://crudcrud.com/api/7a26a0ca3d8148bea7f147354a5a5901/post";
const init = async ()=>{
    const res = await fetch(post_url);
    const json = await res.json();
    console.log(json);
    json.forEach(post => {
        const postLi = document.createElement("li");
        postLi.innerText = post.title;
        document.querySelector("#board").appendChild(postLi);
        const contentDiv = document.createElement("div");
        contentDiv.innerText = post.content;
        postLi.appendChild(contentDiv);
        contentDiv.style.display = 'none';
        postLi.addEventListener('click',()=>{
            if (contentDiv.style.display == 'block') {
                contentDiv.style.display = 'none';
            }else{
                contentDiv.style.display = 'block';
            }
        });
    });

}
const write = async (data)=>{
    const res = await fetch(post_url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
}


const submit = ()=>{
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const data = {
        title:title,
        content:content
    }
    console.log(data)
    write(data);
}
document.querySelector("#post-form").addEventListener('submit',(e)=>{
    e.preventDefault()
    submit()
})
document.querySelector("#toggle-write").addEventListener("click",()=>{
    if(document.querySelector("#post-form").style.display == 'block'){
        document.querySelector("#post-form").style.display = 'none'
    }else{
        document.querySelector("#post-form").style.display = 'block'
    }
});

init()