# 05 mutation
- 쿼리와 뮤테이션의 응답 내용의 구조는 상당히 직관적이다. 
- gql은 query와 mutation을 나누는데 내부적으론 사실 별 차이가 없다. 별 차이는 없는데 개념적인 규약만 정해놓았다.
- query는 데이터를 읽는데(R) 사용하고, mutation은 데이터를 변조(CUD)하는데 사용한다.
## Mutation 
- 여태까지는 데이터 가져오기에 초점을 맞추었다.
- 데이터 플랫폼은 서버 측 데이터를 수정할 수 있어야한다.
- REST API에서는 수정을 위해 `GET`요청을 하지 않는다.
- gql도 마찬가지로 변경을 발생시키는 작업은 명시적으로 `mutation`을 통해 전송되어야 한다는 규칙을 정하는 것이 좋다.
```
mutation CreateCommentForUser($nm : Name!, $comment : CommentInput!){
    createComment(name : $nm, comment : $comment){
        stars
        commentary
    }
}
// variables
{
    "userId" : "김옥자",
    "comment" : {
        "stars" : 5,
        "commentary" : "짱이에요!!"
    }
}
```
```
// 응답
{
  "data": {
    "nm" : "김옥자"
    "comment": {
      "stars": 5,
      "commentary": "짱이에요!!"
    }
  }
}
```
- createComment 필드가 새로 생성된 댓글의 stars와 commentary필드를 반환한다.
- 하나의 요청으로 필드의 새 값을 변경할 수 있기 때문에 기존 데이터를 변경하는 경우(필드를 증가시킬때) 유용하다.
## Inline Fragments
- 객체 리스트를 반환하는 방법은 살펴보았다. 이들은 모두 한가지 타입의 리스트로만 반환이 되었다. 여러개의 타입을 리스트에 받아와 반환할 수 는 없는걸까?
- 유니언  타입을 만들면 된다.
```
type StudyGroup {
    name: String!
    subject: String!
    students: Int!
}

type Workout {
    name: String!
    reps: Int!
}

union AgendaItem = Workout | StudyGroup

type Query {
    agenda: [AgendaItem!]!
}
// 요청
{
  agenda {
    ...on Workout {
      name
      reps
    }
    ...on StudyGroup {
      name
      subject
      students
    }
  }
}

{
    "agenda" : "StudyGroup"
}
```
```
//응답
{
    "data" : "{
        "agenda" : [
            {
                "name" : "Jenny",
                "subject" : "Computer Science",
                "students" : 12
            },
            {
                "name" : "Luke",
                "subject" : "English",
                "students" : 3
            },
        ]
    }"
}
```
- 하나는 {name, subject, student}이고, 다른 하나는 {name, reps}로 타입이 다르다.