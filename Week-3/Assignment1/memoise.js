function memoize(fn){
    const cache = new Map();
    return function(...args){
        console.log('fn called with ' + args.toString());
        console.log(cache);
        if (cache.has(args.toString())){
            return cache.get(args.toString());
        }
       cache.set(args.toString(), fn(...args));
       return cache.get(args.toString());
    };
}

function add(a,b){
    return a+b;
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}
//Create a method called memoize such that:
const memoizeAdd=memoize(add);
//then calling...
console.log('Output is ' + memoizeAdd(100,100));//returns 200
console.log('Output is ' + memoizeAdd(100));//returns 100
console.log('Output is ' + memoizeAdd(100,200));//returns 300
console.log('Output is ' + memoizeAdd(100,100));//returns without computing 200
