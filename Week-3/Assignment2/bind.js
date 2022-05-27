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