# 빌트인 객체

## 21.1 자바스크립트 객체의 분류

- 표준 빌트인 객체
  - 애플리케이션 전역의 공통 기능을 제공
- 호스트 객체
  - 자바스크립트 실행 황경에서 추가 제공하는 객체
- 사용자 정의 객체
  - 기본 제공 되는 객체가 아닌 사용자가 직접 정의한 객체
  ## 21.2 표준 빌트인 객체
- 자바스크립트는 40여개의 표준 빌트인 객체를 제공
- Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 생성자 함수 객체
- 표준 빌트인 객체인 String, Number, Boolean, Function, Array, Date는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다.

```
const strObj = new String("LEE");

console.log(Object.getPrototypeOf(strObj) === String.prototype); // true
```

- 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체는 다양한 기능의 빌트인 프로토타입 메서드를 제공 또한, 인스턴스 생성 없이도 호출 가능한 빌트인 정적 메서드 제공

```
// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);

// Number.prototype 에 프로토타입 메서드인 toFixed
console.log(numObj.toFixed()); // 2

// Number 빌트인 객체의 정적 메서드
console.log(Number.isInteger(0.5)); // false
```

## 21.3 원시값과 래퍼 객체

- 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다.

```
const str = 'hello';

console.log(str.length) // 5
console.log(str.toUpperCase()) // HELLO
```

- 이는 원시값인 문자열, 숫자, 불리언 값의 경우 원시값에 대해 마치 객체처럼 마침표 표기법으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해주기 떄문이다.
- **문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체**라고 한다.

```
const = str = 'hi';

//원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
console.log(str.length) // 2
console.log(str.toUpperCase()) // HI

//래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
console.log(typeof str) // string
```

> 와 여기 이해가 안된다...! 다시 봐야겠다.

- null과 undefined 값을 객체처럼 사용하면 에러가 발생한다.

## 21.4 전역 객체

- 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
- 어떤 객체에도 속하지 않는 최상위 객체
- 지칭하는 이름이 제각각이다.

  - 브라우저 환경에서는 window
  - node.js 환경에서는 global이 전역객체를 가르킨다.

- 전역 객체는 개발자가 의도적으로 생성할 수 없다. 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
- 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다.

```
window.parseInt('F', 16)// 15

parseInt('F', 16) // 15
window.parseInt == parseInt; // true
```

- 전역 객체는 Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Promise 같은 모든 표준 빌트인 객체를 프로퍼티로 갖는다.
- 자바스크립트 실행 환경에 따라 추가적으로 프로퍼티와 메서드를 갖는다.
- var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역, 그리고 전역 함수는 전역 객체의 프로퍼티가 된다.

```
var foo = 1;
console.log(window.foo) // 1
bar = 2;
console.log(window.bar) // 2

function baz(){ return 3; }
console.log(window.baz()) // 3
```

- let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉 window.foo와 같이 접근할 수 없다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

```
let foo = 123;
console.log(window.foo) // undefined
```

- 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다.

### 21.4.1 빌트인 전역 프로퍼티

- 빌트인 전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다.

##### Infinity

- Infinity 프로퍼티는 무한대를 나타내는 숫자값 Infinity를 갖는다.

```
// 전역 프로퍼티는 window를 생략하고 참조할 수 있다.
console.log(window.infinity === Infinity) // true

// 양의 무한대
console.log(3/0) // Infinity
// 음의 무한대
console.log(-3/0) // -Infinity
// Infinity는 숫자값이다.
console.log(typeof Infinity); // number
```

##### NaN

- NaN 프로퍼티는 숫자가 아님을 나타내는 숫자값 NaN을 갖는다. NaN 프로퍼티는 Number.NaN 프로퍼티와 같다.

```
console.log(window.NaN) // NaN
console.log(Number('xyz'))// NaN
console.log(1 * 'string') // NaN
console.log(typeof NaN) // number
```

##### undefined

- undefined 프로퍼티는 원시 타입 undefined를 값으로 갖는다.

```
console.log(window.undefined) // undefined

var foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined
```

### 21.4.2 빌트인 전역 함수

- 빌트인 전역 함수는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.

##### eval

- 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.
- eval 함수를 통해 사용자로 부터 입력받은 콘텐츠를 실행하는 것은 보안상 매우 취약하며, 자바스크립트 엔진에 의해 최적화가 수행되지 않는 코드 특성 상, 처리 속도도 느리다.
- 따라서, eval 함수를 사용하는 것은 옳지 않다.

##### isFinite

- 전달받은 인수가 정상적인 유한수인지 검사, 반환 값 boolean
  - 유한수 → true
  - 무한수 → false
  - 전달받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입 변환 후 검사를 수행 ( null 은 0으로 변환 후, 검사 -> true )

##### isNaN 함수

- 전달받은 인수가 NaN 인지 검사, 반환 값 boolean
  - 숫자가 아님 → true
  - 숫자 → false
  - 전달받은 인수의 타입이 숫자가 아닌 경우, 숫자로 타입을 변환 후 검사를 수행

##### parseFloat

- 전달받은 문자열 인수 를 실수(float)로 해석(parsing)하여 반환

##### parseInt

- 전달받은 문자열 인수를 정수로 해석하여 반환한다.
- 인수가 문자열이 아니면, 문자열로 변환 후 정수로 해석하여 반환
- 두 번째 인수로 진법을 나타내는 기수(radix)를 전달할 수 있다.
  - 첫 번째 인수로 전달된 문자열을 해당 기수의 숫자로 해석하여 반환
  - 반환값은 언제나 10진수

```
// '10' -> 10진수로 해석(parsing) -> 10진수 정수로 반환(10)
console.log(parseInt("10")); // 10

// '10' -> 2진수로 해석(parsing) -> 10진수 정수로 반환(2)
console.log(parseInt("10", 2)); // 2

// '10' -> 8진수로 해석(parsing) -> 10진수 정수로 반환(8)
console.log(parseInt("10", 8)); // 8

// '10' -> 16진수로 해석(parsing) -> 10진수 정수로 반환(16)
console.log(parseInt("10", 16)); // 16
```

- 기수를 지정하여 10진수 숫자 -> 해당 기수의 문자열로 반환 필요 시 -> Number.prototype.toString(radix) 메서드 적용

```
const x = 15;

console.log(x.toString(2)); // '1111'
console.log(parseInt(x.toString(2), 2)); // 15

console.log(x.toString(8)); // '17'
console.log(parseInt(x.toString(8), 8)); // 15

console.log(x.toString(16)); // 'f'
console.log(parseInt(x.toString(16), 16)); // 15

console.log(x.toString()); // '15'
console.log(parseInt(x.toString())); // 15
```

- 첫 번째 문자열 내에, 두 번째 인수로 전달한 radix 로 나타내는 숫자가 아닌 문자와 마주치면 전부 무시되고 해석된 정수값만 반환

```
// A은 10진법에서 벗어남 -> '10' 만 변환 -> 5
console.log(parseInt("1A0")); // 1

// 2은 2진법에서 벗어남 -> '10' 만 변환 -> 2
console.log(parseInt("102", 2)); // 2

// 8은 8진법에서 벗어남 -> '5' 만 변환 -> 5
console.log(parseInt("58", 8)); // 5

// G는 16진법에서 벗어남 -> 'F' 만 변환 -> 15
console.log(parseInt("FG", 16)); // 15
```

##### encodeURL / decodeURL

```
[ 💡 인코딩 / 디코딩 ]

+ 인코딩(encoding) : URI(Uniform Resource Identifier)의 문자들을 "이스케이프" 처리하는 것을 의미
+ 디코딩(decoding) : 인코딩된 URI를 이스케이프 이전 상태로 복원하는 것을 의미
```

- 이스케이프 처리 는 네트워크를 통해 정보를 공유할 때, 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환하는 것
  - URL은 아스키 문자 셋으로 구성되어야 하며 한글을 포함한 대부분의 외국어나 아스키 문자 셋에 정의되지 않은 특수 문자를 포함하지 않아야 한다.
    따라서, URL 내부에서 의미를 갖고 있는 문자( %, ?, # ) 나 한글, 공백 등 또는 시스템에 의해 해석될 수 있는 문자( <, > ) 를 이스케이프 처리하여 야기될 수 있는 문제를 예방해야 한다.
  - 단, 알파벳, 0~9의 숫자, -, \_, ., !, ~, \*, ', (, ) 문자는 이스케이프 처리에서 제외

```
// 완전한 URI
const uri = "http://example.com?name=위영민&job=programmer&student";

// 원래 URI 형태 -> 이스케이프 처리된 URI 형태로
const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%EC%9C%84%EC%98%81%EB%AF%BC&job=programmer&student

// 인코딩(이스케이프 처리)된 URI -> 원래 URI 형태로
const dec = decodeURI(enc);
console.log(dec); // http://example.com?name=위영민&job=programmer&student
```

##### encodeURIComponent / decodeURIComponent 함수

- encodeURI / decodeURI 와의 차이점은 URI 전체가 아닌, URI의 구성요소인 쿼리 스트링의 일부로 간주
- 따라서, 쿼리 스트링 구분자로 사용되는 ( =, ? , & ) 까지 인코딩한다.
  - encodeURI 함수 는 매개변수로 전달된 문자열을 URI 전체 라고 간주
  - 따라서, 쿼리 스트링 구분자로 사용되는 ( =, ?, & ) 까지 인코딩하진 않는다.

```
// URI의 쿼리 스트링(구성요소만)
const uriComp = "name=위영민&job=programmer&student";

// encodeURIComponent 는 쿼리 스트링 구분자(=, ?, &)까지 인코딩한다.
let enc = encodeURIComponent(uriComp);
console.log(enc); // name%3D%EC%9C%84%EC%98%81%EB%AF%BC%26job%3Dprogrammer%26student

let dec = decodeURI(enc);
console.log(dec); // name%3D위영민%26job%3Dprogrammer%26student

// encodeURI 는 쿼리 스트링 구분자(=, ?, &)는 인코딩 하지 않는다.
enc = encodeURI(uriComp);
console.log(enc); // name=%EC%9C%84%EC%98%81%EB%AF%BC&job=programmer&student

dec = decodeURI(uriComp);
console.log(dec); // name=위영민&job=programmer&student
```

### 21.4.3 암묵적 전역

```
var x = 10;
function foo(){
  y = 20;
}
foo();
console.log(x + y); // 30
```

```
// 전역 변수 x는 호이싕이 발생한다.
console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
console.log(y); // 레퍼런스 에러

var x = 10;

function foo(){
  y = 20;
}
foo()
// 선언하지 않은 식별자 y를 참조할 수 있다.
console.log(x + y) // 30
```

- 변수가 아닐 ㅏ단지 프로퍼티인 y는 delete 연산자로 삭제할 수 있다.
- 전역 변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.

```
var x = 10;
function foo(){
  y = 20;
  console.log(x + y);
}
foo(); // 30

console.log(window.x); // 10
console.log(window.y) // 20

delete x;// 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y) // undefined
```
