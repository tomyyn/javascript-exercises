const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce(
    (tot, n)=>{
      return tot+n;
    },0
  )
};

const multiply = function(a,b) {
  return a.reduce(
    (tot, n)=>{
      return tot*n;
    },1
  )
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if(a==0) return 1;
	let tot = a;
  for(let i=a-1;i>0; i--) tot*=i;
  return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
