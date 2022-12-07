//Ejercicios de Basic Data Structures
//Ejercicio 1
let yourArray = ['flor',2,3,true,false];

//Ejercicio 2
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray [1] = 1;
// Only change code above this line
console.log(myArray);

//Ejecicio 3
function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift("I", 2, "three")
  arr.push(7, "VIII", 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  Ejercicio 4
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//  Ejercicio 5
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1);
arr.splice(3,4)
arr.splice(6,7)
// Only change code above this line
console.log(arr);

//Ejercicio 6
function htmlColorNames(arr) {
  // Only change code below this line
arr.splice (0,2,"DarkSalmon", "BlanchedAlmond")
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Ejercicio 7
function forecast(arr) {
    // Only change code below this line
  ;
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  //Ejercicio 8
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
    newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  //Ejercicio 9
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  //Ejercicio 10
  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
      return true;
    } else {
      return false;
  }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  //Ejercicio 11
  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //Ejercicio 12
  let myNestedArray = [
    // Only change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [ ["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // Only change code above this line
  ];

  //Ejercicio 13
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  // Only change code above this line
  
  console.log(foods);

  //Ejercicio 14
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45;
  // Only change code above this line
  
  console.log(userActivity);

  //Ejercicio 15
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  //Ejercicio 16
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  //Ejercicio 17
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    return userObj in users
    // Only change code above this line
  }
  
  console.log(isEveryoneHere('Alan'));

  //Ejercicio 18
  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
  if (userObj.hasOwnProperty("Alan") &&
  userObj.hasOwnProperty("Jeff") &&
  userObj.hasOwnProperty("Sarah") &&
  userObj.hasOwnProperty("Ryan")){
  return (true)}
  
  else {return false}
  }
  
    // Only change code above this line
  
  
  console.log(isEveryoneHere(users));

  //Ejercicio 19
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
   
  function countOnline(usersObj) {
    // Only change code below this line
    let num = 0;
    for (let users in usersObj) {
      if (usersObj[users].online === true) {
        num++;
    
    
    }
  }
  return num;
    // Only change code above this line
  }
   
  console.log(countOnline(users));

  //Ejercicio 20
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
   
  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj)
    // Only change code above this line
  }
   
  console.log(getArrayOfUsers(users));

  //Ejercicio 21
  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
   
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
   
  console.log(addFriend(user, 'Pete'));



  //ES6 Ejercicios

  //Ejercicio 1
  function checkScope() {
    let i = 'function scope';
    if (i===true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  

  //Ejercicio 2
  const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
 s [0]=2;
 s [1]=5;
 s [2]=7; 
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//Ejercicio 3
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

 Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Ejercicio 4
const magic = () => {
  return new Date();
};

//Ejercicio 5
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Ejercicio 6
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

//Ejercicio 7
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

//Ejercicio 8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Ejercicio 9
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today,tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

//Ejercicio 10
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today:highToday,tomorrow:highTomorrow}=HIGH_TEMPERATURES;

// Only change code above this line

//Ejercicio 11
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// Only change code above this line

//Ejercicio 12
let a = 8, b = 6;
[a,b] = [b,a]
// Only change code below this line

//Ejercicio 13
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//Ejercicio13
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half =({max,min})=>(max + min)/ 2.0; 
// Only change code above this line

//Ejercicio 14
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i=0; i<arr.length ;i++){
 failureItems.push (
   `<li class="text-warning">${result.failure[i]}</li>`
   );
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

//Ejercicio 15
