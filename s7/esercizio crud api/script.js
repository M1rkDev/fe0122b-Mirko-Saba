//chiamata get

fetch('https://sofin.wp-admin.it/public/api/v1/user')
  .then(response => response.json())
  .then(data =>{
    
    
    var campi = ['name','lastname','email','role']

    data.forEach(function (elemento){

    var select = document.querySelector('#prova')

    let cancella = document.createElement('button');
    cancella.innerText = 'Cancella'
    cancella.classList.add('delete')

    let modifica = document.createElement('a');
    modifica.innerText = 'Modifica'
    modifica.classList.add('modifica')
    modifica.href = '/edit.html?id=' + elemento.id

    let riga = document.createElement('tr');
    
    select.append(riga)

    
    
    

    for(let prop in elemento){
        if(campi.includes(prop)){

        let contenuto = typeof elemento[prop] == 'object' ? elemento[prop].nicename : elemento[prop];
        console.log(elemento[prop].nicename)

        let cella = document.createElement('td')

        cella.innerText = contenuto

        riga.append(cella)
        riga.append(cancella)
        riga.append(modifica)
        
    }
        }

        let edit = riga.querySelector('.modifica')
        modifica.setAttribute('id', 'modifica' + elemento.id)
        edit.addEventListener('click',function(){

            console.log(this.id)
            console.log('edit ok')

        })


        let elimina = riga.querySelector('.delete');

        elimina.addEventListener('click', function(){
            

            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user/' + elemento.id, 
                {
                    method: 'DELETE', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
            .then(() => riga.remove())
        })
  })


  
}
  );
