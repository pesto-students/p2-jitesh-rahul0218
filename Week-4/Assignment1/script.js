const getNumber = new Promise((resolve, reject)=>{
    const randomNumber = parseInt(Math.random() *100);
     setTimeout(()=>{
         return (randomNumber % 5 === 0 ? reject (`rejected  number ${randomNumber}`) : resolve (`Resolve number ${randomNumber}`));
     }, 1000);
 
 })
 getNumber.then((val)=>console.log(`Resolve - ${val}`))
     .catch((val)=>console.error(`Reject - ${val}`))
     .finally(()=>console.error(`Finally`));