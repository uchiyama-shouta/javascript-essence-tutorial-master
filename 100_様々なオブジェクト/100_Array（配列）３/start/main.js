const arry = [1, 2, 3, 4, 5];

const result = arry.reduce((accu, curr) => {
   console.log(accu, curr)
   return accu + curr
}, 0)