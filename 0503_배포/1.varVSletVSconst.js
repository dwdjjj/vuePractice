const a = 10;
console.log(a);

const ssafy = {
    area: "광주",
    class: 4,
};
console.log(ssafy);
ssafy.area = "서울";
console.log(ssafy);

const arr = [];
console.log(arr);
arr.push(3);
console.log(arr);

var i = 10;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// var VS let Scope Test
function scope1() {
    var x = 11;
    if (true) {
        var x = 99;
        console.log(x); // 99
    }
    console.log(x); // 99
}
scope1();

function scope2() {
    let x = 11;
    if (true) {
        let x = 99;
        console.log(x);
    }
    console.log(x);
}
// scope2();

function scope3() {
    if (true) {
        var x = 99;
        console.log(x);
    }
    console.log(x);
}
// scope3();

function scope4() {
    let x = 99;
    if (true) {
        console.log(x);
    }
    console.log(x);
}
// scope4();

function scope5() {
    if (true) {
        let x = 99;
        console.log(x);
    }
    console.log(x);
}
// scope5();
