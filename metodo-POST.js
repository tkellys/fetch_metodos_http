// METODO POST - INCLUINDO UM NOVO POST ou USUARIO ou QUALQUeR COISA

const newPost = async () => {
    // fetch(url, options, header)

const url = 'https://jsonplaceholder.typicode.com/posts';
let options = {
    method:'POST',
    body:{
        title: 'Teste',
        body: 'este é um novo teste1',
        userId: 5
    }
}
const header = {
    'Content-type': 'application/json; charset=UTF-8'
}
let response = await fetch(url,options,header)
let data = await response.json()

console.log(data)
 }
// newPost();