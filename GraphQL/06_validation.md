# 06 validation

## 검증
```
{
  hero {
    ...NameAndAppearances
    friends {
      ...NameAndAppearances
      friends {
        ...NameAndAppearances
      }
    }
  }
}

fragment NameAndAppearances on Character {
  name
  appearsIn
}
```
```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        {
          "name": "Luke Skywalker",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ],
          "friends": [
            {
              "name": "Han Solo",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "Leia Organa",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "C-3PO",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "R2-D2",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            }
          ]
        },
        {
          "name": "Han Solo",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ],
          "friends": [
            {
              "name": "Luke Skywalker",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "Leia Organa",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "R2-D2",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            }
          ]
        },
        {
          "name": "Leia Organa",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ],
          "friends": [
            {
              "name": "Luke Skywalker",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "Han Solo",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "C-3PO",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            },
            {
              "name": "R2-D2",
              "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
              ]
            }
          ]
        }
      ]
    }
  }
}
```
- 위의 쿼리는 유효한다.
### 잘못된 쿼리를 살펴보자!
## 자기 자신을 참조, 사이클을 할 수 없다.
```
{
  hero {
    ...NameAndAppearancesAndFriends
  }
}

fragment NameAndAppearancesAndFriends on Character {
  name
  appearsIn
  friends {
    ...NameAndAppearancesAndFriends
  }
}
```
- 무한한 결과를 초래할 수 있으므로 프래그먼트가 자기자신을 참조하거나 싸이클을 만들 수 없다. 
## 주어진 타입에 존재하는 필드를 쿼리
- 필드를 쿼리할 때, 주어진 타입에 존재하는 필드를 쿼리해야한다. hero는 Character를 반환한다.
- 그렇기 때문에 Character에 존재하는 필드를 쿼리해야한다.
```
{
  hero {
    favoriteSpaceship//INVAILD : favoriteSpaceship does not exist on Character
  }
}
```
## 어떤 데이터를 얻고자 하는지 명시해야한다.
- Hero 는 Character 를 반환하기 때문에, name 과 appearIn 과 같은 필드를 요청했다.
- 하지만 이를 생략하면 쿼리가 유효하지 않다.
```
//# INVALID: hero is not a scalar, so fields are needed
{
  hero//error
}
```
- 마찬가지로 필드가 스칼라인 경우에는 추가적인 필드를 요청하는 것은 의미가 없기에 쿼리가 유효하지 않다.
```
# INVALID: name is a scalar, so fields are not permitted
{
  hero {
    name {
      firstCharacterOfName//error
    }
  }
}
```
- `Character`에 있는 필드만 쿼리할 수 있는데, 만약 `R2-D2`의 `primaryFunction`을 쿼리를 하려면 유효하지 않다.
```
# INVALID: primaryFunction does not exist on Character
{
  hero {
    name
    primaryFunction
  }
}
```
- 위의 문제는 이전에 배운 Fragment로 수행할 수 있다.
- `Character`가 `Droid`인 경우에만 `primaryFunction`을 가져오고 그 외엔 필드를 무시 
```
{
  hero {
    name
    ...DroidFields
  }
}
​
fragment DroidFields on Droid {
  primaryFunction
}
```
- 이름이 있는 프래그먼트는 재사용할 때 가치가 있지만, 여기서는 단 한번 사용했다.
- 이 경우에는 프래그먼트 사용하는 대신에 인라인 프래그먼트를 사용할 수 있다.
```
{
  hero {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
```
참고 : https://github.com/graphql/graphql-js/tree/main/src/validation