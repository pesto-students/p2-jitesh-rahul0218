// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     }
//   };
// }
// const stack = createStack();
// console.log(stack.push(20));
// console.log(stack.push(25));
// console.log(stack.push(35));
// console.log(stack.pop());
// console.log(stack.items);
// console.log(stack.items = [10, 100, 1000]);



function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack = createStack();
  console.log(stack.push(20));
  console.log(stack.push(25));
  console.log(stack.pop());
  console.log(stack.items);