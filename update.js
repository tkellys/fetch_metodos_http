// UPDATE COM PUT 

const headers = {
    'Content-type': 'application/json; charset=UTF-8'
}


const updatePost = async (id,body) => {

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    let options = {
        method:'PUT',
        body: body
        }
  

let response = await fetch(url,options,headers);
let json = await response.json()

console.log(json);
 }

updatePost(2, {
    title: 'Teste UPDATE',
    body: 'teste update body',
    UserId: 20
    });