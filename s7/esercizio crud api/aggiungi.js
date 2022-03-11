
fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response => response.json())
.then(data => {
    


document.querySelector('#boh').addEventListener('click',function(){

let newNome = document.querySelector('#newNome').value
let newCognome = document.querySelector('#newCognome').value
let newMail = document.querySelector('#newMail').value
let newPw = document.querySelector('#newPw').value
let newRole = document.querySelector('#newRole').value



fetch('https://sofin.wp-admin.it/public/api/v1/user' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: newNome,
        lastname: newCognome,
        email: newMail,
        password: newPw,
        role_id: newRole
    })
  })
  .then(response => response.json())
        .then(data => {
            alert("Utente inserito")
            setTimeout(function(){
                window.location.href="index.html";
            }, 2000);
            
              })

})

})