const id = document.getElementById("userid");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const adress = document.getElementById("adress");
const company = document.getElementById("company");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");

const ui = new UI();
const postUI = new PostUI();



const user = new Users();
const post = new Posts();


eventListeners();

function eventListeners() {
    
        document.addEventListener("DOMContentLoaded", getUsers);
        
       

}

function getUsers(e) {

    user.getUserstoAPI()
        .then(response => ui.showUsers(response.user))
        .catch(err => console.log(err));

    e.preventDefault();
}
function getUserPost(e) {

    const card = e.target.closest('.card');
    if (!card) return;

    const userId = card.dataset.userid;

    post.getPoststoAPI(userId)
        .then(response => postUI.showPosts(response.post))
        .catch(err => console.log(err));

    e.preventDefault();
}