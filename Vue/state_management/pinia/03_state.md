# 3 State

상태는 대부분 스토어를 중심으로 이루어지며, 일반적으로 앱을 나타내는 상태를 정의하는 것으로 시작한다. 피니아에서 상태는 초기 상태를 반환하는 함수로, 이를 통해 피니아는 서버측과 클리이언트 측 모두 작동할 수 있다.

```
import {defineStore} from 'pinia'

export const useState = defineStore('storeId', {
    state : () => {
        return {
            count : 0,
            name : "luke",
            isAdmin : true,
            items : [],
            hasChanged:true,
        }
    },
})
```

## TypeScript
TS와 호환되는 상태를 만들기 위해 많은 작업을 수행할 필요가 없다. `Strict` 또는 `noImplicitThis`가 활성화 되어 있는지 확인하고 피니아가 자동으로 상태 유형을 추론한다. 그러나 몇몇의 경우에는 타입 캐스팅을 보조 해야한다.

```
export const useUserStore = defineStore('user', {
    state : ()=>{
        return {
            userList : [] as UserInfo[],
            user : null as UserInfo | null,
        }
    },
})

interface UserInfo {
    name : string
    age : number
}
```

원하는 경우 인터프레스로 상태를 정의하고 `state()`로 반환값 유형을 정의할 수 있다.
```
interface State {
    userList : UserInfo[]
    user : UserInfo | null
}
export const useUserStore = defineStore('user', {
    state : () : State => {
        return {
            userList :[],
            user: null,
        }
    },
})

interface UserInfo{
    name : string
    age : number
}
```
## `state`에 접근
기본적으로 `store` 인스턴스로 상태에 접근하여 상태를 직접 읽고 쓸 수 있다.
```
const store = useStore()

store.count++
```
만약 `state()`에 상태를 정의해두지 않았다면 새 상태 속성을 추가할 수 없다. 예를 들어 `state()`에 `secondCount`가 정의되어 있지 않으면, `state.secondCount = 2`를 수행할 수 없다.
## 상태 재설정
`$reset()` 메서드를 호출하여 상태를 초기 값으로 재설정 할 수 있다.
```
const store = useStore()

store.$reset()
```
내부적으로 이 것은 `state()`함수를 호출하여 새로운 상태 객체를 생성하고 현재 상태를 대체한다.

**셋업 스토어**에서는 자신만의 `$reset()` 메서드를 만들어야 한다.
```
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function $reset(){
        count.value = 0
    }
    return {count, $reset}
})
```
### 옵션 API와 사용
```
// 예제 파일 경로:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
})
```
컴포지션 API를 사용하지 않고 computed, methods, ...을 사용하는 경우 `mapState()`헬퍼를 사용하여 상태 속성을 읽기 전용 계산된 속성으로 매핑할 수 있다
```
// 예제 파일 경로:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
})
```
### 수정 가능한 state
state 속성을 쓸 수 있도록 하려면 `mapWritableState()` 를 사용해야 한다. `mapState()` 처럼 함수를 전달할 수 없다.
```
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // 컴포넌트 내부에서 `this.count`로 접근할 수 있게 하고,
    // `this.count++`와 같이 수정도 허용함.
    // `store.count`에서 읽는 것과 동일.
    ...mapWritableState(useCounterStore, ['count']),
    // 위와 같지만 `this.myOwnName`으로 등록.
    ...mapWritableState(useCounterStore, {
      myOwnName: 'count',
    }),
  },
}
```
## 상태 변경하기
`store.count++`로 스토어를 직접 변경하는 방법 이외에도 `$patch`메소드를 호출하여 state 객체의 일부분을 동시에 변경할 수 있다.
```
store.$patch({
    count : store.count + 1,
    age : 120,
    name : "JEDI",
})
```
컬렉션을 수정(배열에서 요소를 push, pop, splice)하려면 새로운 컬렉션을 만들어야 한다. $patch 메소드는 적용하기 어려운 종류의 `mutations`를 그룹화 하는 함수도 허용한다.
```
store.$patch((state) => {
    state.items.push({name : 'shoes', quantity : 1})
    state.hasChanged = true
})
```
여기서 주요 차이점은 `$patch()`를 사용하여 devtools에서 여러 변경 사항을 하나의 항목으로 그룹화할 수 있다. state와 $patch에 대한 직접적인 변경 사항은 모두 devtools에 나타나며, 시간 추적이 가능하다.

## state 교체하기
반응형을 깨트릴 수 있으므로 스토어의 상태를 정확히 교체할 수 없다. 그러나 패치할 수 있다.
```
store.$state = {count : 24} // 실제로 $state를 교체하지 않음
store.$patch({ count : 24})
```
Pinia 인스턴스의 `state`를 변경하여 전체적으로 앱의 초기상태를 설정할 수 있다.
```
pinia.state.value = {}
```
## 상태 구독
#### (나중에 다시 봐야될 듯)