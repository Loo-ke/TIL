# 15 let, const 키워드와 블록 레벨 스코프
## 15.1 var 키워드로 선언한 변수의 문제점
### 15.1.1 변수 중복 선언 허용
- 동일한 이름의 변수가 이미 선언되어 있는 것을 모르고 변수를 중복 선언하면서 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 변경되는 부작용 발생
```
var x = 1; // x변수 선언 & 초기화 동시에
var y = 1; // y변수 선언 & 초기화 동시에

var x = 100; // 선언 문 O, 초기화 문도 X
var y; // 선언 문은 O, 초기화 문이 X (암묵적 무시)

console.log(x); // 100
console.log(y); // 1
```
### 15.1.2 함수 레벨 스코프
- 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다 -> 함수 레벨 스코프
- 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다. 의도치 않게 전역 변수가 중복 선언 되는 경우가 발생
```
var x = 1;
{
  var x  = 10;
}
console.log(x); //10
```
### 15.1.3 변수 호이스팅
- 변수 호이스팅이 에러를 발생시키지는 않지만 프로그램의 흐름상 맞지 않을 뿐더러 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.
```
console.log(foo);
foo = 123;
console.log(foo) // 123
var foo;
```

## 15.2 let 키워드
### 15.2.1 변수 중복 선언 금지
- let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생
```
// var 변수 = 중복 선언 허용 O
var foo = 123;
var foo = 456;
console.log(foo);

// let 변수 = 중복 선언 허용 X
let bar = 123;
let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
console.log(bar);

// 선언 단계 에서 체크하므로 → 위에서 var 변수인 foo에 대한 출력문 실행이 진행 안됨
```
### 15.2.2 블록 레벨 스코프
- let 키워드는 모든 코드 블록(함수, if문, for문, while문, try-catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
```
let foo = 1;

{
  let foo = 2;
  let bar = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

/**
 * 비록 블록 내에 let 키워드로 선언한 foo, bar 변수가 있지만
 * + 출력된 foo는 전역에 선언된 foo 변수가 되고
 * + 출력문이 있는 스코프내에는 bar 변수는 존재하지 않으므로 "참조에러(ReferenceError)" 발생
 */
```
### 15.2.3 변수 호이스팅
- let 키워드로 선언한 변수는 변수 선언문 이전에 참조하면 참조 에러가 발생한다.
- 이는 var 키워드와 변수의 선언, 초기화 시점에 차이가 있으므로 비교해야 한다.
```
// 1️⃣ 변수 호이스팅 - var 변수 💩
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1

// 2️⃣ 변수 호이스팅 - let 변수 👍
console.log(foo); // 일시적 사각지대(TDZ) - ReferenceError: Cannot access 'foo' before initialization ( 사실상, 여기서 프로그램 종료 )

let foo; // 변수 선언문에서 초기화 단계가 실행
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행
console.log(foo); // 1
```
### 15.2.4 전역 객체와 let
## 15.3 const 키워드
- const 키워드는 주로 상수를 선언하기 위해 사용
- 일반적으로 let 키워드와 성질이 동일
### 15.3.1 선언과 초기화
- const 키워드 변수는 반드시 선언과 동시에 초기화를 해야한다.
```
const foo;  // SyntaxError: Missing initializer in const declaration
```
### 15.3.2 재할당 금지
- const 키워드 변수는 재할당이 금지된다.
```
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```
### 15.3.3 상수
- const 키워드로 선언한 변수에 원시값을 할당한 경우 변수 값을 변경 할 수 없다.
- 원시값은 변경 불가능한 값이므로 재할당 없이 값을 변경할 수 있는 방법이 없기 때문이다.
- 상수도 곧 변수이며, 즉 상수도 메모리 공간을 가지며 값을 가진다.
- 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용을 권장한다.
- 일반적으로 상수의 이름은 대문자로 선언하며, 여러 단어로 이루어진 경우 언더 스코어로 구분하며 스네이크 케이스로 표현한다.
```
// TAX_RATE 라는 상수(constant)를 적용하므로써, 코드의 가독성이 증가한다.
const TAX_RATE = 0.1;

let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice); // 110
```  
### 15.3.4 const 키워드와 객체
- const 키워드로 선언한 변수에 객체를 할당한 경우는 변수값을 변경할 수 있다.
- 객체는 재할당 없이도 직접 값을 변경이 가능하기 때문이다.
- const 키워드는 재할당을 금지할 뿐 불변을 의미하지는 않는다.
  - 새로운 값을 재할당 하는것은 불가능하다.
  - 프로퍼티 동적 생성, 삭제 프로퍼티 값 변경을 통한 객체의 변경은 가능하다. 
```
const person = {
  name: "WI",
};

// 객체는 변경 가능한 값(mutable value) == 재할당 없이 변경 가능
person.name = "WIEEE";
console.log(person.name); // { name: "WIEEE" };
```
## 15.4 var vs let vs const
