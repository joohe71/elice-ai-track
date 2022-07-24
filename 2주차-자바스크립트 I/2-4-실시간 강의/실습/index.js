// // 첫번째 방법
// let response = document.body.innerHTML

// let elements = response.split('<div>')
// elements.shift()
// let arr = elements.map((v,i) => {
//         return {
//             name: v.split('name: ')[1].split('<')[0],
//             rate: Number(v.split('rate: ')[1].split('<')[0]),
//             story: v.split('story: ')[1].split('<')[0]
//         }
//     }
// )
// console.log(arr)

// 두번째 방법
let response = document.querySelectorAll('div')
// let name = document.querySelectorAll('div')[0].querySelector('h2').innerText.split(": ")
// let rate = document.querySelectorAll('div')[0].querySelector('.rating').innerText.split(": ")
// let story = document.querySelectorAll('div')[0].querySelector('.summary').innerText.split(": ")

//map 속성을 가지고 있지 않다!! 따라서 아래의 내용은 오류가 난다.
// let arr2 = response.map(v => {
//     const name = v.querySelector('h2').innerText.split(": ");
//     const rate = v.querySelector('.rating').innerText.split(": ");
//     const story = v.querySelector('.summary').innerText.split(": ");
//     return {
//         name: name[1],
//         rate: rate[1],
//         story: story[1]
        
//     }
// })

const result =[]
for (i=0;i<response.length;i++) {
    const name = response[i].querySelector('h2').innerText.split(": ");
    const rate = response[i].querySelector('.rating').innerText.split(": ");
    const story = response[i].querySelector('.summary').innerText.split(": ");
    //객체의 key는 정적인데, [대괄호]를 이용하여 key를 동적으로 설정 가능하다. 
    result.push({
        [name[0]]: name[1],
        [rate[0]]: rate[1],
        [story[0]]: story[1]
        
    })
}
console.log(result)