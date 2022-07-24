// for (i=1;i<=100;i++) {
//     if (i%2===0) {
//         document.write(i);
//     }
    
// }

document.write(Array(100).fill(1).map((v,i)=> (i+1)).filter(v => v%2 ==0).join(""))