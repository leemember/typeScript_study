## 📃 TypeScript 입문

<br>

> START 2021.02.22 <br> > https://1eemember.tistory.com/

<br>

## 📃 목차

### 🚩 [자주 사용하는 기본타입 알아보기](./class-note/1_type-basic.ts)

### 🚩 [함수타입 알아보기 (파라미터, 반환값, 파라미터를 제한하는 특성)](./class-note/2_functions.ts)

### 🚩 [과제01 - 타입스크립트로 TODOLIST 만들기](./quiz/1_todo/src/index.ts)

### 🚩 [인터페이스 실무예제 보러가기](./class-note/3_interface.ts)

### 🚩 [Union 과 InterSection 실무예제 보러가기](./class-note/5_operator.ts)

### 🚩 [ENUM 실무예제 보러가기](./class-note/6_enum.ts)

### 🚩 [제너릭 실무예제 보러가기](./class-note/8_generics.ts)

### 🚩 [타입추론 실무예제 보러가기](./class-note/9_type_inference)

## 💜 타입 단언

```
var a;
```

## 타입 호환이란

타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미합니다. 타입스크립트가 코드를 해석해 나가는 과정에서 두개의 타입이 서로 호환이 되는지를 점검하는 것을 타입 호환성이라고 한다.

위에는 인터페이스고 아래는 클레스를 선언했음에도 불구하고, 실제로 이 두개의 타입이 같다고한다.
타입에 정의되어있는 타입을 가지고 실제로 이 코드들이 호환되는 지를 점검한다.
이런거를 공식문서에서는 구조적 타이핑이라고 한다.

## 타입스크립트 모듈이란
타입스크립트에서 가르키는 모듈이라는 개념은 ES6의 모듈과 개념이 유사하다. 모듈은 전역 변수와 구분되는 자체 유효 범위를 가지며 export, import와 같은 키워드를 사용하지 않으면 다른 파일에서 접근할 수 없게된다.


## Import & Export

임포트와 익스포트는 자바스크립트의 코드를 모듈화 할 수 있는 기능이다. 여기서 모듈화란 쉽게 말해서 다른 파일에 있는 자바스크립트의 기능을 특정 파일에서 사용할 수 있는 것을 의미한다.

모듈화의 필요성
기본적으로 자바스크립트의 유효 범위는 전역으로 시작한다.

기본 문법

import & export 기본 문법
모듈화 기능을 사용하기 위한 기본적인 import, export 문법을 봐보자.
먼저 export문법

```
export 변수, 함수
```

다른 파일에서 가져다 쓸 변수나 함수의 앞에 export라는 키워드를 붙인다. 익스포트된 파일은 임포트ㅇ로 불러와 사용할 수 있다.

import

```
import {불러올 변수 또는 함수 이름} from '파일 경로';
``
