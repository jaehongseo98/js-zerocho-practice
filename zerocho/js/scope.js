// const name = 'zero';
// function outer() {
//     console.log('외부', name);
//     function inner() {
//         var enemy = 'nero';
//         console.log('내부', name);
//     }
//     inner();
// }
// outer();
// console.log(enemy); // undefined
//내부에서 외부는 o

var name = 'zero';
function log() {
    console.log(name);
}

function wrapper() {
    var name = 'nero';
    log();
}
wrapper();
//스코프는 함수를 호출할 때가 아니라 선언할 때 생깁니다 중요

//클로져 비교 전역변수 줄이기
const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

let count = 0;
function handleCilck() {
    count++;
    return count;
}

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick());

function handleCilck() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
