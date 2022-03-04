$(() =>{
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

    for (let i = 0; i < 16; i++) {
        
        let immagineRandom = Math.floor(Math.random() * mieImg.length);
        let immagineEliminata = mieImg.splice(immagineRandom, 1);


        $("#memory").append('<div class="images" id="emoji'+i+'"><img id="'+i+'" src="img/'+immagineEliminata+'.png"  width="130" height="130"></div>')
    }

    let immaginiCliccate = [];
    let counter = 0;

    $(".images").click(function(){

        if(counter < 8 ) {

        let clicks = $("#clicks").text();

        clicks++;


        $("#clicks").text(clicks);

        if(immaginiCliccate.length < 2){

            let imgId = $(this).children().attr('id');
            let imgSrc = $(this).children().attr('src');

            $(this).children().show()

            let infoImg = {
                id: imgId,
                src: imgSrc

            }
           
            immaginiCliccate.push(infoImg)

            if(immaginiCliccate.length == 2){

                if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                    
                    immaginiCliccate = [];
                    counter++;
                }else{
                    
                    setTimeout(function(){

                    $('#' + immaginiCliccate[0].id).hide()
                    $('#' + immaginiCliccate[1].id).hide()
                    immaginiCliccate = [];

                    
                    }, 500)
                }
                
            }
            
        }
}
        if(counter == 8){
            $('#vittoria').text('HAI VINTO!!')
        }

    });

    $("#reset").click(function(){
        location.reload();
    })
});
    


