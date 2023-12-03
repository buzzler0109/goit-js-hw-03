function getShippingCost(country) {
  let price;
  switch (country) {
    case `China`:
      price = 100;
      break;
    case `Chile`:
      price = 250;
      break;
    case `Australia`:
      price = 170;
      break;
    case `Jamaica`:
      price = 120;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

function getExtremeElements(array) {
  return `[${array[0]}, ${array[array.length - 1]}]`;
}

console.log(getExtremeElements(['apple', 'peach', 'pear']));

console.log(Number([1, 2, 3])); // NaN

function getLength(array) {
  return array.join('').length;
}
console.log(getLength(['top', 'picks', 'for', 'you']));

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}

console.log(calculateEngravingPrice('Web-development is creative work', 20));

function getSlice(array, value) {
  if (!array.includes(value)) {
    return `[]`;
  } else {
    return array.slice(0, array.indexOf(value) + 1);
  }
}
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));

function createArrayOfNumbers(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArrayOfNumbers(29, 34));

function calculateTotalPrice(order) {
  let summ = 0;
  for (let i = 0; i < order.length; i++) {
    summ += order[i];
  }
  return summ;
}

console.log(calculateTotalPrice([164, 48, 291]));

function getEvenNumbers(start, end) {
  let div = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      div.push(i);
    }
  }
  return div;
}
console.log(getEvenNumbers(3, 11));

function checkStorage(storage, item) {
  let answer;
  if (storage.includes(item.toLowerCase())) {
    answer = `${item.toLowerCase()} is available to order!`;
  } else {
    answer = `Sorry! We are out of stock!`;
  }
  return answer;
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));

function getCommonElements(array1, array2) {
  const array3 = [];
  for (let i = 0; i < array2.length; i++) {
    if (array1.includes(array2[i])) {
      array3.push(array2[i]);
    }
  }
  return array3;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

function calculateTotalPrice(order) {
  let result = 0;
  for (const num of order) {
    result += num;
  }
  return result;
}
console.log(calculateTotalPrice([164, 48, 291]));

function createReversedArray() {
  const args = Array.from(arguments).toReversed();
  return args;
}

console.log(createReversedArray(164, 48, 291));

function slugify(title) {
  let slug;
  slug = title.toLowerCase().split(' ');
  const result = slug.join('-');
  return result;
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

function makeArray(firstArray, secondArray, maxLength) {
  const newArr = firstArray.concat(secondArray);
  const result = newArr.slice(0, maxLength);
  return result;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

function filterArray(numbers, value) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
