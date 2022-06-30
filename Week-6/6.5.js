function findPair(arr, size, n) {
    let mpp = new Map();
   
  
    for (let i = 0; i < size; i++) {
   
      
      if (mpp.has(arr[i]))
        mpp.set(arr[i], mpp.get(arr[i]) + 1);
      else
        mpp.set(arr[i], 1)
   
    
      if (n == 0 && mpp.get(arr[i]) > 1)
        return true;
    }
   
    if (n == 0)
      return false;
   
    for (let i = 0; i < size; i++) {
      if (mpp.has(n + arr[i])) {
        console.log("Pair Found: (" + arr[i] + ", " +
          + (n + arr[i]) + ")");
        return true;
      }
    }
   
    return false;
  }
   
  let arr = [-10, 20];
  let size = arr.length;
  let n = 30;
  findPair(arr, size, n);
  
  