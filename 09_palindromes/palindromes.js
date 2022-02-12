const palindromes = function (s) {
    s = s.replace(/\W/g,'')
    s = s.toLowerCase();
    let l = Math.floor(s.length/2);
    let L=s.length-1;
    for(let i=0; i<l;i++) {
        if(s.charAt(i) != s.charAt(L-i)) return false
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
