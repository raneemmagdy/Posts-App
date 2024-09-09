var posts=document.getElementById('posts');
var data=[]
var myHttp=new XMLHttpRequest();
myHttp.open('GET','https://jsonplaceholder.typicode.com/posts')
myHttp.send()
myHttp.addEventListener('load',function(){
  data=JSON.parse(myHttp.response)
  console.log(data)
  displayData()
})



function displayData(){
  var cartona=''
  for (let index = 0; index < data.length; index++) {
    cartona+=` <div class="col-md-4 mb-3 text-center">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title fs-1">${data[index].id}</h5>
              <h6 class="card-subtitle mb-4">${data[index].title}</h6>
              <p class="card-text">${data[index].body}</p>
            
            </div>
          </div>
        </div>`
    
  }
  posts.innerHTML=cartona
}