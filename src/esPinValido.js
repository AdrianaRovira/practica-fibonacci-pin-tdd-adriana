

function esPinValido(pin){

    

      if (typeof pin !== 'string') {

       return false;
    }

    let bool = true;

    if(Number.isNaN(pin) || pin === ''){
       bool = false;
    }

    if(pin.length !== 4 && pin.length !== 6){
        bool = false;
    }

    if (/[a-zA-Z]/.test(pin)) {
    bool = false;
    }


    if (/[^a-zA-Z0-9]/.test(pin)) {
    
        bool = false;     
     }

     if (pin.split('').every(numero => numero === pin[0])) {
    
        bool = false;
    }

 



    return bool;
}

export{
    esPinValido
};