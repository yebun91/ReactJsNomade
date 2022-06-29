// promise

// const sexy = new Promise((resolve, reject) => {
//   resolve(2);
//   reject("에러");
// });
// const timesTwo = (number) => number * 2;
// sexy
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(() => {
//     throw Error("somthing");
//   })
//   .then((lastNumber) => console.log(lastNumber))
//   .catch((error) => console.log(error));

// const p1 = new Promise((resolve) => {
//   setTimeout(resolve, 3000, "first");
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 5000, "I hate JS");
// });
// const p3 = new Promise((resolve) => {
//   setTimeout(resolve, 2000, "third");
// });
// const motherPromise = Promise.race([p1, p2, p3]);
// motherPromise
//   .then((values) => console.log(values))
//   .catch((err) => console.log(err));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, "first");
// })
//   .then((value) => console.log(value))
//   .catch((e) => console.log(`${e} : error`))
//   .finally(() => console.log("Im Done!"));

// fetch("https://api.github.com/users/hadley/orgs")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => console.log(json))
//   .catch((e) => console.log(`error : ${e}`));

const getMovies = async () => {
  try {
    const [value1, value2] = await Promise.all([
      fetch("https://api.github.com/repos/hadley/ggplot2/commits"),
      fetch("https://api.github.com/users/hadley/orgs"),
    ]);
    const [a, b] = await Promise.all([value1.json(), value2.json()]);
    console.log(a, b);
  } catch (e) {
    console.log(`error : ${e}`);
  } finally {
    console.log("이제 진짜 끝이당 ㅎ");
  }
};

getMovies();
