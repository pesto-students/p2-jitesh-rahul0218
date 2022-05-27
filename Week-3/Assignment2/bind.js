console.log('==============bind function==========================')
//bind

function sum(a,b){
    return this.a + this.b;
}
//console.log(sum());
//! bind bindes permanently
const sumB = sum.bind({a:10,b:20});
const sumC = sumB.bind({a:10,b:40});
console.log('This is output of sumB ' + sumB() +' as it is binded');
console.log('Sum of sumC will not change as it\'s binded with sumB permanently. so output is same as sumB ' +sumC());


console.log('==============Call function==========================')

//call
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

