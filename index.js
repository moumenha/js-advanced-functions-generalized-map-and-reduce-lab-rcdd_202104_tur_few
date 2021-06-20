// Add your functions here

function map(obj, b) {
  let arr = [];
  for (let i=0; i <obj.length; i++){
  arr.push(b(obj[i]));
}
return arr;
}

