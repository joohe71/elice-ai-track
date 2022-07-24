//형변환
a = '100';
b = a + 1; // "1001"

// string => 숫자로 바꾸는 방법 parseInt() or Number()

let A = ['1','2','3','4']
A = A.map(v => parseInt(v))
//객체로 만드는 방법
A = A.map((v,i) =>{
    return {
        name: v,
        index: i,
    }
})