const removeFromArray = function(arr,del) {
    args=Array.from(arguments);
    for(let i = 1; i<args.length;i++) arr = arr.filter(val=>{return (!(val===args[i]))});
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
