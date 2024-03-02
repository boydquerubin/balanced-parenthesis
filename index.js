function hasBalancedParenthesis(s) {
  let stack = [];
  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(hasBalancedParens("()")); // true
console.log(hasBalancedParens("(Oh Noes!)(")); // false
console.log(hasBalancedParens("((There's a bonus open paren here.)")); // false
console.log(hasBalancedParens(")")); // false
console.log(hasBalancedParens("(")); // false
console.log(hasBalancedParens("(This has (too many closes.) ) )")); // false
console.log(hasBalancedParens("Hey...there are no parens here!")); // true
