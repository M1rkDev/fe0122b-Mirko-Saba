var param = new URLSearchParams(location.search)
var id = param.get('id')

fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response => response.json())
.then(data => {
    var campi = data
    console.log(campi)

    var utente = campi.find(u => u.id == id)
    document.querySelector('#newNome').value = utente.name
    document.querySelector('#newCognome').value = utente.lastname
    document.querySelector('#newMail').value = utente.email
    document.querySelector('#newPw').value = utente.password

    
    console.log(utente)

document.querySelector('#boh').addEventListener('click',function(){

let newNome = document.querySelector('#newNome').value
let newCognome = document.querySelector('#newCognome').value
let newMail = document.querySelector('#newMail').value
let newPw = document.querySelector('#newPw').value



console.log(newNome)
console.log(newMail)
console.log(newPw)


fetch('https://sofin.wp-admin.it/public/api/v1/user/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: newNome,
        lastname: newCognome,
        email: newMail,
        password: newPw
    })
  })
  .then(response => response.json())
        .then(data => {
            alert("Dati aggiornati")
            setTimeout(function(){
                window.location.href="index.html";
            }, 2000);
            
              })

})

})