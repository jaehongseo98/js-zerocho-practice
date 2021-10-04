function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function () {
        alert(this.name + ' said "hello"');
    };
}

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
Person.prototype.sayHello = function () {
    alert(this.name + ' said "hello"');
}; //프로토타입 메모리 효율성
//모든 객체가 공유함
