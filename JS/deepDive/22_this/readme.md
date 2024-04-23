# 22 this

## 22.1 this 키워드

- 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.
- this 는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable) 입니다.
- this 를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
- this 는 자바스크립트 엔진에 의해 암묵적으로 생성된다.

```
const circle = {
  // 프로퍼티 : 객체 고유의 상태 데이터
  radius : 5,
  // 메서드 : 상태 데이터를 참조하고 조작하는 동작
  getdiameter(){
    // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
    return 2 * circle.radius;
  }
};

console.log(circle.getdiameter()) // 10
```

- this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 **자기 참조 변수**다.
- this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
- this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
  > this 바인딩
  >
  > 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것이다. this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다)와 this가 가리킬 객체를 바인딩 하는 것이다.

```
const circle = {
  radius : 5,
  getDiameter(){
    //this는 메서드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  }
}
console.log(circle.getDiameter()) // 10
```

- 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 circle을 가리킨다.

```
// 생성자 함수
function Circle(radius) {
  // 여기서 this는 생성자 함수 Circle이 생성할 인스턴스
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 여기서 this는 생성자 함수가 생성할 인스턴스
  return 2 * this.radius;
};

// 인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter());  // 10
```

- 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스다.

- 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩 될 값, 즉 this 바인딩이 동적으로 결정된다.
- this는 코드 어디에서든 참조가 가능하다.
- 전역에서도 함수 내부에서도 참조할 수 있다.

```
// this는 어디서든지 참조가 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this) // window

function square(number){
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this) // window
  return number * number ;
}

square(2);

const person = {
  name : 'Lee',
  getName(){
    // 메서드 내에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this) // {name : 'Lee', getName : f}
    return this.name;
  }
}
console.log(person.getName()) // Lee

function person(name){
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this) // person {name : "Lee"}
}
const me = new Person("Lee")
```

- this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수
- 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가 있다.
- strict mode 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.
- 일반 함수 내부에서 this를 사용할 필요가 없다.

### 22.2 함수 호출 방식과 this 바인딩

- this 바인딩은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

  > 렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.
  >
  > 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. 하지만 this 바인딩은 함수 호출 시점에 결정된다.

- 함수 호출 방식은 다양하다.

1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출

```
const foo = function (){
  console.dir(this);
}
// 1. 일반 함수 호출
foo(); // window
// 2. 메서드 호출
const obj = {foo};
obj.foo() // obj
// 3. 생성자 함수 호출
new foo() // foo {}
// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
const bar = { name : 'bar'};

foo.call(bar) // bar
foo.apply(bar) // bar
foo.bind(bar)// bar
```

- 함수 호출 방식에 따라 this 바인딩이 어떻게 결정되는지 알아보자

### 22.2.1 일반 함수 호출

- 기본적으로 this에는 전역 객체가 바인딩 된다.

```
function foo(){
  console.log("foo this : ", this ); // window
  function bar () {
    console.log("bar this : ", this) // window
  }
  bar ();
}
foo();
```

- 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다.
- **strict mode**가 적용된 일반 함수 내부의 this에는 undefined가 바인딩 된다.

```
// strict mode 적용
function foo() {
  ("use strict");

  console.log(`전역 함수 foo의 this : ${this}`);    // 전역 함수 foo의 this : undefined

  function bar() {
    console.log(`중첩 함수 bar의 this : ${this}`);  // 중첩 함수 bar의 this : undefined
  }

  bar();
}
foo();
```

- 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다.

```
// 전역 변수 value ( 전역 객체 프로퍼티 )
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log(`foo 메서드의 this : ${this}`); // foo 메서드의 this : [object Object]
    console.log(`foo 메서드의 this가 가리키는 객체의 value : ${this.value}`); // foo 메서드의 this가 가리키는 객체의 value : 100

    // 메서드 내, 정의한 중첩 함수
    function bar() {
      console.log(`메서드 내 중첩 함수 bar의 this : ${this}`); // 메서드 내 중첩 함수 bar의 this : [object global]
      console.log(`중첩 함수 bar의 this가 가리키는 객체의 value : ${this.value}`); // 중첩 함수 bar의 this가 가리키는 객체의 value : 1
    }

    // 메서드 내 중첩 함수를 일반 함수 처럼 호출
    bar();
  },
};

obj.foo();
```

- 콜백 함수가 일반 함수로 호출 된다면 콜백 함수 내부의 this에도 전역 객체가 바인딩 된다.
- 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩 된다.

```
// 전역 변수 value ( 전역 객체 프로퍼티 )
var value = 1;

const obj = {
  value: 100,
  foo() {
    // 콜백 함수에 바인딩할 obj 객체를 가리키는 this를 변수 that에 할당
    const that = this;

    setTimeout(function () {
      console.log(`callback 함수의 this : ${that}`); // callback 함수의 this : [object Object]
      console.log(`callback 함수의 this가 가리키는 객체의 value : ${that.value}`); // callback 함수의 this가 가리키는 객체의 value : 100
    }, 100);
  },
};

obj.foo();
```

- **일반 함수로 호출된 모든 함수 내부의 this에는 전역 객체가 바인딩 된다.**

- 메서드 내부의 중첩 함수나 콜백 함수의 this 바인딩 을 메서드의 this 바인딩과 일치시키기 위한 방법은 다음과 같다.

- 메서드의 this 바인딩할 객체를 변수에 할당하는 방법
- Function.prototype.apply or Function.prototype.call 에 의한 바인딩

```
// 전역 변수 value ( 전역 객체 프로퍼티 )
var value = 1;

const obj = {
  value: 100,
  foo() {
    // 콜백 함수에 바인딩할 obj 객체를 가리키는 this를 변수 that에 할당
    const that = this;

    setTimeout(function () {
      console.log(`callback 함수의 this : ${that}`); // callback 함수의 this : [object Object]
      console.log(`callback 함수의 this가 가리키는 객체의 value : ${that.value}`); // callback 함수의 this가 가리키는 객체의 value : 100
    }, 100);
  },
};

obj.foo();
```

### 22.2.2 메서드 호출

- 메서드 내부의 this에는 메소드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표 연산자 앞에 기술한 객체가 바인딩 된다.

```
const person = {
  name ; 'Lee',
  getName (){
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.
    return this.name
  }
};
// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName()) // Lee
```

- 위의 예제의 getName 메서드는 person 객체의 메서드로 정의한다.
  - 즉, 다른 객체의 프로퍼티에 할당이 가능
  - 일반 변수에 할당하여 일반 함수로 호출도 가능

```
const person = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    // getName 메서드는 person 객체에 포함된 것이 아닌, 독립적으로 존재하는 별도의 객체 개념
    return this.name;
  },
};

const anotherPerson = {
  name: "KIM",
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당 (getName 메서드는 독립적인 객체이기 때문)
anotherPerson.getName = person.getName;

// getName을 호출한 객체는 이 시점에선 person이 아닌 anotherPerson이다.
console.log(anotherPerson.getName());  // KIM

// getName을 getName 변수에 할당 (getName 메서드는 독립적인 객체이기 때문)
const getName = person.getName;

// getName을 호출한 객체는 이 시점에서는 전역 객체다.
// 전역 객체에 프로퍼티에는 name 이라는 프로퍼티가 존재하지 않다.
// 참조 시, 자바스크립트 엔진이 암묵적으로 undefined 로 초기화한다.
console.log(getName());  // undefined
```

> prototype을 이해하지 못해서 .... 예제 22-16은 이해를 못하겠다...

### 22.2.3 생성자 함수 호출

- 생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩 된다.

```
function Circle(radius){
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  }
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()) // 10
console.log(circle2.getDiameter()) // 20
```

- 생성자 함수는 이름 그대로 객체 를 생성하는 함수이다.
- new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.

```
const circle 3 = Circle(15);
console.log(circle3) // undefined
console.log(radius) // 15
```

### 22.2.4 Function.prototype.apply/call/bind 메서드에 의한 간접 호출

- 이들 메서드는 모든 함수가 상속받아 사용할 수 있다.

```
function getThisBinding(){
  return this;
}
const thisArg = {a : 1};

console.log(getThisBinding()); //window

console.log(getThisBinding.apply(thisArg)) // {a : 1}
console.log(getThisBinding.call(thisArg)) // {a : 1}
```

- apply, call
  - apply와 call 메소드의 본직적인 기능은 함수를 호출하는 것이다.
  - 함수를 호출하면서 첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩
  - 두 번째 인수를 함수에 전달하는 방식만 다를 뿐 동일하게 작동
  - 대표적으로, arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우에 효과적
- bind
  - 본질적인 기능은 함수를 호출하진 않고 this로 사용할 객체만 전달
  - 대표적으로, 메서드의 this와 메서드 내부의 중첩 함수 or 콜백 함수의 this가 불일치하는 문제 해결에 효과적

```
const person = {
  name: "Lee",
  foo(callback) {
    // bind 를 적용하지 않는다면, foo 메서드 내부에 콜백 함수에 정의된 this는 전역 객체(window 또는 global)를 가리킨다.
    // 전역 객체에는 name 프로퍼티가 없기 때문에, 원래는 undefined 를 출력하는 것이 맞다.
    // 하지만, Function.prototype.bind 메서드로 콜백 함수의 주체를 person 객체로 동적 바인딩 해주었다.
    // 때문에 person 객체의 name 프로퍼티에 접근할 수 있게 되었다.
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`안녕하세요. ${this.name}입니다.`); // 안녕하세요. Lee입니다.
});
```
