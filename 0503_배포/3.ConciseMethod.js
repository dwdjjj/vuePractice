// ConciseMethod (간결한 메소드)

// 함수 선언 형식
// function a() { } // 명명(익명) 함수 선언
// const a = function () { } // 명명 함수 표현
// const a = new Function('x', 'y', 'return x + y') // 함수 생성자

// ES6 이전
// const id = "ssafy";
// const name = "권영재";
// const age = 26;
// const user = {
//     id: id,
//     name: name,
//     age: age,
//     info: function () {
//         console.log(id, name, age);
//     }
// };

// user.info();
// ES6 이후

const id = "ssafy";
const name = "권영재";
const age = 26;
const user = {
    id,
    name,
    age,
    info: function () {
        console.log(this.id, this.name, this.age);
    },
};

user.info();
