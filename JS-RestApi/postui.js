const PostUI = class PostUI {
    constructor() {
        this.cardDiv = document.getElementById("card");
    }
    showPosts(posts) {
                
        this.cardDiv.innerHTML = ""; 
        posts.forEach((post) => {
            const postCard = document.createElement("div");
            const button = document.createElement("button");
            button.textContent = "Kullanıcılar sayfasına git.";
            button.classList = "btn btn-primary col-lg-4 col-md-6";
            button.id=`btnUser${post.userId}`;
            postCard.classList="col-lg-4 col-md-6";

            

            postCard.innerHTML =`
             <div class="card">
              <div class="card-body">
                
                <p class="card-text" id="userid">${post.userId}</p>
                <p class="card-text" id="postid">${post.id}</p>
                <p class="card-text" id="title">${post.title}</p>
                <p class="card-text" id="body">${post.body}</p>           

              </div>
              </div>
            `;  
            this.cardDiv.appendChild(postCard);
            button.addEventListener("click",function(){
                window.open("index.html","_self");                
            });
            postCard.appendChild(button);
        });        
    }
}