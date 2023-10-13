function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
    };
  };
  return false
};

/* 
O(n^2)
*/

/* 
takes the arguments of an array of integers and a target integer in hasTargetSum
  iterates through the array once
    iterates through the array twice
      compares the indexes from both iterations
        returns true if any integers add up to the target integer
   once it runs through all of the loops, if it is not true, it returns false
*/

/*
The function iterates over the array once, then again a second time.
Through these iterations, each different integer is added together and
then compared with the target integer. If the sum is the same as the target
integer, it returns true. If not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 11, 8, 14], 15));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 7, 18], 8));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
