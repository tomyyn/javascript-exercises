const sumAll = function(a,b) {
    if(((a<0)||(b<0))||
    ((typeof a!= "number")||(typeof b != "number"))) return "ERROR";


    if(a>b){
        let aux;
        aux=a;
        a=b;
        b=aux;
    }
    let sum=0;
    for(let i=a; i<=b; i++) sum+=i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
