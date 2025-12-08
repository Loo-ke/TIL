# Vue + Nuxt + TypeScript 2개월 학습 커리큘럼

## 목표

회사 프로젝트에서 사용하는 `<script setup lang="ts">` 형태의 Vue/Nuxt/TypeScript 스택을 공식 문서 기반으로 체계적으로 학습

## 학습 기간

- **총 기간**: 2개월 (60일)
- **하루 학습 시간**: 1시간
  - 40분: 공식 문서 읽기 + 예제 코드 작성
  - 20분: TIL 마크다운 작성

## 전체 구조

- 1개월차: Vue 3 + TypeScript 기초
- 2개월차: Nuxt 3 + TypeScript 실전

---

## TIL 레포지토리 폴더 구조

```
TIL/
├── Vue/
│ ├── 01_essentials/
│ ├── 02_components/
│ ├── 03_composition_api/
│ └── 04_typescript/
├── TypeScript/
│ ├── 01_basic_types/
│ ├── 02_functions_interfaces/
│ └── 03_generics/
├── Nuxt/
│ ├── 01_getting_started/
│ ├── 02_directory_structure/
│ ├── 03_data_fetching/
│ └── 04_server_typescript/
└── Daily_what_I_did/
└── 2025-12-vue-nuxt-challenge.md
```

---

## 전체 커리큘럼 테이블

| 주차         | 일수      | 학습 주제                     | TIL 폴더                       | 작성할 파일명 예시                                                          | 학습 내용                                                                                                       |
| ------------ | --------- | ----------------------------- | ------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Vue 1주**  | Day 1–7   | Vue Essentials + 기본 TS      | `Vue/01_essentials/`           | `01_reactivity.md`<br>`02_template_syntax.md`<br>`03_event_handling.md`     | 템플릿 문법, ref/reactive/computed, 이벤트/폼, 조건·반복 렌더링<br>TS 기본 타입(string, number, boolean, array) |
| **Vue 2주**  | Day 8–14  | 컴포넌트 + Props/Emits TS     | `Vue/02_components/`           | `01_component_basics.md`<br>`02_props_emits.md`<br>`03_slots.md`            | Component 등록/통신, Props/Emits 타입 지정<br>`defineProps<{}>()`, `defineEmits<{}>()`                          |
| **Vue 3주**  | Day 15–21 | Composition API + Composables | `Vue/03_composition_api/`      | `01_setup.md`<br>`02_composables.md`<br>`03_lifecycle.md`                   | setup, composables 작성, provide/inject<br>함수 리턴 타입, 인터페이스 선언                                      |
| **Vue 4주**  | Day 22–30 | Vue TS 심화 + 실전            | `Vue/04_typescript/`           | `01_overview.md`<br>`02_type_inference.md`<br>`03_generics.md`              | Vue TS 공식 가이드 전체, 타입 추론/단언<br>PropType, 제네릭, 실무 패턴                                          |
| **Nuxt 1주** | Day 31–37 | Nuxt 시작 + TS 설정           | `Nuxt/01_getting_started/`     | `01_introduction.md`<br>`02_rendering_modes.md`<br>`03_typescript_setup.md` | Nuxt 개념, SSR/SPA/SSG, nuxi init<br>`typescript.strict`, `.nuxt/nuxt.d.ts`                                     |
| **Nuxt 2주** | Day 38–44 | 디렉터리 구조 + 라우팅        | `Nuxt/02_directory_structure/` | `01_pages_layouts.md`<br>`02_components.md`<br>`03_routing.md`              | pages/, layouts/, components/<br>라우팅 파라미터 타입, `useRoute()`                                             |
| **Nuxt 3주** | Day 45–51 | 데이터 패칭 + Composables     | `Nuxt/03_data_fetching/`       | `01_useFetch.md`<br>`02_useAsyncData.md`<br>`03_composables.md`             | useFetch/useAsyncData 제네릭<br>composables/ 디렉터리 타입 안전                                                 |
| **Nuxt 4주** | Day 52–60 | 서버 API + 플러그인 + 실전    | `Nuxt/04_server_typescript/`   | `01_server_api.md`<br>`02_plugins.md`<br>`03_typecheck.md`                  | server/api 핸들러 타입, H3 이벤트<br>plugins 전역 타입, `nuxt typecheck`                                        |

---

## Vue 1주차: Essentials (Day 1-7)

### 폴더: `Vue/01_essentials/`

#### Day 1: Template Syntax

- **파일**: `01_template_syntax.md`
- **내용**: 템플릿 문법, 보간법 (mustache), 디렉티브 기초
- **참고**: https://vuejs.org/guide/essentials/template-syntax

#### Day 2: Reactivity Basics

- **파일**: `02_reactivity_basics.md`
- **내용**: ref, reactive 차이점, 반응성 시스템 이해
- **참고**: https://vuejs.org/guide/essentials/reactivity-fundamentals

#### Day 3: Computed & Watch

- **파일**: `03_computed_watch.md`
- **내용**: computed 속성, watch, watchEffect 사용법
- **참고**: https://vuejs.org/guide/essentials/computed

#### Day 4: Event Handling

- **파일**: `04_event_handling.md`
- **내용**: 이벤트 바인딩, 이벤트 수식어, 키 수식어
- **참고**: https://vuejs.org/guide/essentials/event-handling

#### Day 5: Form Input Binding

- **파일**: `05_form_input.md`
- **내용**: v-model, 폼 바인딩, 양방향 데이터 바인딩
- **참고**: https://vuejs.org/guide/essentials/forms

#### Day 6: Conditional Rendering

- **파일**: `06_conditional_rendering.md`
- **내용**: v-if, v-else, v-else-if, v-show 차이
- **참고**: https://vuejs.org/guide/essentials/conditional

#### Day 7: List Rendering

- **파일**: `07_list_rendering.md`
- **내용**: v-for, key 속성, 배열 렌더링, 객체 렌더링
- **참고**: https://vuejs.org/guide/essentials/list

---

## Vue 2주차: Components (Day 8-14)

### 폴더: `Vue/02_components/`

#### Day 8: Component Basics

- **파일**: `01_component_basics.md`
- **내용**: 컴포넌트 정의, 등록 (전역/지역), 재사용
- **참고**: https://vuejs.org/guide/essentials/component-basics

#### Day 9: Props with TypeScript

- **파일**: `02_props_typescript.md`
- **내용**: defineProps, 타입 지정, 기본값, 유효성 검사
- **참고**: https://vuejs.org/guide/typescript/composition-api#typing-component-props

#### Day 10: Emits with TypeScript

- **파일**: `03_emits_typescript.md`
- **내용**: defineEmits, 이벤트 타입 지정, 페이로드 타입
- **참고**: https://vuejs.org/guide/typescript/composition-api#typing-component-emits

#### Day 11: Slots

- **파일**: `04_slots.md`
- **내용**: 슬롯 기본, Named slots, Scoped slots
- **참고**: https://vuejs.org/guide/components/slots

#### Day 12: Component Communication

- **파일**: `05_component_communication.md`
- **내용**: 부모-자식 통신 패턴, Props down / Events up
- **참고**: https://vuejs.org/guide/components/events

#### Day 13: Provide/Inject

- **파일**: `06_provide_inject.md`
- **내용**: provide/inject 패턴, 의존성 주입, 반응형 provide
- **참고**: https://vuejs.org/guide/components/provide-inject

#### Day 14: Component Review

- **파일**: `07_component_review.md`
- **내용**: 이번 주 복습 + 미니 컴포넌트 프로젝트 작성
- **미니 프로젝트**: Todo 앱 (컴포넌트 분리, Props/Emits 활용)

---

## Vue 3주차: Composition API (Day 15-21)

### 폴더: `Vue/03_composition_api/`

#### Day 15: Script Setup

- **파일**: `01_setup_script.md`
- **내용**: `<script setup>` 문법, setup 함수 vs script setup
- **참고**: https://vuejs.org/api/sfc-script-setup

#### Day 16: Composables Basics

- **파일**: `02_composables_basics.md`
- **내용**: composable 작성법, useXXX 패턴, 로직 재사용
- **참고**: https://vuejs.org/guide/reusability/composables

#### Day 17: Lifecycle Hooks

- **파일**: `03_lifecycle_hooks.md`
- **내용**: onMounted, onUnmounted, onUpdated 등 라이프사이클
- **참고**: https://vuejs.org/guide/essentials/lifecycle

#### Day 18: Typing Composables

- **파일**: `04_typing_composables.md`
- **내용**: composable 함수 타입 지정, 리턴 타입 명시
- **참고**: https://vuejs.org/guide/typescript/composition-api

#### Day 19: Ref Types

- **파일**: `05_refs_types.md`
- **내용**: Ref<T> 타입, unref, toRef 사용법
- **참고**: https://vuejs.org/guide/typescript/composition-api#typing-ref

#### Day 20: Reactive Types

- **파일**: `06_reactive_types.md`
- **내용**: Reactive 타입, toRefs, readonly
- **참고**: https://vuejs.org/guide/typescript/composition-api#typing-reactive

#### Day 21: Composition Review

- **파일**: `07_composition_review.md`
- **내용**: useCounter, useFetch 등 자주 쓰는 composable 패턴 정리
- **미니 프로젝트**: 재사용 가능한 composable 3개 작성

---

## Vue 4주차: TypeScript 심화 (Day 22-30)

### 폴더: `Vue/04_typescript/`

#### Day 22: TypeScript Overview

- **파일**: `01_typescript_overview.md`
- **내용**: Vue + TS 공식 가이드 전체 읽기
- **참고**: https://vuejs.org/guide/typescript/overview

#### Day 23: PropType

- **파일**: `02_prop_types.md`
- **내용**: PropType, 복잡한 타입 지정, 인터페이스 활용
- **참고**: https://vuejs.org/guide/typescript/options-api#typing-component-props

#### Day 24: Generic Components

- **파일**: `03_generic_components.md`
- **내용**: 제네릭 컴포넌트 작성, 타입 재사용
- **참고**: https://vuejs.org/guide/typescript/composition-api

#### Day 25: Type Assertion

- **파일**: `04_type_assertion.md`
- **내용**: as 키워드, 타입 단언, 사용 시나리오
- **참고**: TypeScript 공식 문서

#### Day 26: Utility Types

- **파일**: `05_utility_types.md`
- **내용**: Partial, Required, Pick, Omit 활용
- **참고**: TypeScript 공식 문서

#### Day 27: Real World Patterns

- **파일**: `06_real_world_patterns.md`
- **내용**: 실무에서 자주 쓰는 타입 패턴 정리
- **예시**: API 응답 타입, 폼 데이터 타입 등

#### Day 28-30: Vue Project Refactor

- **파일**: `07_vue_project_refactor.md`
- **내용**: 기존 작성한 Vue 코드를 TypeScript로 완전히 리팩터링
- **목표**: 모든 컴포넌트에 타입 적용, any 제거

---

## Nuxt 1주차: Getting Started (Day 31-37)

### 폴더: `Nuxt/01_getting_started/`

#### Day 31: Nuxt Introduction

- **파일**: `01_nuxt_introduction.md`
- **내용**: Nuxt 개념, Vue vs Nuxt 차이, 왜 Nuxt를 쓰는가
- **참고**: https://nuxt.com/docs/getting-started/introduction

#### Day 32: Rendering Modes

- **파일**: `02_rendering_modes.md`
- **내용**: SSR, SPA, SSG 차이, 각 모드의 장단점
- **참고**: https://nuxt.com/docs/guide/concepts/rendering

#### Day 33: Project Setup

- **파일**: `03_project_setup.md`
- **내용**: nuxi init, 프로젝트 구조, 기본 파일 설명
- **실습**: `npx nuxi init my-nuxt-app`

#### Day 34: TypeScript Config

- **파일**: `04_typescript_config.md`
- **내용**: nuxt.config.ts의 typescript 옵션, strict 모드
- **참고**: https://nuxt.com/docs/guide/concepts/typescript

#### Day 35: Auto Imports

- **파일**: `05_auto_imports.md`
- **내용**: 자동 import 시스템, `.nuxt/nuxt.d.ts` 역할
- **참고**: https://nuxt.com/docs/guide/concepts/auto-imports

#### Day 36: Basic Routing

- **파일**: `06_basic_routing.md`
- **내용**: pages/ 폴더 기반 라우팅, 파일명 규칙
- **참고**: https://nuxt.com/docs/getting-started/routing

#### Day 37: Layouts

- **파일**: `07_layouts.md`
- **내용**: layouts/ 폴더, default 레이아웃, 커스텀 레이아웃
- **참고**: https://nuxt.com/docs/guide/directory-structure/layouts

---

## Nuxt 2주차: Directory Structure (Day 38-44)

### 폴더: `Nuxt/02_directory_structure/`

#### Day 38: Pages Directory

- **파일**: `01_pages_directory.md`
- **내용**: 동적 라우팅, [id].vue, [...slug].vue 패턴
- **참고**: https://nuxt.com/docs/guide/directory-structure/pages

#### Day 39: Layouts Directory

- **파일**: `02_layouts_directory.md`
- **내용**: 레이아웃 전환, setPageLayout, 조건부 레이아웃
- **참고**: https://nuxt.com/docs/guide/directory-structure/layouts

#### Day 40: Components Directory

- **파일**: `03_components_directory.md`
- **내용**: 자동 import 컴포넌트, 폴더 기반 네이밍
- **참고**: https://nuxt.com/docs/guide/directory-structure/components

#### Day 41: Assets vs Public

- **파일**: `04_assets_public.md`
- **내용**: assets/ vs public/ 차이, 정적 파일 처리
- **참고**: https://nuxt.com/docs/guide/directory-structure/assets

#### Day 42: Composables Directory

- **파일**: `05_composables_directory.md`
- **내용**: composables/ 자동 import, 전역 composable 작성
- **참고**: https://nuxt.com/docs/guide/directory-structure/composables

#### Day 43: Routing Params TypeScript

- **파일**: `06_routing_params_typescript.md`
- **내용**: useRoute() 타입, 라우팅 파라미터 타입 지정
- **참고**: https://nuxt.com/docs/guide/concepts/typescript

#### Day 44: Directory Review

- **파일**: `07_directory_review.md`
- **내용**: Nuxt 디렉터리 구조 전체 정리
- **미니 프로젝트**: 블로그 구조 (페이지 5개, 레이아웃 2개)

---

## Nuxt 3주차: Data Fetching (Day 45-51)

### 폴더: `Nuxt/03_data_fetching/`

#### Day 45: useFetch Basics

- **파일**: `01_useFetch_basics.md`
- **내용**: useFetch 사용법, 기본 옵션, SSR 동작
- **참고**: https://nuxt.com/docs/getting-started/data-fetching

#### Day 46: useFetch TypeScript

- **파일**: `02_useFetch_typescript.md`
- **내용**: useFetch 제네릭 타입, 응답 데이터 타입 지정
- **예시**: `const { data } = await useFetch<User>('/api/user')`

#### Day 47: useAsyncData

- **파일**: `03_useAsyncData.md`
- **내용**: useAsyncData vs useFetch 차이, 복잡한 로직 처리
- **참고**: https://nuxt.com/docs/api/composables/use-async-data

#### Day 48: Error Handling

- **파일**: `04_error_handling.md`
- **내용**: 데이터 패칭 에러 처리, error.vue, NuxtErrorBoundary
- **참고**: https://nuxt.com/docs/getting-started/error-handling

#### Day 49: API Composables

- **파일**: `05_api_composables.md`
- **내용**: API 호출용 composable 작성 (useApi, useFetchUser 등)
- **실습**: `composables/useApi.ts` 작성

#### Day 50: GraphQL Integration

- **파일**: `06_graphql_integration.md`
- **내용**: Nuxt + GraphQL (Apollo 또는 Nuxt GraphQL Client)
- **참고**: 회사 프로젝트 Apollo 연동 복습

#### Day 51: Data Fetching Review

- **파일**: `07_data_fetching_review.md`
- **내용**: 데이터 패칭 패턴 전체 정리
- **미니 프로젝트**: API 연동 + 에러 처리 완성

---

## Nuxt 4주차: Server & Advanced (Day 52-60)

### 폴더: `Nuxt/04_server_typescript/`

#### Day 52: Server Directory

- **파일**: `01_server_directory.md`
- **내용**: server/ 디렉터리 구조, Nitro 서버 이해
- **참고**: https://nuxt.com/docs/guide/directory-structure/server

#### Day 53: API Routes

- **파일**: `02_api_routes.md`
- **내용**: server/api 핸들러 작성, RESTful API 만들기
- **참고**: https://nuxt.com/docs/guide/directory-structure/server#api-routes

#### Day 54: H3 TypeScript

- **파일**: `03_h3_typescript.md`
- **내용**: H3 이벤트 타입, readBody, getQuery 타입 지정
- **참고**: https://nuxt.com/docs/guide/concepts/typescript

#### Day 55: Plugins Directory

- **파일**: `04_plugins_directory.md`
- **내용**: plugins/ 폴더, 전역 인스턴스 주입, 플러그인 순서
- **참고**: https://nuxt.com/docs/guide/directory-structure/plugins

#### Day 56: Global Types

- **파일**: `05_global_types.md`
- **내용**: 전역 타입 선언, NuxtApp 타입 확장
- **참고**: https://nuxt.com/docs/guide/concepts/typescript#augmenting-types

#### Day 57: Nuxt Typecheck

- **파일**: `06_nuxt_typecheck.md`
- **내용**: `nuxt typecheck` 명령어, CI/CD에 통합
- **실습**: `npm run typecheck` 실행 및 에러 수정

#### Day 58-60: Real Project Application

- **파일**: `07_real_project.md`
- **내용**: 회사 프로젝트에 학습 내용 적용
- **목표**:
  - 회사 코드 TS 에러 최소 3개 수정
  - 새로운 기능 하나를 TypeScript로 작성
  - 학습 내용 팀 공유
