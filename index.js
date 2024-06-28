const inputUser = document.getElementById("username")
const inputPass = document.getElementById("password")
const btnLimpiar = document.getElementById("btnLimpiar")
const btnEnviar = document.getElementById("btnEnviar")
const spanUser = document.getElementById("spanUsername")
const spanPass = document.getElementById("spanPassword")
const pRespuesta = document.getElementById("pRespuesta")
const usuariosRegistrados = [{username: "usuario1", password: "user01"}, {username: "usuario2", password: "user02"}, {username: "usuario3", password: "user03"}, {username: "usuario4", password: "user04"}]
let username = ""

function validaUsuarios(user, pass, allUser) {
    let usuarioValidado = false

    allUser.forEach(element => {        
        if (element.username == user && element.password == pass) {
            usuarioValidado = true
            username = element.username
        }

    });
    return usuarioValidado
}

btnEnviar.addEventListener("click", (e)=> {
    e.preventDefault()
    
    if (inputUser.value == "" && inputPass.value == "") {
        inputUser.style.border = "2px solid red"
        spanUser.innerText = "Ingrese su usuario⚠️"
        inputPass.style.border = "2px solid red"
        spanPass.innerText = "Ingrese su contraseña⚠️"
    } else if (inputUser.value == "") {
        inputUser.style.border = "2px solid red"
        spanUser.innerText = "Ingrese su usuario⚠️"
    } else if (inputPass.value == "") {
        inputPass.style.border = "2px solid red"
        spanPass.innerText = "Ingrese su contraseña⚠️"
    } else {

        const validacion = validaUsuarios(inputUser.value, inputPass.value, usuariosRegistrados)  
                
        if (validacion) {
            pRespuesta.innerHTML = `Sesión iniciada para ${username}`
            pRespuesta.style.color = "green"
        } else {
            pRespuesta.innerHTML = "Credenciales incorrectas"
            pRespuesta.style.color = "red"
        }
        
    }


})

btnLimpiar.addEventListener("click", e => {
    e.preventDefault()
    inputUser.value = ""
    inputPass.value = ""
    inputUser.style.border = "2px solid black"
    inputPass.style.border = "2px solid black"
    spanUser.innerText = ""
    spanPass.innerText = ""
    pRespuesta.innerHTML = ""    
})