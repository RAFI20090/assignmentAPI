function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => DisplayData(json))

}
const DisplayData=(posts)=>{
  //  console.log(posts);
    const container=document.getElementById('container');
    posts.forEach(post => {
        const {id,title,body:Description}=post;
        const DIV=document.createElement('div')
        DIV.classList.add('card');
      DIV.innerHTML=`
      <h1>Id:${id}</h1>
      <h1>Title:${title}</h1>
      <p> Description:${Description}</p>
      <button onclick="showDetails(${id})" >Details</button>
      `
        container.appendChild(DIV)
         console.log(post);
       
    });
}
const ShowDetails = (id) => {
 const url=`https://jsonplaceholder.typicode.com/todos/${id}`
 console.log(url);
 fetch(url)
  .then(res => res.json())
  .then(json => {
    const {id,title,body}=json;
    const SingleData=document.getElementById('SingleData')
  })
 
}
loadData()