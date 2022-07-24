// 입력된 문자열의 첫번째 인자가 모음으로 시작하면 true, 아니면 false를 반환하는 함수입니다.
function startsWithVowel(word) {
    var vowels = "aeiou";
    return vowels.indexOf(word[0]) !== -1;
  }
  
  // "Make a(n) '메뉴 이름'" 문자열을 반환하는 함수를 export하세요.
  // 메뉴 이름이 a, e, i, o, u로 시작하면 "Make an '메뉴이름'", 그렇지 않으면 "Make a '메뉴이름'"을 반환합니다.
  exports.cafe = function (menu) {
    var article = startsWithVowel(menu) ? "an" : "a";
  
    return `Make ${article} ${menu}`;
  };
  