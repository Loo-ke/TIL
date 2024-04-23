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
## 셋업 스토어
스토어를 정의하는 또 다른 문법이 있다. Vue 컴포지션 API의 셋업 함수와 유사하게, 반응형 속성 및 메서드를 정의하고 노출하려는 속성의 메서드가 있는 객체를 반환하는 함수를 전달할 수 있다.
```
export const useCounterStore = defineStore('counter', ()=>{
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount == computed(()=>count.value * 2)
    function increment(){
        count.value++
    }
    return {count, name, doubleCOunt, increment}
})
```
- ref() == state 
- computed() == getters
- function() == actions

Pinia가 위에 것들을 상태로 인식하게 하려면, 셋업 스토어에서 모든 상태 속성을 반환해야 한다. 다시 말해, 저장소에서 비공개 상태 속성을 가질 수 없다. 모든 상태 속성을 반환하지 않으면 SSR, devtools및 기타 플러그인이 손상될 수 있다.

셋업 스토어는 옵션 스토어보다 훨씬 더 유연하다. 저장소 내에서 watcher를 생성하고 자유롭게 모든 composable을 사용할 수 있다. 그러나 SSR을 사용할 때 composables 사용이 더 복잡해질 수 있다.



>composable은 Vue 컴포지션 API를 활용하여 상태 저장 로직을 캡슐화 하고 재사용하는 함수이다.


## 어떤 문법을 사용해야하나?
Vue의 컴포지션 API와 옵션 API처럼 가장 편한 것을 고르면 된다.
잘 모르겟따면 먼저 옵션 스토어 스타일로 사용해보자

## 스토어 이용하기
스토어는 `<scrpit setup>` 구성 요소 내에서 `use...Store()`가 호출될 때 까지 스토어가 생성되지 않기 떄문에 스토어를 정의한다.

```
<script setup>
    import {useCounterStore} from '@/store/counter'

    const store = useCounterStore()
</script>
```

피니아를 최대한 활용하려면 각 스토어는 다른 파일에 정의해야한다.

스토어가 인스턴스화되면, 스토어에서 직접 state, getters, actions에 정의된 모든 속성에 접근할 수 있다.
