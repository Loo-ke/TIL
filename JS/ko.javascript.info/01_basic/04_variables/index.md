# 04 variable
## 변수
- variable
- 데이터를 저장할 때 쓰이는 이름 붙은 저장소
- let 키워드를 사용해 변수를 생성

#### 선언
```
//hello라는 이름을 가진 변수를 선언
let hello;
```
#### 할당
```
let hello;
hello = "HELLO"; // 문자열 저장
```
#### 접근
```
let hello;
hello = "HELLO";

alert(hello)//
```
#### 한 줄로 작성
```
let hello = "HELLO";

 alert(hello)
```

#### 여러 변수를 한줄로 작성
```
let user = 'John', age = 25, message = 'Hello';
```
- 이 방법은 좋지 않다.
- 가독성 꽝!

#### basic is best
```
let user = 'John';
let age = 25;
let message = 'Hello';
```
#### 변수를 두 번 선언하면 에러 발생
```
let message = "This";

// 'let'을 반복하면 에러가 발생합니다.
let message = "That"; 
```
- 선언한 변수를 참조할땐 let없이 변수명만 사용해서 참조
### 변수 명명 규칙
- 변수명엔 오직 문자, 숫자, '$'와 '_'만 들어갈 수 있음
- 첫 글자로 숫자를 쓸 수 없음
- 대, 소문자 구별, a 와 A는 다른 변수
- 세계 각국의 언어를 변수명으로 사용할 수 있음 (영어를 사용하도록 하자...!)
- 예약어는 사용할 수 없음(let, class, function, return)
## 상수
- 변하지 않는 변수를 선언할때 사용
- const
- 재할당이 허용되지 않음
#### 대문자 상수
- 기억하기 힘든 값을 변수로 할당해 별칭으로 사용하는 것은 널리 사용되는 관습
- 대문자와 언더바로 구성됨
```
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
## 바람직한 변수명
- 변수명은 간결하고, 명확해야함. (변수가 무엇을 담고있는지 알 수 있게!)
##### 참고하기 좋은 규칙
- userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.
- 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.
- 최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.
- 자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.
