fetch('regioni.json')
.then(response => response.json())
.then(regioni => {

    let lista = document.querySelector('#lista')
    function optionMenu(){
    
    
    lista.addEventListener('change', stampaProvince)

    for(var i= 0; i < regioni.length; i++){

        var option = document.createElement('option')

        option.setAttribute('value', regioni[i].prov_regione)

        option.innerText = regioni[i].prov_regione 

        lista.append(option)
    }

    }

    optionMenu()


    function stampaProvince(){
    
    fetch('province.json')
    .then(response => response.json())
    .then(province => {

        let lista2 = document.querySelector('#prov')
        lista2.addEventListener('change', stamp)

        
        var regSelez = lista.value;
        
        
            //da riga 41 a riga 50: Faccio in modo che nel select province non si aggiungano province di altre regioni
            lista2.querySelectorAll('option').forEach((a)=>{ //serve per rimuovere l'elemento selezionato remove()
                a.remove()
            })
            
            var option3 = document.createElement('option')
            option3.setAttribute('disabled', "disabled")
            option3.innerHTML = 'province'
            option3.value = '' //imposto il valore vuoto in modo da poterlo selezionare nonostate sia disabled
            lista2.append(option3)
            lista2.value = ''
            document.querySelector('#due').setAttribute('src', '') //svuoto immagine provincia al click di un altra regione
            document.querySelector('#secondo').innerText = ''   //svuoto nome provincia al click di un altra regione
            //
    for( var i = 0; i < province.length; i++){
        if(province[i].prov_reg == regSelez){
            
        
            var option2 = document.createElement('option')

            option2.setAttribute('value', province[i].prov_nome)

            option2.innerText = province[i].prov_nome

            
            lista2.append(option2)

            document.querySelector('#primo').innerText = province[i].prov_reg
            document.querySelector('#uno').setAttribute('src', province[i].prov_url)

            
        }
        
    }
        
    
    })

    
}

function stamp(){
            
    let lista2 = document.querySelector('#prov')

    

    fetch('province.json')
    .then(response => response.json())
    .then(province => {

        for( var i = 0; i < province.length; i++){
        
            if(lista2.value == province[i].prov_nome){
                
                
                document.querySelector('#secondo').innerText = province[i].prov_nome
                document.querySelector('#due').setAttribute('src', '/assets/img/province/'+ province[i].prov_nome + '.png')
            }
        }

    })
    
            }

})



