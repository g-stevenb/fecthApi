// console.log("funci")
var form = document.getElementById('formulario')
var respuesta = document.getElementById('etiqueta')
var resp = document.getElementById('respuesta')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("me distec un click")

    var datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php', {
            method: "POST",
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data === "Llena todos los cambios") {
                resp.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    LLena todos los campos
                </div>
                `
            } else {
                resp.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `

            }
        })
})