

//Función fibonacci
function fibonacci(n){
    if(n < 0){
        throw new RangeError("solo números enteros >= 0");
    }

    if(n === 0){
        return 0;
    }

    if(n === 1){
        return 1;
    }

    let anterior = 0;
    let actual = 1;
    

    for(let i = 2; i <= n; i++){

            let temp = actual;
            actual += anterior;
            anterior = temp;
     
        
    }
    return actual;
}

export{
    fibonacci
};