// 1. const / let

function test_1() {
    let x = "let";
    {
        const x = "const";

        // x 출력
        if (x === "const") {
            console.log("I am " + x);
        }

        // x = "changed";
    }
    // x 출력
    if (x === "let") {
        console.log("I am " + x);
    }
}

test_1();

// 2. template string
function test_2() {
    const id = "IronMan";
    const password = "1234";
    const name = "토니 스타크";
    const email = "ironman@ssafy.com";
    const age = 53;

    // 아래 빈칸을 채워넣으시오.
    let userString = `아이디 : ${id} , 비밀번호 : ${password} , 이름 : ${name} , 이메일 : ${email} , 나이 : ${age}`;
    console.log(userString);
}

test_2();

// 3. arrow function / this

let a = 30;
let b = 40;

function test_3() {
    let c = 10;
    let d = 20;

    let max = () => (a > b ? a : b);
    console.log(max());

    let min = function () {
        return c < d ? c : d;
    };
    console.log(min());
}

test_3();

// 4. destructuring , rest

function test_4() {
    let { a, b, ...e } = { a: 10, b: 20, c: 30, d: 40 };
    console.log(a);
    console.log(b);
    console.log(e);
}

test_4();

/* 5. js - this정리
자바의 this는 단지 현재 객체를 가리킬 뿐 js의 this는 좀 다름.
실행문맥에 따라 4가지 방식으로 동작
+실행문맥 : 함수가 실행될 당시의 문맥을 의미

1. 함수 실행
    함수와 메서드의 차이?
    메서드란 객체 내부의 속성.
    ex) console.log는 console객체의 log메서드 호출
    함수실행에서의 this는 전역 객체를 가리킨다. 함수 자체를 가리킨다고 오해하기 쉬움!
    ex)웹브라우저 환경에서 가리키는 전역 객체는 window
    함수 밖에서 활용되는 this키워드도 전역객체를 참조한다
        console.log(this === window); // => true
        this.myString = 'Hello World!';
        console.log(window.myString); // => 'Hello World!'

2. 메서드 실행
    메서드 실행에서의 this는 메서드를 소유하고 있는 객체를 가리킴
    js에서의 객체는 프로토타입에 있는 메서드를 상속받음.


3. 생성자 실행
    생성자 실행은 new키워드를 표현식 앞에 붙여 함수 객체로써 실행되는 것
    전역객체 window를 가리킨다? 고 생각할 수 있으나 함수의 실행 문맥상 new로 선언시 생성자의 실행을 따르기 때문에
    이 때의 this는 함수 객체를 가리키게 됨.

4. 간접 실행
    간접실행? 함수가 call()이나 apply()등의 메소드호출로 실행되는 것
    JS(자바스크립트)에서 함수는 일급 객체. 프로퍼티와 메소드 지닐 수 있음.
    js함수의 공통으로 쓰이는 대표적인 프로퍼티 : length / 메소드 : call, apply, bind

    call(), apply()호출에서 this는 첫 매개변수 가리킴

5. 화살표함수에서의 this
    arrow function이 정의된 곳의 문맥을 그대로 따름.
    한번 bound되면 절대 바뀌지않는 렉시컬 문맥 따름. this의 참조값이 결정되면 실행 문맥 달라져도 변치 않음.
    +렉시컬 스코프?
        동적 스코프는 런타임에 함수가 실행되는 컨텍스트에서 결정됨, 반면에
        렉시컬 스코프는 코드가 작성된 컨텍스트에서 결정됨.

        각 스코프는 스스로 고유 환경 지님. 소스코드 작성시 이 환경을 저장(기억)해 둠

        중첩 함수에서 안쪽 함수가 자신의 렉시컬 환경을 뒤져도 변수값을 못찾는다면 바깥쪽 함수의
        렉시컬 환경 참조, 그래도 없다면 그 바깥... null이 될때까지 쭉 참조 이어가는 것을 스코프 체인이라 함

    메소드 실행 문맥에서 this는 메소드를 소유한 객체를 가리키고 간접 실행 문맥으로 바뀐다면 첫 매개변수를 가리킴
    이렇게 실행 문맥에 따라 계속해서 다른 값을 참조하게 되는데, EX6의 arrow function에서는 이렇지 않음.

    따라서 실행 도중 this의 스코프를 고정하고 싶다면 유용
*/
