// let randomValue = {name: "Lydia"}
// randomValue = 23
// if (!typeof randomValue === "String"){
//     console.log("It's not a string");
// } else {
//     console.log("Yay it's a string!");
// }

// const createMember = ({ email, address = {}}) => {
//     const validEmail = /.+@.+\..+/.test(email)
//     if (!validEmail) throw new Error("Valid email pls")
//     return {
//         email,
//         address: address ? address : null
//     }
// }
// const member = createMember({ email: "my@email.com"})
// console.log(member);

// const keys = ["name","age"]
// const values = ["Lydia", 22]

// const method = /* ?? */
// Object[method](keys.map((_, i) => {
//     return [keys[i],values[i]]
// }))


// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2 = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }
// runPromises()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// const user = {
//     email: "my@email.com",
//     updateEmail: email => {
//         this.email = email
//     }
// }
// user.updateEmail("new@email.com")
// console.log(user.email);


// const fruit = ['banana','orange','apple']

// fruit.slice(0,1)
// fruit.splice(0,1)
// fruit.unshift('grape')
// console.log(fruit);


// const user = {
//     email: "e@mail.com",
//     password: "12345"
// }
// const updateUser = ({ email, password }) => {
//     if (email) {
//         Object.assign(user, { email })
//     }
//     if (password){
//         user.password = password
//     }
//     return user
// }
// const updatedUser = updateUser({ email: "new@email.com"})
// console.log(updatedUser === user);

// class Calc {
//     constructor(){
//         this.count = 0
//     }
//     increase(){
//         this.count ++
//     }
// }
// const calc = new Calc()
// new Calc().increase()
// console.log(calc.count);


// let count = 0;
// const nums = [0,1,2,3];

// nums.forEach(num => {
//     if (num) count += 1
// })
// console.log(count);

// class Bird {
//     constructor(){
//         console.log("I am a bird. duck");
//     }
// }
// class Flamingo extends Bird {
//     constructor () {
//         console.log("I am pink. flower");
//         super();
//     }
// }
// const pet = new Flamingo();


// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
// };
// function addHobby(hobby, hobbies = person.hobbies){
//     hobbies.push(hobby);
//     return hobbies;
// }
// addHobby('running',[]);
// addHobby('dancing');
// addHobby('baking',person.hobbies);
// console.log(person.hobbies);

// const teams = [
//     { name: 'Team 1',members: ['Paul','Lisa']},
//     { name: 'Team 2',members: ['Laura','Tim']},
// ];
// function * getMembers(members){
//     for (let i = 0; i < members.length; i++){
//         yield members[i];
//     }
// }
// function * getTeams(teams){
//     for (let i = 0; i < teams.length; i++){
//         // SOMETHIMG IS MISSING HERE
//     }
// }
// const obj = getTeams(teams);
// obj.next();
// obj.next();

// class Counter {
//     #number = 10

//     increment(){
//         this.#number++
//     }
//     getNum(){
//         return this.#number
//     }
// }
// const counter = new Counter()
// counter.increment()

// console.log(counter.#number)


// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne(){
//     setTimeout(()=> console.log('Timeout 1!'),0);
//     myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//     console.log('Last line 1!');
// }
// async function funcTwo(){
//     const res = await myPromise;
//     console.log(`${res} 2!`);
//     setTimeout(() => console.log('Timeout 2!'),0);
//     console.log('Last line 2!');
// }
// funcOne();
// funcTwo();


// const name = 'Lydia Hallie';

// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');

// const myMap = new Map();
// const myFunc = () => 'greeting';

// myMap.set(myFunc, 'Hello World!');

// //1
// myMap.get('greeting');
// //2
// myMap.get(myFunc);
// //3
// myMap.get(() => 'greeting');

// const emojis = ['star','avacado','smiley'];

// emojis.map(x => x + 'star');
// emojis.filter(x => x !== 'avacado');
// emojis.find(x => x !== 'avacado');
// emojis.reduce((acc, cur) => acc + 'star');
// emojis.slice(1,2,'star');
// emojis.splice(1,2,'star');


// const set = new Set();

// set.add(1);
// set.add('Lydia');
// set.add({ name: 'Lydia' });

// for (let item of set) {
//     console.log(item + 2);
// }

// function getItems(fruitList, ...args, favouriteFruit){
//     return [...fruitList, ...args, favouriteFruit]
// }
// getItems(["banana","apple"],"pear","orange")


// const box = { x:10, y:20};

// Object.freeze(box);

// const shape = box;
// shape.x = 100;
// console.log(shape);

console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));