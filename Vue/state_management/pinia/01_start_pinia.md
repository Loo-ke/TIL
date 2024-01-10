# start Pinia

## 설치
```
yarn add pinia
# 또는 npm으로
npm install pinia
```
### vue CLI를 사용하는 경우 
```
//app.vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

## 스토어란?
 스토어는 컴포넌트 트리에 바인딩되지 않은 상태 및 처리해야 할 일의 로직을 가지는 독립적인 것이다. 즉, 전역 상태를 호스팅한다.
 항상 존재하고 모두가 읽고 쓸 수 있는 컴포넌트와 비슷하다.
 `state`,`getters`,`actions`라는 세 가지 개념이 있고, 이러한 개념은 컴포넌트의 `data`,`computed`,`methods`와 동일하다고 봐도 무방하다.

 ## 스토어를 사용해야 하는 경우
 저장소에는 앱 전체에서 접근할 수 있으므로, 여러 곳에서 사용되는 데이터가 포함되어야 한다. 예를들어 탐색 메뉴에 표시되는 사용자 정보나 매우 복잡한 다단계 양식 페이지를 통해 보존해야하는 데이터가 있다.

 반면 컴포넌트에서 호스팅 할 수 있는 로컬 데이터를 스토어에 포함하는 것을 피해야 한다. 페이지 내 로컬 엘리먼트의 가시성을 결정하는 상태 데이터가 있다.

 모든 앱이 글로벌 상태에 대한 접근을 필요로 하는 것은 아니지만, 필요한 경우 피니아가 더 쉽게 만들어준다.
 