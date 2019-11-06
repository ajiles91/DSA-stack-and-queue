//const _Node = require('./node')
const Stack = require('./stack')
const Queue = require('./queue')

function peek(stack) {
    //allows you to look at the top of the stack
    if (this.top == null) {
      return "Stack is empty";
    } else {
      return this.top.data;
    }
  }
  
function isEmpty(stack) {
//allows to check if stack is empty
if (this.top == null) {
    return "Stack is empty";
} else {
    return "Stack is not empty";
}
}

function display(stack) {
isEmpty(stack);
node = stack.top;
while (node !== null) {
    console.log(node.data);
    node = node.next;
}
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverse = new Stack();
    for(let i = 0; i < s.length; i++){
        reverse.push(s.charAt(i));        
    }
    for(let j = 0; j< s.length; j++){
        if(s[j] === reverse.pop()) continue;
        else return false;
    }
    return true;
}

function parentheses(str) {
    const openStack = new Stack();
  
    for(let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        openStack.push(str[i]);
      }
      if( str[i] === ')' || str[i] === ']' || str[i] === '}') {
        if(peek(openStack) === '(' && str[i] === ')'){
          openStack.pop();
        }
        if(peek(openStack) === '[' && str[i] === ']'){
          openStack.pop();
        }
        if(peek(openStack) === '{' && str[i] === '}'){
          openStack.pop();
        }
      }
    }
    if(!openStack) {
      return false
    } else {
      return true
    }
  }
  function sortStack(inputStack, tempStack = null, tempVar = null) {
    if (tempStack === null) {
      tempStack = new Stack();
    }
  
    if (inputStack.top === null) {
      inputStack = tempStack;
      return inputStack;
    }
  
    tempVar = inputStack.pop();
    if (tempStack.top === null || tempVar < tempStack.top.data) {
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    } else {
      while (tempStack.top !== null && tempVar > tempStack.top.data) {
        inputStack.push(tempStack.pop());
      }
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    }
  }

function main(){
    let starTrek = new Stack();

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    console.log(peek(starTrek))
    console.log(isEmpty(starTrek))
    display(starTrek)
    starTrek.pop()
    starTrek.pop()
    starTrek.pop()
    display(starTrek)

    // True, true, true, false
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));
    console.log(parentheses('(([[()'));

    const testStack = new Stack();

    testStack.push(5);
    testStack.push(3);
    testStack.push(9);
    testStack.push(22);
    testStack.push(1);
    display(sortStack(testStack));
}

main();