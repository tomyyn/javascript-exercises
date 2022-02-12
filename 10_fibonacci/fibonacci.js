const fibonacci = function(n) {
    if(n<1) return "OOPS";
    if(typeof n == "string")
    {
        n=+n;
        if(isNaN(n)) return "OOPS"
    }
    let act = 1;
    let ant = 1;
    let aux;
    for(let i=3;i<=n;i++)
    {
        aux = act;
        act+=ant;
        ant=aux;
    }
    return act;
};

// Do not edit below this line
module.exports = fibonacci;
