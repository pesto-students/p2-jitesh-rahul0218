function creatIncrement(){
   
    let count =0;
    function increment(){
        count++;
 
    }

    let message = `Count is ${count}`;//
    //message string is created at once but count changes
    //increment is happening in count but not in message.
    function log(){
        console.log(message);
    }
    return[increment, log];
}

const [increment, log] = creatIncrement();
increment();
increment();
increment();
log();

console.log('message string is created at once but count changes, increment is happening in count but not in message. That\'s why ans is 0')