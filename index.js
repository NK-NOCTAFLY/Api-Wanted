
const API_URL = "https://api.fbi.gov/@wanted?pageSize=500&page=1&sort_on=modified&sort_order=desc"
//const API_URL = "https://api.fbi.gov/wanted/v1";

const ul = document.createElement('ul');

const aplicacion = document.querySelector('.container')

fetch(`${API_URL}/list`)
.then ((response) => response.json())
.then((data) => {
    data.items.forEach((d) => {

        console.log(data)
        const p = document.createElement('p')
        p.setAttribute('id',d.uid)
        p.addEventListener('click',function(){

            window.location.href= `./persona.html?id=${d.uid}`
        })
        p.innerHTML = d.title
        aplicacion.appendChild(p)

    });
   
   // HTMLResponse.appendChild(ul);

})


.catch(err => console.log(err))


/*const API_URL = "https://api.fbi.gov/wanted/v1";
// Api url 

const xhr = new  XMLHttpRequest();

function onRequestHandler(){
const data = JSON.parse(this.response)
const HTMLResponse = document.querySelector("#app");
const tpl = data.items.map((d) => `<li>${d.title}</li>`);
HTMLResponse.innerHTML= `<ul>${tpl}</ul>`;
}

xhr.addEventListener("load",onRequestHandler);
xhr.open("GET" ,`${API_URL}/list`);
xhr.send();

*/