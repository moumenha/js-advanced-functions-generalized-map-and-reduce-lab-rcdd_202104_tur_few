// Add your functions here

function map(a, b) {
  let arr = [];
  for (let i=0; i <b.length; i++){
  arr.push(b(arr[i]));
}
return arr;
}

