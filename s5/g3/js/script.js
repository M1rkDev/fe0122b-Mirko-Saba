

function cambiaStile(){
    document.getElementById('uno').style.fontSize = '50px';
}

function cambiaColore(){
    document.getElementById('uno').style.color = 'green';
}

function maiuscolo(){
    document.getElementById('uno').style.textTransform = 'uppercase';
}

function nascondi(){
    document.getElementById('uno').style.visibility = 'hidden';
}

function mostrare(){
    document.getElementById('uno').style.visibility = '';
}

//
function mostraNav(){
   var x = document.getElementById('bho2');
   if (x.style.display === "none"){
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }

}


function linea (){
    document.getElementById('lista').style.textDecorationLine = 'line-through';
}

function linea2 (){
    document.getElementById('lista1').style.textDecorationLine = 'line-through';
}

function linea3(){
    document.getElementById('lista2').style.textDecorationLine = 'line-through';
}

function linea4(){
    document.getElementById('lista3').style.textDecorationLine = 'line-through';
}