console.log('==============bind function==========================')
//bind

function sum(a,b){
    return this.a + this.b;
}
//console.log(sum());
//! It bindes permanently
const sumB = sum.bind({a:10,b:20});
const sumC = sumB.bind({a:10,b:40});
console.log('This is output of sumB ' + sumB() +' as it is binded');
console.log('Sum of sumC will not change as it\'s binded with sumB permanently. so output is same as sumB ' +sumC());


console.log('==============Call function==========================')

//call
//It take argument seperetly 
//it is usefull at complie time
function greet(){
    var reply=[this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
    var cats ={
        animal: 'cats', sleepDuration: '12 and 16 hours'
    };
    var dogs={
        animal: 'dogs', sleepDuration: '2 to 5 hours'
    };
greet.call(cats);
greet.call(dogs);

console.log('==============Apply function==========================')
//Apply
//It take argument as an array
//It is use at runtime.
var number = [5, 6, 90, 8];
var max = Math.max.apply(null, number);
console.log('Maximum element in array is '+max);

var min = Math.min.apply(null, number);
console.log('Minimum element in array is '+min);