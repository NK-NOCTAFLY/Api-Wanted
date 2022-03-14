const aplicacion = document.querySelector('.container')

const getUrl =  new URLSearchParams(window.location.search)

const API_URL = "https://api.fbi.gov/wanted/v1";
id = getUrl.get('id')


fetch(`${API_URL}/object/${id}`)
.then(res => res.json())
.then(data =>{
    const nombre  = document.createElement('p')
    const apodo = document.createElement('p')
    const Imagen = document.createElement('img')
    const Clasificacion = document.createElement('p')
    

    Imagen.src = data.images[0].original
    nombre.innerHTML = data.title
    apodo.innerHTML = data.aliases
    Clasificacion.innerHTML = data.subjects
    console.log(data)
    
    aplicacion.appendChild(Imagen)
    aplicacion.appendChild(nombre)
    aplicacion.appendChild(apodo)
    aplicacion.appendChild(Clasificacion)
})
.catch(err=> console.log(err))