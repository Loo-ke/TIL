# 14 전역 변수
- 변수는 선언에 의해 생성 -> 할당을 통해 값을 찾음 -> 언젠가는 소멸
- 변수에 생명주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 이상 영원히 메모리 공간을 점유하게 된다.
## 14.1 변수의 생명주기
### 14.1.1 지역변수 생명 주기
- 함수가 호출되어 실행되는 동안에만 유효하다.
```
function foo(){
  var x = "local";
  console.log(x)// local 
  return x
}

foo()
console.log(x)// 레퍼런스 : 에러 x를 못찾음
```
#### 지역 변수 호이스팅 스코프 
- 지역 변수의 호이스팅은 지역 변수의 선언이 지역 스코프의 선두로 끌어 올려진 것 처럼 동작
```
var x = "global";

function foo(){
  console.log(x);//undefined
  var x = 10;
  return x
}
foo()
console.log(x)"global"
```
- foo 함수 내부에 선언된 x 변수는, foo 함수 호출 시 이미 undefined로 초기화 되어 있음 (변수 선언과정이 이미 끝남, 값 할당과정은 X)
따라서, console 출력문을 만나는 시점에는 아직 x에 값이 할당되기 이전이기 때문에 undefined를 출력
- 중요한 것은 최상단에 전역변수 x까지는 스코프가 유효하지 않다는 것, 즉 함수 내부에서 선언된 지역변수는 함수 내에서만 스코프를 가짐
### 14.1.2 전역 변수 생명 주기
- var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치
- 전역 코드는 명시적인 호출 없이 실행된다.
  - 전역 코드는 함수 호출과 같이 전역 코드를 실행하는 특별한 진입점이 없다.
  - 로드 되자마자 곧바로 해석되고 실행된다.
  - 함수는 함수 몸체의 마지막 문 or 반환문이 실행되면 종료하지만, 전역코드는 반환문이 없으므로 마지막 문이 실행되어 더 이상 실행할 코드가 없을 때 비로소 종료한다.
  - var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다.
## 14.2 전역 변수의 문제점
- 암묵적 결합
  - 코드 내 어디서든 참조하고 할당 할 수 있는 변수를 사용하겠다는 것
  - 이는, 모든 코드가 전역 변수를 참조하고 변경할 수 있다는 것과 같은 의미
  - 변수의 유효범위가 크면 클수록 코드의 가독성은 나빠지고, 의도치 않게 상태가 변경될 수 있는 위험도를 증가시킨다.
- 긴 생명주기
  - 전역 변수는 프로그램이 종료하기 전까지 메모리 공간에 할당되어 해제되지 않는다.
  - 메모리 리소스를 오랜 기간 소비한다.
  - var 키워드로 선언한 변수인 경우, 변수의 중복 선언을 허용 -> 변수 이름이 중복될 가능성이 높고 이는 의도치 않은 재할당이 이뤄질 가능성을 유발
- 스코프 체인 상에서 종점에 존재
  - 변수를 검색할 때 전역 변수가 가장 마지막에 검색 된다는 것
  - 전역 변수의 검색 속도가 가장 느리다.
- 네임 스페이스 오염
  - 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유
  - 다른 파일 내에서 동일한 이름의 전역 변수나 전역 함수는 같은 스코프 내에 존재할 경우 예상치 못한 결과를 초래함.

## 14.3 전역 변수의 사용을 억제하는 방법
**전역 변수를 반드시 사용해야할 이유를 찾지 못한다면 지역 변수를 사용해야한다. 변수의 스코프는 좁을수록 좋다**
1. 즉시 실행 함수 사용
- 함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한 번만 호출된다.
- 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
```
(function (){
  var foo = 100;
})
console.log(foo); // foo is not defined
```
2. 네임 스페이스 객체 사용
- 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
```
var MYAPP = {};// 전역 네임 스페이스 객체

MYAPP.person = {
  name : "LEE",
  age : 100,
}
console.log(MYAPP.person.name)
```
3. 모듈 패턴 사용
- 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만드는 방법
- 자바스크립트의 강력한 기능인 클로져를 기반으로 동작
- 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 장점
```
/*
Counter 변수에는 즉시 실행함수로 생성된 클래스 느낌의 객체가 값으로 할당되어 있다.
반환하는 public 한 성질의 메서드들은 외부에서 참조 가능
반환하지 않고 즉시 실행 함수 내부에서 선언되어 있는 변수는 private 한 성질을 가져, 외부에서 참조 불가능
*/
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드 프로퍼티를 추가한 객체를 반환
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num); // undefined << 🔎 ( private 변수는 외부로 노출되지 X )
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
```
4. ES6 모듈
- 파일 자체의 독자적인 모듈 스코프를 제공
- 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니게 된다.