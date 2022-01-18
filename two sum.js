var twoSum = function(nums, target) {
  let input = nums;
  
  for (i=0;i<=input.length;i++){
      for(j=i; j<=input.length;j++){
          if(input[i] + input[j] == target){
              let output = [i, j];
              return output
          }                        
      }
  }
};