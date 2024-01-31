# 12. 함수
## 12.1 함수란?
- 자바스크립트에서 가장 중요한 핵심 개념이다.
- 입력을 받아 출력을 내보내는 일련의 과정을 정이하는 것이다.
```
function add(x, y) {
  return x + y;
}
add(2,5)//7
```
- 함수는 일련의 과정을 문으로 구현하고 코드 불록을 감싸서 하나의 실행 단위로 정의한 것이다.
- 함수 내부로 입력을 전달받는 변수를 매개변수, 입력을 인수, 출력을 반환값 이라고 한다.

### 함수 정의
- 함수는 **함수 정의**를 통해 생성된다.
```
function add(x, y){
  return x + y;
}
```
### 함수 호출
- 함수 정의만으로 함수가 실행되는 것은 아니다.
- 인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 지시 하는 것을 **함수 호출**이라고 한다.
```
var result = add(2,5)
console.log(result) // 7
```
## 12.2 함수를 사용하는 이유
- **코드의 재사용성** : 함수는 여러번 호출할 수 있다. 즉, 실행 시점을 개발자가 결정할 수 있고 몇 번이든 재사용이 가능하다. **코드의 재사용** 측면에서 유리하다.
- **코드의 신뢰성** : 중복된 횟수에 비례해서 코드 수정에 걸리는 시간이 증가한다. 사람은 실수를 하기 마련이기 때문에 코드의 중복을 억제하고 재사용성을 높이는 함수는 유지보수의 편의성을 높이고, **코드의 신뢰성**을 높인다.
- **코드의 가독성** : 함수는 객체 타입의 값이다. 적절한 함수 이름은 함수의 내부 코드를 이해하지 않고도 함수의 역할을 파악할 수 있게 돕는다.

## 12.3 함수 리터럴
- 리터럴 : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기방식을 말한다. 즉, 리터럴은 값을 생성하기 위한 표기법이다.
- 함수 리터럴은 function 키워드, 함수 이름, 매개 변수 목록, 함수 몸체로 구성된다.
```
var f = function add(x,y){
  return x + y
}
``` 

## 12.4 함수 정의
- 함수 정의란 함수를 호출하기 이전에 인수를 전달받을 매개변수와 실행할 문들, 그리고 반환할 값을 지정하는 것을 말한다. 정의된 함수는 자바스크립트 엔진에 의해 평가되어 함수 객체가 된다.

>함수 선언문 : `function add(x, y){ return x + y; }`
>
>함수 표현식 : `var add = function(x, y){ return x + y }`
>
>function 생성자 함수 : `var add = new Function('x','y', 'return x + y');`
>
>화살표 함수(ES6) : `var add = (x, y) => x + y;`

- 모든 함수 정의 방식은 함수를 정의한다는 면에서는 동일하다. 단 미묘하지만 중요한 차이가 있다.

### 12.4.1 함수 선언문
- 함수 선언문은 함수 리터럴과 형태가 동일하다. 단, 함수 리터럴은 함수 이름을 생략할 수 있으나 함수 선언문은 함수 이름을 생략할 수 없다.
```
function(x,y){
  return x + y
}
```
- 함수 선언문은 표현식이 아닌 문이다. 
- 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 
```
    //식별자 add    함수 이름 add
var add =function add(x, y){
  return x + y;
}
//         식별자 add
console.log(add(2,5))
```
### 12.4.2 함수 표현식
- 함수는 값처럼 변수에 할당할 수 있고 프로퍼티 값이 될 수 있드며 배열의 요소가 될 수 있다.
- 값의 성질을 갖는 객체를 일급 객체라고 한다. 자바스크립트 함수는 일급 객체다. 함수가 일급 객체라는 것은 함수를 값처럼 자유롭게 사용할 수 있다는 의미이다.
- 함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다. 이러한 함수 정의 방식을 함수 표현식이라고 한다.
```
var add= function (x, y){
  return x + y;
}
console.log(add(2,5))
```
- 함수 리터럴의 함수 이름은 생략할 수 있다. (function 뒤에 오는 이름)
- 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.

- 함수 표현식과 함수 선언문이 정확히 동일하게 동작하지는 않는다.
- 함수 선언문은 "표현식이 아닌 문", 함수 표현식은 "표현식인 문"이다. 
### 12.4.3 함수 생성 시점과 함수 호이스팅

```
console.log(add)
console.log(sub)

console.log(add(2,5))
console.log(sub(2,5))

//함수 선언문
function add(x, y){
  return x+y;
}

//함수 표현식
var sub = function(){
  return x - y;
}
```
- 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 떄문에 이런 현상이 발생한다.
- 함수 선언문으로 함수를 정의하면 런타임 이전에 함수 객체가 먼저 생성된다. 그리고 자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 생성된 함수를 할당한다.
- 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
- var 키워드로 선언된 변수는 undefined로 초기화, 함수 선언문을 통해 암묵적으로 생성된 식별자는 함수 객체로 초기화된다.
- 함수 호이스팅은 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 당연한 규칙을 무시한다. 이로 인해 JSON을 창안한 자는 함수 선언문 대신 함수 표현식을 사용할 것을 권장한다.
### 12.4.4 Function 생성자 함수
- Function 생성자로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다. Function 생성자 함수로 생성한 함수는 클로저를 생성하지 않는 등 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.
### 12.4.5 화살표 함수
- 좀 더 간략한 방법으로 함수를 선언 할 수 있다. 화살표 함수는 항상 익명 함수로 정의한다.
```
const add =(x, y) => x + y;
console.log(add(2,5))//7
```
- 기존 함수와 this 바인딩 방식이 다르고, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다.
## 12.5 함수 호출
- 함수는 함수를 가르키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다.
### 12.5.1 매개변수와 인수
- 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, 매개변수를 통해 인수를 전달한다.
```
var result = add(1,2)
```
- 매개변수는 함수를 정의할 때 선언하며 함수 몸체 내부에서 변수와 동일하게 취급된다.
- 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다. 즉 매개변수의 스코프(유효 범위)는 함수 내부이다. 
```
function add(x,y){
  console.log(x + y)
  return x + y;
}

console.log(x,y)
```
- 함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 그렇지 않은 경우에도 에러가 발생하지 않는다. 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 `undefined`이다.
```
function add(x,y){
  reutnr x + y;
}
console.log(add(2))// NaN
// 할당되지 않은 매개변수의 값은 undefined
console.log(add(2,5,10))// 7
// 초과된 인수는 무시된다.
// 버려지는 것이 아닌 arguments 객체의 프로퍼티로 보관된다.
```
### 12.5.2 인수 확인
```
function add(x,y){
  return x + y;
}
console.log(add(2));//NaN
console.log(add('a','b'))//ab
```
- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
- 자바스크립트는 동적 타입 언어다.따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
```
function add(x,y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }
  return x + y;
}
console.log(add(2))// TypeError: 인수는 모두~~~~
console.log(add('a','b'))// TypeError: 인수는 모두~~~~
```
- 인수의 개수는 확인하고 있지 않지만 arguments 객체를 통해 인수 개수를 확인 할 수 있다. 인수가 전달되지 않은 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.
```
function add(a,b,c){
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(add(1,2,3)) // 6
console.log(add(1,2)) // 3
console.log(add(1)) // 1
console.log(add()) // 0
```
```
function add(a = 0, b = 0 , c = 0){
  return a + b + c;
}
console.log(add(1,2,3)) // 6
console.log(add(1,2)) // 3
console.log(add(1)) // 1
console.log(add()) // 0
```
## 12.5.3 매개변수의 최대 개수
- 자바스크립트 엔진마다 매개변수의 최대 개수에 대한 제한이 있겠지만 충분히 많은 매개변수를 지정할 수 있다. 최대 몇개까지 사용하는 것이 좋을까?
- 매개변수는 순서에 의미가 있다. 매개변수가 많아지면 함수를 호출할 때 전달해야 할 인수의 순서를 고려해야한다. 유지보수성이 나빠진다.
- 이상적인 매개변수의 개수는 0개이며 적을수록 좋다. 
- **이상적인 함수는 한 가지 일만 해야하며 가급적 작게 만들어야 한다.**

## 12.5.4 반환문
- 함수는 return 키워드와 표현식으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환할 수 있다.
- 반환문은 두가지 역할을 한다.
  - 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 문이 존재한다면 그 문은 실행되지 않고 무시된다.
  - 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다. 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 `undefined`가 반환된다.
## 12.6 참조에 의한 전달과 외부 상태의 변경
```
function changeVal(primitive, obj){
  primitive += 100;
  obj.name = 'kim'
}

//외부
var num = 100;
var person = {name : 'Lee'};
console.log(num, person)// 100, {name : 'Lee'}

changeVal(num, person);
// 원시 값은 원본 훼손 X / 객체는 훼손됨.
console.log(num, person)// 100, {name : 'Kim'}
```
- 함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워진다. 가독성을 해치는 원인이 된다.
- 이러한 문제의 해결 방법 중 하나는 객체를 불변 객체로 만들어서 사용하는 것이다.
- 객체의 원본을 완전히 복제, 즉 깊은 복사를 통해 새로운 객체를 생성하고 재할당을 통해 교체한다. 이를 통해 외부 상태가 변경되는 부수 효과를 없앨 수 있다.
## 12.7 다양한 함수의 형태
### 12.7.1 즉시 실행 함수
- 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수라고 한다.
```
(function (x, y){
  var a= 3;
  var b = 5;
  return a * b;
}());
```
- 즉시 실행 함수는 익명 함수를 사용하는 것이 일반적이다.
- 즉시 실행 함수는 반드시 그룹 연산자 ()로 감싸야한다. 안그러면 에러가 발생한다.
### 12.7.2 재귀함수
- 함수가 자기 자신을 호출하는 것을 재귀호출 이라고 한다. 재귀 함수는 자기 자신을 호출하는 행위, 즉 재귀호출을 수행하는 함수를 말한다.
- 재귀함수는 반복되는 처리를 위해 사용한다. 예를 들어 10부터 0까지 출력하는 함수를 구현해보자
```
function countdown(n){
  for(var i  = n, i >= 0; i--) console.log(i)
}
countdown(10);
```
- 위의 코드도 잘 돌아간다. 하지만 반복문 없이 재귀함수로 해보자
```
function countdown(n){
  if(n < 0) return ;
  console.log(n);
  countdown(n - 1);
}
countdown(10);
```
```
// 팩토리얼 구현하기
function factorial(n){
  if(n <= 1) return 1;
  //재귀 호출
  return n * factorial(n - 1);
}
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120
```
- 함수 표현식으로 정의한 함수 내부에서는 함수의 이름은 물론 함수를 가르키는 식별자로도 자기 자신을 재귀호출할 수 있다. 단 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 식별자로 해야한다.

- 재귀함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.

### 12.7.3 중첩 함수
- 함수 내부에 정의된 함수를 중첩함수 또는 내부 함수라고 한다. 그리고 중첩 함수를 포함하고 이쓴 함수는 외부 함수라고 한다.
```
function outer(){
  var x = 1;
  function inner(){
    var y = 2;
    console.log(x + y)
  }
  inner()
}
outer()
```
### 12.7.4 콜백 함수
- 어떤 일을 반복하는 repeat 함수를 정의해보자
```
function repeat(n){
  for(var i = 0; i < n; i++){
    console.log(i)
  }
}
repeat(5);
```
- repeat 함수는 매개변수를 통해 전달바은 숫자만큼 반복하며 Console.log(i)를 호출한다.

- 함수의 변하지 않는 공통 로직은 미리 정의해두고, 경우에 따라 변경되는 로직은 추상화 해서 함수 외부에서 함수 내부로 전달하는 것이다.
```
function repeat(n,f){
  for(var i = 0; i < n; i++){
    f(i);
  }
}
var logAll = function(i){
  console.log(i)
}
repeat(5, logAll)// 0 1 2 3 4

var logOdds = function(i){
  if(i % 2) console.log(i)
}
repeat(5,logOdds)// 1 3
```
- 위의 함수는 경우에 따라 변경되는 일을 함수 f로 추상화 했고 이를 외부에서 전달받는다.
- 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 하며, 매개 변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수를 고차 함수라고 한다. 

- 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다. 다시 말해 콜백 함수는 고차 함수에 의해 호출되며 이떄 고차 함수는 필요에 따라 콜백 함수에 인수를 전달 할 수 있다.
## 12.7.5 순수 함수와 비순수 함수
- 부수효과가 없는 함수를 순수함수라고 하고, 외부 상태에 의존하거나 외부 상태를 변경하는 부수효과가 있는 함수를 비순수 함수라고 한다.
- 함수 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋다.
- 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제해 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라 할 수 있다.
- 자바스크립트는 멀티 패러다임 언어이므로 객체지향 프로그래밍뿐만 아니라 함수형 프로그래밍을 적극적으로 활용하고 있다.