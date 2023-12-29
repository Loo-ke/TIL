# 03 schema resolver
## schema
- REST API의 문제였던 프론트와 백의 커뮤니케이션 문제를 GQl이 해결할 수 있다.
- REST API는 서버에서 데이터를 내려준대로 활용
- GraphQL은 클라이언트에서 가져올 데이터를 선언할 수 있다.
- 프론트와 백이 스키마를 같이 정의하는 것으로 커뮤니케이션 비용을 줄인다. 서로 무엇이 필요한지 정의, 공유
#### SDL(Schema Definition Language)
```
type Person {
    name : String!
    age : Int!
}
```
- **이 구조를 gql에선 스키마라고 한다.**
- 필드 : name, age 
- 타입 : String, Int
- 느낌표(!) : 필수 값을 의미(non-nullable)
- 대괄호([, ]) : 배열을 의미(array)
```
type Post { 
    title : String!
    author : Person!
}
```
```
type Person {
    name : String!
    age : Int!
    posts : [Post!]!
}
```

## resolver
- gql 쿼리에서 각각의 필드마다 함수가 하나씩 존재한다고 생각하면 된다. 이 각각의 함수를 **리졸버(resolver)라고 한다.**
- 리졸버 함수는 어디서 어떻게 데이터를 가져올지 지시
- 만약 필드가 스칼라 값(문자열, 숫자와 같은 primitive 타입)인 경우 실행이 종료, 스칼라가 아닌 우리가 정의한 타입이라면 해당 타입의 리졸버를 호출
- **리졸버 함수는 gql의 뒤에서 움직이는 대부분의 처리 로직으로 스키마의 각 필드는 리졸버 함수와 연동, 리졸버 함수에는 각 필드가 어떤 값을 가져와야하는지 정의**
```
type Query {
  users: [User]
  user(id: ID): User
  limits: [Limit]
  limit(UserId: ID): Limit
  paymentsByUser(userId: ID): [Payment]
}

type User {
	id: ID!
	name: String!
	sex: SEX!
	birthDay: String!
	phoneNumber: String!
}

type Limit {
	id: ID!
	UserId: ID
	max: Int!
	amount: Int
	user: User
}

type Payment {
	id: ID!
	limit: Limit!
	user: User!
	pg: PaymentGateway!
	productName: String!
	amount: Int!
	ref: String
	createdAt: String!
	updatedAt: String!
}
```
- User와 Limit는 1:1 관계, User와 Payment는 1:n 관계
```
Query: {
    paymentsByUser: async (parent, { userId }, context, info) => {
        const limit = await Limit.findOne({ where: { UserId: userId } })
        const payments = await Payment.findAll({ where: { LimitId: limit.id } })
        return payments        
    },  
  },
  Payment: {
    limit: async (payment, args, context, info) => {
      return await Limit.findOne({ where: { id: payment.LimitId } })
    }
  }
```
- 첫번째 인자 : parent로 연쇄적 호출에서 부모 리졸버가 리턴한 객체, 이 객체를 활용해서 현재 리졸버가 내보낼 값을 조절
- 두번째 인자 : args로 쿼리에서 입력으로 넣은 인자
- 세번째 인자 : context로 모든 리졸버에게 전달, 주로 미들웨어를 통해 입력된 값들이 들어있다. 로그인 정보, 권한과 같이 주요한 컨텍스트 관련 정보를 가지고 있다.
- 네번째 인자 : info로 스키마 정보와 더불어 현재 쿼리의 특정 필드 정보를 가지고 있다.

## 정리
- 프론트엔드와 백엔드가 먼저 스키마를 정의한 후 백엔드는 그 데이터를 가져오기 위한 각각의 리졸버 함수를 정의
- 클라이언트에서 GraphQL 언어로 텍스트 형태로 필요한 데이터를 요청 -> 백엔드에서 구현된 GraphQL Runtime이 요청을 해석하여 클라이언트가 원하는 데이터를 응답