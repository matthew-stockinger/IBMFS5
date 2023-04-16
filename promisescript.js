// Challenge 1: Which order will console.logs come?

// creating a promise.  gets resolved after 6 seconds.
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 6000);
// });

// console.log("before calling promise");

// myPromise.then((successMessage) => {
//   console.log("From Callback " + successMessage);
// });

// console.log("after calling promise");

// Challenge 2: Create a script which has two methods that return promises -
// One of the promises should get resolved after 6 seconds timeout and the other
// one after 3 seconds timeout. Call the promise in such a way that the second
// promise is invoked after the first promise is resolved.

// Challenge 3: rewrite sequentially.

const sixSecPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sixSecPromise resolved");
  }, 6000);
});

const threeSecPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("threeSecPromise resolved");
  }, 3000);
});

sixSecPromise
  .then((msg) => {
    console.log(`From callback: ${msg}`);
  })
  .then(() => console.log("another then"));

threeSecPromise.then((msg) => {
  console.log(`From callback: ${msg}`);
});
