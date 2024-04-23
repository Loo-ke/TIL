# 11 논리 연산자
세 종류의 논리 연산자 `||`(OR), `&&`(AND), `!`(NOT)이 있다.
## ||(OR)
OR 연산자는 두 개의 수직선 기호로 만들 수 있다.
```
result = a || b;
```
전통적인 프로그래밍에서 OR 연산자는 불린값을 조작하는데 쓰인다. 인수 중 하나라도 true이면 true를 반환하고 그렇지 않으면 false를 반환한다.

OR 연산자는 이항 연산자이므로 네가지 조합이 가능하다.
```
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```
피연산자가 모두 false인 경우를 제외하고 연산 결과는 항상 true이다. 피연산자가 불린형이 아니면 평가를 위해 불린형으로 변환된다.

OR 연산자는 if문에서 자주 사용된다. 주어진 조건 중 하나라도 참인지를 테스트하는 용도이다.
```
    let hour = 9;

*!*
if (hour < 10 || hour > 18) {
*/!*
  alert( '영업시간이 아닙니다.' );
}
```
### 첫 번쨰 truthy를 찾는 OR 연산자
지금까진 피연산자가 불린형인 경우만을 다뤘다. 
OR 연산자와 피연산자가 여러개인 경우 
```
result = value1 || value2 || value3;
```
아래의 규칙을 따른다.
- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
- 각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
- 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가되는 경우)엔 마지막 피연산자를 반환합니다.
```
alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)
```
## &&(AND)
```
result = a && b;
```
AND 연산자는 두 피연산자가 모두 참일 때 true를 반환한다. 그 외의 경우 false를 반환한다.
```
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```
### 첫 번째 falsy를 찾는 AND 연산자
```
result = value1 && value2 && value3;
```
이런 규칙을 따른다.
- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
- 각 피연산자는 불린형으로 변환됩니다. 변환 후 값이 false이면 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
- 피연산자 모두가 평가되는 경우(모든 피연산자가 true로 평가되는 경우)엔 마지막 피연산자가 반환됩니다.

```
// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0
```
## !(NOT)
```
result = !value;
```

NOT 연산자는 인수를 하나만 받는다.
- 피연산자를 불린형(true / false)으로 변환합니다.
- 1에서 변환된 값의 역을 반환합니다.
```
alert( !true ); // false
alert( !0 ); // true
```
NOT을 연달아 사용하면 (!!) 값을 불린형으로 변환할 수 있다.
```
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```
```
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```
위의 코드와 동일하게 작동한다.

