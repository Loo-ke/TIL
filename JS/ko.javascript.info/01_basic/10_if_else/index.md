# 10 if_else
## if와 ?를 사용한 조건 처리
if문과 물음표 연산자라고 불리는 조건부 연산자 ?를 알아보자
## if문
`if(...)`문은 괄호 안에 들어가는 조건을 평다하는데 결과가 `true`면 코드 블록이 실행된다.
```
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

*!*
if (year == 2015) alert( '정답입니다!' );
*/!*
```
### 불린형으로 변환
`if(...)`문은 괄호 안의 표현식을 평가하고 그 결과를 불린 값으로 변환한다.
### else 절
if 문엔 else절을 붙일 수 있다. else 뒤에 이어지는 코드 불록은 조건이 거짓일때 실행된다.
```
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert( '정답입니다!' );
} else {
  alert( '오답입니다!' ); // 2015 이외의 값을 입력한 경우
}
```

### else if로 복수 조건 처리하기
유사하지만 약간 차이가 있는 조건 여러개를 처리해야 할 때 else if를 사용할 수 있다.
```
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
  alert( '숫자를 좀 더 올려보세요.' );
} else if (year > 2015) {
  alert( '숫자를 좀 더 내려보세요.' );
} else {
  alert( '정답입니다!' );
}
```

마지막에 붙는 else는 선택 사항이다.

## 조건부 연산자 `?`
조건에 따라 다른 값을 변수에 할당해줘야 할 때가 있다.
```
let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

alert(accessAllowed);
```
위의 코드를 조건부 연산자를사용하면 더 짧고 간결하게 변형할 수 있다.
조건부 연산자는 물음표로 표시한다. 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항 연산자' 라고 부른다. 
```
let result = condition ? value1 : value2;
```
condition이 true라면 value1, 그렇지 않으면 value2가 반환된다.

## 다중 '?'
물음표 연산자를 여러 개 연결하면 복수의 조건을 처리할 수 있다.

```
let age = prompt('나이를 입력해주세요.', 18);
let message = (age < 3) ? '아가야 안녕' :
(age < 18 ) ? 안녕 :
(age < 100 )? '환영합니다!' : 
'나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!'

alert(message);
```