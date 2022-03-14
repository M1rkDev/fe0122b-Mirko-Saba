document.querySelector('#login').addEventListener('click', function(){

    var emaillLogin = document.querySelector('#emailLogin').value
    var pwLogin = document.querySelector('#pwlogin').value

    fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {

        let checkUser = data.find(o => o.password == pwLogin && o.email == emaillLogin)

        console.log(checkUser)

        if(checkUser == undefined){
            alert('Email o Password NON CORRETTI!')
        }else{
            alert('Login Effettuato')
            setTimeout(function(){
                window.location.href = 'seiloggato.html'
            }, 2000); 
        }
    });

})