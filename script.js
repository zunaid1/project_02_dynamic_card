//dummy data 

// const posts=[
//     {
//         title:"Title 1",
//         body:"This is body 1"
//     },

//     {
//         title:"Title 2",
//         body:"This is body 2"
//     },
//     {
//         title:"Title 3",
//         body:"This is body 3"
//     },
//     {
//         title:"Title 4",
//         body:"This is body 4"
//     },
//     {
//         title:"Title 5",
//         body:"This is body 5"
//     },
//     {
//         title:"Title 6",
//         body:"This is body 6"
//     },
//     {
//         title:"Title 7",
//         body:"This is body 7"
//     },
//     {
//         title:"Title 8",
//         body:"This is body 8"
//     }
// ]


/*
<div class="post">

</div>
*/

//fetch Data

const fecthData= async (config) => {
    const res = await axios (config);
    try{
        return res.data;



    }catch(error){
        throw Error("Data is not fetched.")
    }



}





//selection 
const postsElement = document.querySelector('.posts');

const loadAllData= async()=>{

const posts= await fecthData("https://jsonplaceholder.typicode.com/posts");


    posts.map(post =>{
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        
        postElement.innerHTML= `
        <h1 class="post-title">${post.id}</h1>
        <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body} </p>
        `;


        postsElement.appendChild(postElement);
    });

    
};

loadAllData();


