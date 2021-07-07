function sumar (a,b);
if (typeof a =="number"&& typeof b == "number") {
    if(number.isInteger(a) && numeber ,isInteger(b) ){
        if(a>0 &&b >0){
            let suma =0;
            let longitud =1;
            while (a> 0  && b>0){
                suma+=((a+b )%10)*¨magnitud;
                a  =math.floor(a/10);
                b  =math.floor(b/10);
                magnitud *=10;


            }
        }else{
            throw error  ("los dos nuemros  debes ser positiva ");
    }
    }else{
            throw error  ("los dos nuemros  debes ser enteros ");
    }
    

} else{
    throw TypeError("los 2 deben ser numeros);
}

}