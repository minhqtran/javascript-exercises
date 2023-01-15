const repeatString = function(arr, value) {
  if(value < 0) return "ERROR";
  let str = '';
  for (let i = 0; i < value; i++){
    str += arr;
  }
  
  return str;
};

console.log(repeatString("sldk", -1));


// Do not edit below this line
module.exports = repeatString;
