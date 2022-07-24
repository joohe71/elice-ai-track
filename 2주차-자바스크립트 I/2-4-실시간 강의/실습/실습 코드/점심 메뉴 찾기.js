var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

// document.write(foods.length)
// document.write('<br>')
// for (i=0;i<foods.length;i++) {
//     if (i%2===0) {
//         document.write(foods[i] + "<br>")
//     }
// }

// for (i=0;i<foods.length;i+=2) {
//     document.write(foods[i] + "<br>")
// }
document.write(`${foods.length}<br>`)
foods.filter((v,i) => i % 2 !=1 ).map(v => document.write(v +"<br>"))