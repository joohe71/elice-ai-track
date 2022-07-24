/*지시사항에 따라 작성해주세요.*/
const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
  ]
  
  /*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
  for (i=0;i<(students.length);i++) {
      if (students[i].name == "elice") {
          students[i].major = 'computer science'
          document.write(`${students[i].name}'s major: ${students[i].major}<br>`)
      }
      else {
          students[i].major = students[i].major
          document.write(`${students[i].name}'s major: ${students[i].major}<br>`)
      }
  } 
  
  /*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
  
  // students.forEach(function (item) {
  //     console.log(item.name)
  // }
  // )