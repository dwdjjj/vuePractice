const userId = "ssafy";

// var-scope.js가 module로 사용되고 있다면 'undefined'가 출력 됨.
// 해당 스코프 안에서만 사용할 수 있음. main.html에서 사용하려면 모듈 바깥으로 뺴줘야함
console.log(window.userId);
