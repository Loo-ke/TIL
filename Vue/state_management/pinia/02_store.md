# Store
스토어가 `defineStore()`를 사용해 정의되고 고유한 이름이 첫 번째 인자로 전달되어야 한다.

```
import { defineStore } from 'pinia'

// `defineStore()`의 반환 값(함수)을 할당할 변수의 이름은 원하는 대로 지정할 수 있지만,
// 스토어 이름을 사용하고 `use`와 `Store`로 묶는 것이 가장 좋습니다.
// 예: `useUserStore`, `useCartStore`, `useProductStore`
// 첫 번째 인자는 앱 전체에서 스토어의 고유 ID입니다.
export const useAlertsStore = defineStore('alerts', {
    //...
})
```
## 옵션 스토어
Vue의 옵션 API와 유사하게 state, actions, getters 속성을 사용하여 옵션 객체를 전달할 수 있다.

```
export const useCounterStore = defineStore('counter',{
    state: () => ({count : 0, name : "luke"}),
    getters : {
        doubleCount : (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++
        }
    }
})
```
state는 스토어의 data, getters는  스토어의 computed, actions는 methods라고 생각할 수 있다. 옵션 스토어는 시작하기 쉽고 직관적이다.
