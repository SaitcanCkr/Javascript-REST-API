class Users{
    constructor(){
        this.url = "https://jsonplaceholder.typicode.com/users";
    }
    async getUserstoAPI(){
        
        const responseUsers = await fetch(this.url); 

        const userData = await responseUsers.json();

        

        return{
           user:userData,
        }
       
    }
}