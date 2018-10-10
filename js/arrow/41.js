var fn = a => ({id:a});

var fn2 = a => {
  return {id:a};
};


console.log(fn(1)); // {id:1}
console.log(fn2(1)); // {id:1}
