# 02 what is GraphQL?
## GraphQL이란?
- 현실 세계의 데이터를 표현하는 가장 적합한 방법이 **Graph**라는 사실에 착안
- API를 위한 Query Language
- SQL(Structed Query Language)와 마찬가지로 Query Language이다.
    - sql : 데이터베이스 시스템에 저장된 데이터를 가져오는 목적
    - gql : 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 목적

## REST vs GQL
- REST API는 API에 접근하는 클라이언트의 급변하는 요구사항을 따라잡기엔 유연성이 떨어진다.
- GraphQL은 더 많은 유연성과 효율성에 대한 요구에 대처하기 위해 개발
- 즉, REST API를 사용할때 경험하는 단점과 비효율성을 해결한다.
### REST의 데이터 가져오기
- REST API를 사용하면 일반적으로 여러 엔드포인트를 사용한다.
- 예시 엔드포인트
    - `/user/<id>` - 사용자 데이터를 가져오는 엔드포인트
    - `/user/<id>/posts` - 사용자의 모든 게시물
    - `/user/<id>/followers` - 사용자의 팔로어 목록
![01_gql](./img//01_gql.png)
    - 필요한 데이터를 가져오기 위해 서로 다른 엔드포인트에 세가지 요청을 한다. 엔드포인트가 필요하지 않은 추가 정보를 반환하므로 overfetching도 발생한다.
>오버페칭(Overfetching) : 클라이언트가 필요로하지 않는 추가 데이터까지 서버로부터 받아오는 상황

>언더페칭(Underfetching) : 클라이언트가 필요한 데이터를 한 번의 요청으로 가져올 수 없어 여러 번의 추가 요청이 필요한 상황
### GQL 데이터 가져오기
- 구체적인 데이터 요구사항이 포함된 단일 쿼리를 서버에 보낸다.
- 서버는 이러한 요구사항이 충족되는 JSON개체로 응답한다.
    ![02_gql](./img//02_gql.png)

### 정리
- REST API를 사용하면 나오는 문제
    - 오버페칭
    - 언더페칭
- **여러 엔드포인트가 아닌 하나의 엔드포인트를 만들고 한번의 요청으로 원하는 정보를 얻는다.** 즉, 오버페칭, 언더페칭 문제가 해결된다.



이미지 출처 : https://www.howtographql.com/basics/1-graphql-is-the-better-rest/