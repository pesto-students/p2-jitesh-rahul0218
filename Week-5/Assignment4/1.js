const mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    diff: function(a,b) {
        return a - b;
    },
    product: function(a,b) {
        return a * b}
}
// console.log(mathOperations.sum(1,2));
// console.log(mathOperations.diff(1,2));
// console.log(mathOperations.product(1,2));


module.exports.mathOperations=mathOperations;