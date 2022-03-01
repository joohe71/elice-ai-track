// 영어 단어가 들어있는 리스트입니다.
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 지시사항을 참고하여 코드를 작성하세요.
words.splice(7,3)
words.splice(4,2)
console.log(words)

var lyrics = words.join(' ')
console.log(lyrics)

var a = lyrics.match(/p/g)

function count(b) {
    return b.length
}

console.log(count(a))