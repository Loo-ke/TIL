# 03 Pinia
## 왜 피니아를 사용해야 하나요?
- Devtools 지원
    - actions, mutations를 추적하는 타임라인
    - 스토어는 사용되는 컴포넌트에 표시됨.
    - 시간 추적 및 더 쉬운 디버깅
- 핫 모듈 교체 (HMR)
    - 페이지를 새로고침하지 않고 스토어 수정
    - 개발하는 동안 기존 상태 유지
- 플러그인: 플러그인으로 피니아 기능 확장
- TypeScript 지원 또는 JS 사용자를 위한 적절한 자동 완성
- SSR 지원
## 기본 예제
```
//store/counter.js
import {defineStore} from "pinia"

export const userConuterStore = defineStroe('counter', {
    state : () => {
        return { count : 0 }
    },
    actions : {
        increment(){
            this.count++
        }
    }
})
```
이제 컴포넌트에서 사용해보자
```
<script setup>
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()

counter.count++

// 자동 완성 기능 ✨
counter.$patch({ count: counter.count + 1 })
// 또는 actions 사용
counter.increment()
</script>
<template>
    <div>현재 카운트 : {{ counter.count }}</div>
</template>
```
함수를 사용하여 스토어를 정의할 수 있다.
```
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```
아직 `setup()` 및 컴포지션 API에 익숙하지 않더라도 피니아는 Vuex와 같은 맵 헬퍼와 같은 세트를 지원한다. 스토어 정의 방식은 같지만 `mapStore()`, `mapState()` 또는 `mapActions()`를 사용한다.
```
const useCounterStore = defineStore('counter', {
    state : ()=>({count : 0}),
    getter : {
        double : (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++
        },
    },
})

const useUserStore = defineStore('user', {
    // ...
})

export default defineComponent({
    computed: {
        ...mapStores(useConuterStore, useUserStore),
        ...mapState(useCounterStore, ['count', 'double']),
    },
    methods:{
        ...mapActions(useCounterStore, ['increment']),
    }
})
```
## 현실적인 예제
JavaScript에서도 피니아를 사용할 수 있는 예제이다.
```
import {defineStore} from 'pinia'

export const useTodos = defineStore('todos', {
    state : ()=>({
        @type {{ text : string, id : number, isFinished : boolean}[]}
        todos : [],
        filter : 'all',
        nextId : 0,
    }),
    getters : {
        finishedTodos(state){
            return state.todos.filter((todo) => todo.isFinished)
        },
        unfinishedTodos(state){
            return state.todos.filter((todo) => !todo.isFinished)
        },
        @return {{text : string, id:number, isFinished : boolean}[]}
        filterTodos(state) { 
            if(this.filter === 'finished'){
                return this.finishedTodos
            }else if(this.filter === 'unfinished'){
                return this.unfinishedTodos
            }
            return this.todos
        },
    },
    actions:{
        addTodo(text) {
            this.todos.push({text, id:this.nextId++, isFinished:false})
        },
    },
})

```