// Arrow Function (화살표 함수)
// function name(param) { }
// 위의 형식을 축약.
// 함수의 이름이 없는 익명함수 이므로 반드시 변수에 담아서 사용.
// const name = (param) => { };

// 매개변수 따른 설정
// () => {}; // 매개변수가 없을 경우.
// (param) => {}; // 매개변수가 한개 있을 경우. (param)의 소괄호 생략 가능.
// (param1, param2) => {}; // 매개변수가 여러개 있을 경우. (param1, param2)의 소괄호 생략 불가능.

// function body 설정.
// body의 내용이 한줄일 경우.
// (x) => {
//   return x + 10;
// };
// body의 내용이 한줄일 경우 {} 생략 가능하고 자동으로 결과값이 return된다. 위와 동일.
// (x) => x + 10;

// object return시 () 사용.
// () => {
//   return { id: "ssafy" };
// };
// () => ({ id: "ssafy" });

// // body가 여러줄일 경우 {}, return 생략 불가.
// (x) => {
//   const y = x + 100;
//   return y;
// };

function f1() {
    return 10;
}

let res = f1();
console.log(res);

const f2 = () => {
    return 20;
};

function f3(x) {
    return x + 10;
}
res = f3(100);
console.log(res);

const f4 = (x) => x + 10; // 함수 내용이 한줄인경우 중괄호, return생략 가능

res = f4(200);
console.log(res);

function f5(x, y) {
    return x + y;
}

const f6 = (x, y) => {
    // 인자가 두개 이상이라면 괄호 필수
    return x + y;
};

// Arrow Function에서는 this가 바인딩 되지 않음.
const id = "ssafy";
const name = "권영재";
const age = 26;
const user = {
    id,
    name,
    age,
    // info: function () {
    //     console.log(this.id, this.name, this.age);
    // },
    info: () => {
        console.log(this.name + "(" + this.id + ") 나이 : " + this.age);
    },
};
console.log(user);
user.info();
// fetch().then((response) => response.json()).then(data => make(data));
