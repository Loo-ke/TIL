# 04 query
- 쿼리와 뮤테이션의 응답 내용의 구조는 상당히 직관적이다. 
- gql은 query와 mutation을 나누는데 내부적으론 사실 별 차이가 없다. 별 차이는 없는데 개념적인 규약만 정해놓았다.
- query는 데이터를 읽는데(R) 사용하고, mutation은 데이터를 변조(CUD)하는데 사용한다.
## query : 읽기 전용으로 데이터를 가져오기 위한 메서드
- query를 통해 가져오는 데이터는 객체 단위로 가져와지며 이름, 변수, 필드 총 3가지 구성요소로 이루어진다.

- 사용자 정보(user info)를 가져오기 위한 query이다.
- 아래 query에서는 사용자 정보를 가져오는데 이름, 회사, 스킬들을 가져온다.
```
//요청
query UserInfo($id : ID){
    user(userID : $id){
        name
        company
        skils
    }
}
```
#### Query Name 
- `ProductInfo`
- query의 이름은 가져온 데이터에 영향을 미치지 않으며, query가 어떤 query인지 식별하기 위한 용도로 사용된다.
#### Variable 
- `($id(variable) : ID(type))`
- 변수는 $가 앞에 붙어 선언된 값, ':' 기준으로 왼쪽에 변수명이 오고 오른쪽에는 변수 타입이 온다. 이곳에는 우리가 데이터를 가져오기 위해 넣어야하는 변화하는 값을 넣는다.
- 예를들어 ID를 식별자로 제품의 정보를 가져오고 싶다면 id라는 변수를 $id로 선언 후 뒤에 타입인 ID를 붙이면 된다.
#### Field
```
user(userID : $id){
    name
    company
    skils
}
```
- 우리가 가져오려 하는 데이터의 스키마와 정보들이 들어간다.
- 여러 스키마와 정보의 집합이며 정보는 int, string, float, boolean 같은 Primitive Type 혹은 Array가 될 수 있다.
- **필드를 정의함으로써 우리가 가져오고자 하는 데이터를 객체 단위로 가져올 수 있다.**
### 응답
```
//응답
{
    "data" : {
        "user"{
            "name" : "Luke Lee",
            "company" : "DEVD",
            "skils" : [
                "JavaScript",
                "React"
            ]
        }
    }
}
```
#### parameter
- 필드에는 인자가 들어갈 수 있는데 인자는 필드에서 필드값만 가져오기 위한 식별자이다.
- 인자값은 직접 작성할 수 있고, 선언한 변수를 대입할 수 있다.

```
//요청
query UserInfo($id : ID = 1){
    user(userID : $id){
        name
        company
        skils
    }
}
```
```
//응답
{
    "data" : {
        "user"{
            "name" : "Luke Lee",
            "company" : "DEVD",
            "skils" : [
                "JavaScript",
                "React"
            ]
        }
    }
}
```
#### 인자에 변수를 직접 대입시킬 수 있다.
```
//요청
query UserInfo{
    user(userID : 1){
        name
        company
        skils
    }
}
```
```
//응답
{
    "data" : {
        "user"{
            "name" : "Luke Lee",
            "company" : "DEVD",
            "skils" : [
                "JavaScript",
                "React"
            ]
        }
    }
}
```
## aliases(별칭)
- 객체 결과의 필드가 쿼리의 필드 이름과 일치하지만 인자는 그렇지 않으므로 다른 인자를 사용하여 같은 필드를 직접 쿼리할 수는 없다.
그렇기 때문에 필드의 결과를 원하는 이름으로 바꿀 수 있다.
```
//요청
{
    firstUser : user(part : DEVELOP){
        name
    }
    secondUser : user(part : MARKETING){
        name
    }
}
```
```
//응답
{
    "data":{
        "firstUser" : {
            "name" : "김영미"
        },
        "secondUser" : {
            "name" : "홍길동"
        }
    }
}
```
## Fragments
- 친구를 가진 두 유저를 순서대로 요청한다고 치면 필드를 최소 두번 반복해야된다.
- 프래그먼트라는 재사용 가능한 단위가 있다.
```
//요청
{
    firstFragment : user(part : DEVELOP){
        ...repeatFields
    }
    secondFragment : user(part : MARKETING){
        ...repeatFields
    }
    fragmanet repeatFields on Member{
        name
        skills
        friends{
            name
        }
    }
}
```
```
//응답
{
    "data":{
        "firstFragment":{
            "name" : "김영미",
            "skills" : [
                "JavaScript",
                "React"
            ],
            "friends":[
                {
                    "name" : "김영민"
                },
                {
                    "name" : "이하람"
                },
                {
                    "name" : "최민호"
                }
            ]
        },
         "secondFragment":{
            "name" : "홍길동",
            "skills" : [
                "run",
                "marketing"
            ],
            "friends":[
                {
                    "name" : "이순신"
                },
                {
                    "name" : "이세종"
                },
                {
                    "name" : "김제니"
                }
            ]
        }
    }
}
```
## 일반 쿼리, 오퍼레이션 네임 쿼리
- 하나는 앞에 query가 붙고, 하나는 처음 시작이 중괄호인 query가 있다.
- 주로 정보를 불러올때 id값이나, 인자 값을 가지고 데이터를 불러올 것이다.
- gql에는 쿼리에 변수라는 개념이 있는데, gql을 구현한 클라이언트에서는 이 변수에 프로그래밍으로 값을 할당할 수 있는 함수 인터페이스가 존애한다.
- react apollo client의 경우에는 variables라는 파라미터에 원하는 값을 넣어주면 된다.


## 오퍼레이션 네임 쿼리 
- 지금까지 query키워드와 query 이름을 모두 생략한 단축 문법을 사용했다. 실제 애플리케이션에서는 코드를 덜 헷갈리게 작성하는 것이 좋다.
```
// 단축문법
{
    user(part:DEVELOP){
        name
    }
}
```
```
//operation name
query userName{
    user{
        name
    }
}
```

## Directives
```
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```
```
//valiables
{
  "episode": "JEDI",
  "withFriends": false // or true
}
```
```
// ------"withFriends": false------
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
// -----"withFriends": true------
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```
> `@include(if : Boolean)` - 인자가 true인 경우에만 이 필드를 결과에 포함한다.
>
>`@skip(if : Boolean)` - 인자가 true이면 이 필드를 건너 뛴다.