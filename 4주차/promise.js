// // async는 return 값을 promise 값으로 이행시킴
// async function test() {
//     return 3; // resolve(3)과 같은 기능
// }
// test();


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('완료');
        }, 3000);
    });

    let result = await promise; // => promise의 이행된 값을 가져옴/ 원래는 result.then()
    console.log(result);
}
f();