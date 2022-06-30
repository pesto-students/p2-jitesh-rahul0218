const all =require('./1')

// console.log(all.mathOperations.sum(1,2));
// console.log(all.mathOperations.diff(1,2));
// console.log(all.mathOperations.product(1,2));

 test('Testing math functions are working or not',()=>{
     expect(all.mathOperations.sum(1,2)).toBe(3);
     expect(all.mathOperations.diff(1,2)).toBe(-1);
     expect(all.mathOperations.product(1,2)).toBe(2);
 });


 //jest package and json file not pushing to the git as it contains too many files.
 //it will taking care in local machine