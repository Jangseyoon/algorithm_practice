function arrayMax(A,n){   //n = A.length
  let currentMax = A[0];
  
  for (let i=1 ; i<=n-1; i++){
    if (currentMax < A[i]){
      currentMax = A[i];
    }
  }
  return currentMax   
}

A = [3,-1,9,2,12];
console.log(arrayMax(A,5));