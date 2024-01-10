# State Management
## 상태관리란?
기술적으로 모든 Vue 컴포넌트 인스턴스는 이미 자체 반응형 상태를 "관리"한다.

```
<script>
    export default{
        //상태(state)
        data(){
            return {
                count : 0
            }
        },
        //기능(action)
        methods : {
            increment(){
                this.count++
            }
        }
    }
</script>
<!--뷰 (view)-->
<template>{{count}}</template>
```
- 상태(state) : 앱 구동에 필요한 기본 데이터 소스.
- 뷰(view) : 상태를 선언적으로 매핑하여 시각화
- 기능(actions) : 뷰에서 사용자 입력에 대해 반응적으로 상태를 변경할 수 있게 정의된 동작.

### 여러 컴포넌트가 상태를 공유할 때 단순성이 무너지기 시작한다.
- 여러 뷰가 동일한 상태에 따라 달라질 수 있다.
    - 공유 상태를 공통 조상 컴포넌트로 "끌어올린" 다음 props로 전달하는 방법으로 해결 가능, 그러나 깊은 계층 구조를 가진 컴포넌트  트리에서 비효율적이며 prop 드릴링의 문제로 이어짐
- 서로 다른 뷰의 기능이 동일한 상태를 변경시킬 필요가 있을 수 있다.

### 반응형 API를 통한 간단한 상태 관리
옵션 API에서 반응형 데이터는 `data()` 옵션을 사용하여 선언한다. 내부적으로 `data()`에 의해 반환된 객체는 `reactive()` 함수를 통해 반응형으로 만들어지며, 공개 API로 사용할 수 있다.

여러 인스턴스에서 공유해야 하는 상태가 있는 경우, `reactive()`를 사용하여 반응형 객체를 만든 다음 여러 컴포넌트에서 가져갈 수 있다.

```
// store.js
import {reactive} from 'vue'
export const store = reactive({
    count = 0
})
```
```

<!--ComponentA.vue-->
<script>
import {store} from "./store.js"

export default {
    data(){
        return {
            store
        }
    }
}
</script>
<template>A 컴포넌트에서 : {{store.count}}</template>
```
```
<!--ComponentB.vue-->
<script>
import {store} from "./store.js"

export default {
    data(){
        return {
            store
        }
    }
}
</script>
<template>B 컴포넌트에서 : {{store.count}}</template>
```
이제 `store`객체가 변경될 때마다 `<ComponentA>`와 `<ComponentB>`가 뷰를 자동으로 업데이트 한다. 단일 기본 데이터 소스가 되었다.

그러나 이 것은 `store`를 가져오는 모든 컴포넌트가 원하는 대로 변경할 수 있음을 의미한다.

```
<template>
    <button @click="store.count++">
        B 컴포넌트에서 : {{ store.count }}
    </button>
</template>
```

위의 기능은 간단한 경우에 문제 없지만, 컴포넌트에 의해 임의로 변경될 수 있는 전역 상태이므로 장기적인 유지 관리는 쉽지 않다. 상태 변경 로직이 상태 자체처럼 중앙 집중화 되도록 하려면, 작업의 의도를 나타내는 이름으로 `store`에 메서드를 정의하는 것이 좋다.
```
//store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})
```
```
<template>
  <button @click="store.increment()">
    B 컴포넌트에서: {{ store.count }}
  </button>
</template>
```