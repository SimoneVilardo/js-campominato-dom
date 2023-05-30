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

// VARIABILE DI CONTROLLO
let giocoAttivo = true;

//FACCIO IN MODO CHE CON IN CLICK APPAIA LA GRIGLIA
bottone.addEventListener('click', function(){
    let clickforwin = 0;
    griglia.innerHTML = '';
    let difficolta = selezione.value;
    const arrayBombe = [];
    
    // VARIABILE DI CONTROLLO
    let giocoAttivo = true;


    // CONDIZIONE PER FAR APPARIRE LE VARIE GRIGLIE IN BASE ALLA DIFFICOLTA SCELTA
    if(difficolta === 'Facile'){
   
        for( let i = 1; i <= 100; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato-tre');
            
            quadrato.innerText = i;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
                
                if(!giocoAttivo){
                    return
                }

                if (arrayBombe.includes(i)) {
                    // SE IL NUMERO E' PRESENTE NELLA LISTA DELLE BOMBE, SI E' CLICCATA UNA BOMBA
                    quadrato.classList.add('bomba');
                    alert(`Hai CLICCATO una BOMBA! PARTITA TERMINATA! IL TUO PUNTEGGIO: ${clickforwin}`);

                    giocoAttivo = false;
                    
                  } 
                  else if(!arrayBombe.includes(i)){
                      quadrato.classList.add('cambio-colore');
                      //stampa in console numero cliccato
                      console.log(i);
                      clickforwin++
                      if(clickforwin === (100 - 16)){
                          giocoAttivo = false;
                          alert('COMPLIMENTI! HAI VINTO!')
                      }
                  }
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
            
        };

        // POPOLO L'ARRAY
        while (arrayBombe.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 100) + 1;
            if (!arrayBombe.includes(numeroCasuale)) {
              arrayBombe.push(numeroCasuale);
            }
          }
          console.log(arrayBombe)


    } else if (difficolta === 'Normale'){

        for( let i = 1; i <= 81; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato-due');
    
            quadrato.innerText = i;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
               
                if(!giocoAttivo){
                    return
                }

                if (arrayBombe.includes(i)) {
                    // SE IL NUMERO E' PRESENTE NELLA LISTA DELLE BOMBE, SI E' CLICCATA UNA BOMBA
                    quadrato.classList.add('bomba');
                    alert(`Hai CLICCATO una BOMBA! PARTITA TERMINATA! IL TUO PUNTEGGIO: ${clickforwin}`);

                    giocoAttivo = false;
                    
                  } 
                  else if(!arrayBombe.includes(i)){
                    quadrato.classList.add('cambio-colore');
                    //stampa in console numero cliccato
                    console.log(i);
                    clickforwin++
                    if(clickforwin === (81 - 16)){
                        giocoAttivo = false;
                        alert('COMPLIMENTI! HAI VINTO!')
                    }
                }
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
        };
        

        // POPOLO L'ARRAY
        while (arrayBombe.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 81) + 1;
            if (!arrayBombe.includes(numeroCasuale)) {
              arrayBombe.push(numeroCasuale);
            }
          }
          console.log(arrayBombe)

    } else {
        for( let i = 1; i <= 49; i++){
            //CREO IL SINGOLO QUADRATO
            let quadrato = creazioneQuadrato();
            // AGGIUNGO UNA CLASSE 
            quadrato.classList.add('quadrato');
    
            quadrato.innerText = i;
            
            // AL CLICK NEL QUADRATO ESSO CAMBIA COLORE E RESTITUISCE IN CONSOLE IL NUEMRO DELLA CASELLA
            quadrato.addEventListener('click', function(){
               
                if(!giocoAttivo){
                    return
                }

                if (arrayBombe.includes(i)) {
                    // SE IL NUMERO E' PRESENTE NELLA LISTA DELLE BOMBE, SI E' CLICCATA UNA BOMBA
                     quadrato.classList.add('bomba');
                    alert(`Hai CLICCATO una BOMBA! PARTITA TERMINATA! IL TUO PUNTEGGIO: ${clickforwin}`);

                    giocoAttivo = false;
                    
                  } 
                  else if(!arrayBombe.includes(i)){
                    quadrato.classList.add('cambio-colore');
                    //stampa in console numero cliccato
                    console.log(i);
                    clickforwin++
                    if(clickforwin === (49 - 16)){
                        giocoAttivo = false;
                        alert('COMPLIMENTI! HAI VINTO!')
                    }
                }
            });
            
            // MOSTRO TUTTO A SCHERMO CON .APPEND()
            griglia.append(quadrato);
        };

        // POPOLO L'ARRAY
        while (arrayBombe.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 49) + 1;
            if (!arrayBombe.includes(numeroCasuale)) {
              arrayBombe.push(numeroCasuale);
            }
          }
          console.log(arrayBombe)
    }; 
     
});