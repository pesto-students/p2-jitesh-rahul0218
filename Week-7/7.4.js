function equalParethesisCheck(singleSymbol)
{
    let stack = [];
    for(let i = 0; i < singleSymbol.length; i++){
        let x = singleSymbol[i];
        if (x == '(' || x == '[' || x == '{'){
           stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
            
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}
 
let singleSymbol = "([])";
if (equalParethesisCheck(singleSymbol)){
    console.log("True");
  }
else{
    console.log("False");
}



