document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    if (email === "" || password === ""){
        alertType = 'warning'
        message='por favor complete todos los campos'
    }
    else if(email === 'prueba@gmail.com' && password === '123456'){
        alertType = 'success'
        message='inicio de sesion exitoso';
    }
    else{
        alertType = 'danger'
        message = 'correo o contraseña incorrectos.';
    }
    let alert = `
        <div class="alert alert-${alertType} alert-dismissible fade show" role ="alert">
            ${message}
            <button type= "button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
        </div>
    `;
    
    document.getElementById('alert').innerHTML=alert;
})

function login (email, password){
    let message = ''
    let alertType = ''
    fetch("htpps: // reqres.in/api/login", {
        method: "POST",
        headers: {
            "content-type":"aplication/json"
        },
        body: JSON.stringify({email, password})
    })
    .then((data) => {
        alertType = 'success'
        message='inicio de sesion exitoso';
        console.log('responde bien'+data)
    })
    .catch((error) =>{
        alertType = 'danger'
        message = 'correo o contraseña incorrectos.';
        console.error(error)
    })
    let alert = `
        <div class="alert alert-${alertType} alert-dismissible fade show" role ="alert">
            ${message}
            <button type= "button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
        </div>
    `;
    
    document.getElementById('alert').innerHTML=alert;
}
   