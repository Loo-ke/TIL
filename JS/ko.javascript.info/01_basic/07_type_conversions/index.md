# 07 type conversions
## 형변환
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환된다. 이런 과정을 '형 변환(type conversion)'이라고 한다.

전달받은 값을 의도를 갖고 원하는 타입으로 변환(명시적 변환)해주는 경우도 형 변환이라고 한다.

## 문자형으로 변환
문자형으로의 형 변환은 문자형의 값이 필요할 때 일어난다.

alert 메서드는 매개변수로 문자형을 받기 때문에, alert(value)에서 value는 문자형이어야 한다. 다른 형의 값을 전달받으면 자동으로 문자열로 변환된다.

String(value) 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있습니다.
```
let value = true;
alert (typeof value); // boolean

*!*
value = String(value);
alert(typeof value); // string
*/!*
```
## 숫자형으로 변환
숫자형으로의 변환은 수학과 관련딘 함수와 표현식에서 자동으로 일어난다.
숫자형이 아닌 값에 나누기를 적용한 경우와 같다.

```
alert("6" / "2"); //3
```
Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.
```
let str = "123";
alert(typeof str) // string

let num = Number(str);
alert(typeof num) // number
```
숫자 이외의 글자가 들어간 문자열을 숫자형으로 변환하려고 하면 `NaN`이 된다.
```
let age = Number("임의의 문자열 123");
alert(age); // NaN
```
## 불린형으로 변환
논리 연산을 수행할 때 발생한다. `Boolean(value)`을 호출하면 명시적으로 불리언 타입으로 형 변환을 할 수 있다.
불린형으로 변환 시 적용되는 규칙은 다음과 같다.
- 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 비어있다고 느껴지는 값들은 `false`가 된다.
- 그 외의 값은 `true`로 변환된다.

```
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
```
