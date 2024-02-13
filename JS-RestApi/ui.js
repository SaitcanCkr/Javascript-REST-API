const UI = class UI {
    constructor() {
        this.cardDiv = document.getElementById("card");
    }
    showUsers(users) {
        users.forEach((user) => {
            const userCard = document.createElement("div");
            userCard.classList = "col-lg-4 col-md-6";
    
            userCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <p class="card-text" id="userid">${user.id}</p>
                        <p class="card-text" id="name">${user.name}</p>
                        <p class="card-text" id="surname">${user.username}</p>
                        <p class="card-text" id="adress">${user.address.city}</p>
                        <p class="card-text" id="company">${user.company}</p>
                        <p class="card-text" id="email">${user.email}</p>
                        <p class="card-text" id="phone">${user.phone}</p>
                        <p class="card-text" id="website">${user.website}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary view-posts-btn" data-userid="${user.id}">${user.name}'ın Gönderilerine Git</button>
                    </div>
                </div>
            `;
    
            this.cardDiv.appendChild(userCard);
        });
    
        
        const viewPostsButtons = document.querySelectorAll('.view-posts-btn');
        viewPostsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.dataset.userid;
                
                window.location.href = `posts.html?userId=${userId}`;
            });
        });
    }
}