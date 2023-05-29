//DEFINISCO LA FUNZIONE CHE CREA OGNI SINGOLO QUADRATINO
function creazioneQuadrato(){
    // CREO UNA VARIABILE CHE CREI IL DIV
    let quadrato = document.createElement('div');

    return quadrato;
};

// RECUPERO DAL DOM IL BOTTONE
const bottone = document.getElementById('btn');

// RECUPERO LA SELECT DAL DOM
let selezione = document.getElementById('difficolta');

// RECUPERO DAL DOM L'ELEMENTO IN CUI DEVO CREARE LA GRIGLIA
const griglia = document.getElementById('griglia');

//FACCIO IN MODO CHE CON IN CLICK APPAIA LA GRIGLIA
bottone.addEventListener('click', function(){
    griglia.innerHTML = '';
    let difficolta = selezione.value;
    // CONDIZIONE PER FAR APPARIRE LE VARIE GRIGLIE IN BASE ALLA DIFFICOLTA SCELTA
    if(difficolta === 'Facile'){
   
        for( let i = 0; i < 100; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato-tre');
    
            quadrato.innerText = i + 1;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
                this.classList.toggle('cambio-colore');
                console.log(quadrato.innerText)
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
        };

    } else if (difficolta === 'Normale'){

        for( let i = 0; i < 81; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato-due');
    
            quadrato.innerText = i + 1;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
                this.classList.toggle('cambio-colore');
                console.log(quadrato.innerText)
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
        };

    } else {
        for( let i = 0; i < 49; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato');
    
            quadrato.innerText = i + 1;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
                this.classList.toggle('cambio-colore');
                console.log(quadrato.innerText)
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
        };
    }
})


