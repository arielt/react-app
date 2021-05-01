// Javascript playground

let name = 'Luna';
let age = 0;
const hasHobbies = false;

age = 1;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
}

/* 
const add = (a, b) => {
    return a + b;
};
*/

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(addRandom());
console.log(addOne(1));
console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: 'Luna',
  age: 0,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const hobbies = ['Sprots', 'Cooking', 1, true, {}]
for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map(hobby =>  'Hobby: ' + hobby));
console.log(hobbies);

console.log(person)
person.greet();

hobbies.push('Programming');
console.log(hobbies)

// rest and spread operators
console.log('*** rest and spread');
let copiedArray = hobbies.slice();
copiedArray = [...hobbies]; // spread operator
console.log(copiedArray);

const copiedPerson = {...person}; // spread operator
console.log(copiedPerson);

const toArray = (...args) => { // rest operator
  return args;
};
console.log(toArray(1, 2, 3));

// destructuring

const printName = ({ name }) => {
  console.log(name);
};

console.log('*** destructuring');
printName(person);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// async code
console.log('*** async');

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);  
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  }).then(text2 => {
    console.log(text2);
  });
}, 2000);

console.log('Hello!');
console.log('Hi');