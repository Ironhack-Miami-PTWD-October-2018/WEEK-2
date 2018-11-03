// function maxOfTwoNumbers (num1, num2){
//   if (num1 > num2){
//     return num1
//   } else if (num1 < num2){
//     return num2
//   } else {
//     return num1
//   }
// }

// es6 & ternary conditional
const maxOfTwoNumbers = (num1, num2) => {
    // ? => if
    // : => else
    return num1 > num2 ? num1 : num2
  }
  
  // maxOfTwoNumbers(444, 66);
  
  const words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpotyyyyyy'
  ];
  
  const findLongestWord = (anyArray) => {
    let longest = anyArray[0];
    for (let i = 0; i < anyArray.length; i++){
      if(longest.length  < anyArray[i].length){
        longest = anyArray[i];
      }
    }
    return longest;
  }
  // findLongestWord(words);
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10, 3];
  
  const sumArray = (someArr) => {
    if(someArr.length === 0){
      return undefined;
    }
    let sum = 0;
    for (let i=0; i< someArr.length; i++){
      console.log(typeof someArr[i])
      if(typeof someArr[i] === 'string'){
        someArr[i] = someArr[i].length;
      }
      sum += someArr[i];
    }
    return sum;
  }
  
  
  // sumArray(numbers);
  const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  
  const avg = (arr) => {
    return sumArray(arr)/arr.length;
  }
  
  // avg(numbers2)
  
  const words2 = [
      'seat',
      'correspond',
      'linen',
      'motif',
      'hole',
      'smell',
      'smart',
      'chaos',
      'fuel',
      'palace'
  ];
  
  // const foods = [];
  // sumArray(foods);
  
  const words3 = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'poison',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
  const uniquifyArray = (array) => {
    const uniqueArr = [];
    for(let i=0; i< array.length; i++){
      // if(uniqueArr.includes(array[i])){
      //   uniqueArr.push(array[i]);
      // }
      if(uniqueArr.indexOf(array[i]) === -1 ){
        uniqueArr.push(array[i]);
      }
    }
    return uniqueArr;
  }
  
  // uniquifyArray(words3);
  
  
  const doesWordExist = (someArr, someWord) => {
    let doesExist = false;
    for(let i=0; i<someArr.length; i++){
      if(someArr[i] === someWord){
        doesExist = true;
      }
    }
    return doesExist;
  }
  
  
  const words4 = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ];
  // doesWordExist(words4, "subse")
  
  const words5 = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  const howManyTimes = (anyArray, theWord) => {
    let count = 0;
    for (let i=0; i< anyArray.length; i++){
      if(anyArray[i] === theWord){
        count++;
      }
    }
    // return theWord + " appears " + count + " times."
    return `${theWord} appears ${count} times.`
  }
  
  // howManyTimes(words5, "matt");
  
  