// you need to write a function, which accepts infinite number parameters
// and returns an array, which has the same parameter only once
function filter() {
  // write your solution here
  // do not forget to use es6 syntax
  let result = [];
  for(let i = 0; i < infinitNum.length; i++) {
    if(!result.includes(infinitNum[i])) {
      result.push(infinitNum[i]);
    } 
  }
 return result;
}


module.exports = filter;
