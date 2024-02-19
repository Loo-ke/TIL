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
