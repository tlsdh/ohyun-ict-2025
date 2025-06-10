//fetch("https://crudcrud.com/api/4e8ef90089cc4740a487ba043e81a76a/post").then((res)=>{return res.json()}).then((json)=>{console.log(json)})
console.log("??");
const post_url = "https://crudcrud.com/api/4e8ef90089cc4740a487ba043e81a76a/post"
const init = async ()=>{
    const res = await fetch("https://crudcrud.com/api/4e8ef90089cc4740a487ba043e81a76a/post")
    const json = await res.json();
    console.log(json);

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
    const Content = document.querySelector('#content').value;
    const data = {
        title:title,
        Content:Content
    }
    console.log(data)
    write(data);
}
document.querySelector("#post-form").addEventListener('submit',(e)=>{
    e.preventDefault()
    submit()
})
init()