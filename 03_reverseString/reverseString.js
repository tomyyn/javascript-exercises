const reverseString = function(s) {
    let res='';
    for(let i = s.length-1; i>=0; i--) res+=s.substr(i,1);
    return res;
};

// Do not edit below this line
module.exports = reverseString;
