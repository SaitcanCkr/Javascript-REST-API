class Posts{
    
    constructor(){
        this.url = `https://jsonplaceholder.typicode.com/posts?userId=`;
    }
    async getPoststoAPI(userId){
        const responsePosts = await fetch(this.url+`${userId}`); 

        const userPost = await responsePosts.json();

        

        return{
           post:userPost,
        }
       
    }
}