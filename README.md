## **useState() vs useReducer()**

useState는 간단한 데이터, 예를 들어 두개의 서로 다른 값을 전환하기만 하는 단순 조작에 적합해 보이며,<br>
useReducer는 더 복잡한 state업데이트나 state 하나를 변경하는 여러 다른 액션이 있는 경우에 사용하기 적합해 보인다.

## **context api 사용법에 대한 생각**

데이터를 넘기는데 있어서 한정적이다. 문자열이나 객체는 불가능 하며, 불린값이나 함수는 가능하다.

다른 여러 기능들을 고려해야 하는 경우에는 기능을 추가하는데 있어 한계가 있어 보였다. 그래서 매우 특정적인 일을 하는 컴포넌트, 예를 들어 항상 사용자를 로그아웃 시키는 버튼 그런 컴포넌트로 전달하는 경우에만 컨텍스트를 사용하는게 좋아보인다.

## **리액트 컨텍스트 제한?**

1.  앱 전체 또는 컴포넌트 전체, 즉 기본적으로 여러 컴포넌트에 영향을 미치는 state에는 적합 할 수 있어보인다. 하지만 컴포넌트 구성을 대체할 순 없어 보인다.

    -   구성을 대체 할 수 없다는 것에 말을 조금 더 설명하자면 가장 기본이 되는 button 대한 컴포넌트 UI를 만들었다고 했을 떄 컨텍스트를 사용한다면 단 한가지 기능 밖에 못하게 될 것이다. 하게 된다면 다른 컴포넌트에서 사용할 때 컨텍스트를 props로 넘기는 형태로 해야 하나의 기본 UI에 여러 기능들을 사용할 수 있는것이 재사용성이 더 높아보인다.

2.  리액트 컨텍스트는 state가 1초에도 여러번 바뀌는 경우에 대해선 최적화 되어있지 않다(공식 리액트 팀원 피셜). 그런 경우엔 리덕스를 염두해보자.

※주의※ 좋아보인다고 모든 prop들을 대체하기 위해 컨텍스트로 사용하면 안된다.

## **리액트 훅 규칙 - 06-usereducer 파일 Login.js 컴포넌트 코드 참조**

1. 리액트 훅은 리액트 함수(리액트 컴포넌트 함수)에서만 호출해야 한다. 사용자 정의 훅에서도 사용 할 수 있다.

2. 리액트 훅은 리액트 컴포넌트 함수 또는 사용자 정의 훅 함수의 최상위 수준에서만 호출해야 한다.

    - 중첩 함수에서 훅을 호출하지 않는다.(잘못된 예 : useEffect 함수 안에 useContext를 호출)
    - block 문에서 호출 하지 않는다.(잘못된 예: if문 안에서 호출)

3. useEffect훅 만 적용되는 규칙
    - 합당한 이유가 없다면 항상, 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가해야 한다.

## **01-starting-setup-8 연습을 통해 공부한 부분 정리**

### **리액트 부모 컴포넌트를 상태변경 할 때 자식 컴포넌트도 전부 재실행 될 때 성능에 영향이 있을까?**

리액트에서 부모 컴포넌트의 상태 변경이 발생하면 해당 부모 컴포넌트와 그 자식 컴포넌트들이 모두 다시 렌더링된다. 이는 리액트의 Virtual DOM에서 상태 변화가 발생하면 이전과 새로운 상태를 비교하여 변경된 부분만을 실제 DOM에 반영하기 위함이다.<br>

이러한 과정에서 자식 컴포넌트가 불필요하게 다시 렌더링되는 경우가 발생할 수 있지만, 이는 성능에 큰 영향을 미치지 않는다. 왜냐하면 리액트는 Virtual DOM을 활용하여 변경된 부분만을 최소한으로 업데이트하기 때문이다.<br>

그러나 자식 컴포넌트가 많은 경우, 불필요한 렌더링이 발생하면 성능에 영향을 미칠 수 있다. 이를 방지하기 위해 shouldComponentUpdate나 React.memo와 같은 방법을 사용하여 불필요한 렌더링을 최소화할 수 있다. 또한, 큰 규모의 애플리케이션에서는 React의 성능 최적화를 위해 React Profiler나 React.memo를 사용하여 컴포넌트의 불필요한 렌더링을 최소화하는 것이 중요하다.

### **React.memo**

불필요한 렌더링을 위해 React.memo를 사용하는 방법이 있는데,
이는 함수형 컴포넌트에서만 사용 가능하다.(클래스 기반 사용 불가)<br>

React.memo는 인자로 들어간 컴포넌트에 어떤 props가 입력되는지 확인하고 입력되는 모든
props의 신규 값을 확인한 뒤 이를 기존의 props의 값과 비교하도록 리액트에게 전달한다.
그리고 props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가하게 된다.
부모 컴포넌트가 변경되었지만 컴포넌트의 props 값이 바뀌지 않았다면 컴포넌트 실행은 건너뛴다.<br>

**그렇다면, 왜 이걸 모든 컴포넌트에 적용하지 않는걸까?**
최적화에는 비용이 따르기 때문이다. memo 메서드는 01-starting-setup-8폴더인 경우 App 컴포넌트 변경이 발생할 때마다 memo 컴포넌트로 이동하여 기존 props 값과 새로운 값을 비교하게 된다.<br>
그렇다면 리액트는 두 가지 작업을 할 수 있어야 한다.
먼저 기존의 props 값을 저장할 공간이 필요하고 비교하는 작업도 필요하다.
각각의 작업은 개별적인 성능 비용이 필요하다. 따라서, 이 성능 효율은 어떤 컴포넌트를 최적화하느냐에 따라 달라지게 된다. 컴포넌트를 재평가하는 데에 필요한 성능 비용과 props를 비교하는 성능 비용을 서로 맞바꾸는 것이다. 그리고 이는 props의 개수와 컴포넌트의 복잡도, 그리고 자식 컴포넌트의 숫자에 따라 달라지므로 어느 쪽의 비용이 더 높다고 말하는 것은 불가능하다. 물론 자식 컴포넌트가 많아서 컴포넌트 트리가 매우 크다면 React.memo는 매우 유용하게 쓰일 수 있다. 그리고 컴포넌트 트리의 상위에 위치해있다면 전체 컴포넌트 트리에 대한 쓸데없는 재렌더링을 막을 수 있다.<br>

예시로 01-starting-setup-8폴더에서 DemoOutput 컴포넌트에 React.memo를 사용했더니 재평가를 피함으로서 자동적으로 DemoOutput안에 있는 MyParagraph 컴포넌트의 재평가 역시 피할 수 있었다.<br>

하지만 이와는 반대로 부모 컴포넌트를 매 번 재평가할 때마다 컴포넌트의 변화가 있거나 props의 값이 변화할 수 있는 경우라면 React.memo는 크게 의미가 없다.<br>

그리고, 당연하겠지만 앱 크기에 따라서도 달라진다. 매우 작은 앱, 매우 작은 컴포넌트 트리의 경우에는 이런 과정을 추가하는 것이 의미가 없다. 하지만 불필요한 재평가를 잘라내버릴 수 있는 큰 규모의 앱이라면 그럴 만한 가치가 충분할 것이다.<br>

모든 컴포넌트를 React.memo로 래핑할 필요는 없다. 대신, 컴포넌트 트리에서 잘라낼 수 있는 몇 가지의 주요 컴포넌트 부분을 선택해서 사용하면 된다. 모든 자식 컴포넌트에 대한 작업보다 훨씬 효과적일 것이다.<br>

### **useCallback**

객체는 참조타입이기 때문에 정적타입과 다르게 안에 있는 값이 같다고 해서 변수들 값까지 똑같진 않다. 그 이유는 같은 메모리 안의 같은 위치를 가리키지 않기 때문인데 그런 이유와 같이 01-starting-setup-8에 Button 컴포넌트를 memo메서드를 사용해 감싸도 App컴포넌트에서 Button 컴포넌트에 onClick으로 날리는 함수 toggleParagraphHandler가 같은 메모리로 인식을 못하기 때문에 버튼 클릭시 console.log("Button 실행")이 계속 실행되는 걸 볼 수 있다.<br>

그렇다면, toggleParagraphHandler를 같은 함수로 인식하게 해줘야 해결이 될거 같은데 이때 사용하기 좋은게 useCallback이다.<br>
useCallback은 선택한 함수를 리액트의 내부 저장 공간에 저장해서 함수 객체가 실행될 때마다 이를 재사용할 수 있게 된다. 사용법은 간단하다. 저장하려는 함수를 래핑하기만 하면 된다. 그렇게 함수를 첫번째 인자로 두고 두번째 인자는 useEffect같이 의존성 배열을 전달해 주면 된다.<br>
toggleParagraphHandler를 useCallback으로 감싸준 뒤 다시 버튼을 클릭하니 console.log("Button 실행")이 실행되지 않는걸 볼 수 있다.<br>

### **useCallback VS useMemo(React.memo 아님)**

React에서 useMemo와 useCallback은 성능 최적화를 위해 사용되는 Hook이다. 둘 다 메모이제이션(memoization)을 사용하여 이전의 결과를 재사용함으로써 연산 비용을 줄이는 데 도움을 준다. 그러나 useMemo와 useCallback은 사용되는 시기와 목적이 다르다.

useMemo는 계산 비용이 많이 드는 함수의 반환 값을 캐싱하여 불필요한 계산을 방지하는 데 사용된다. 이 Hook은 의존성 배열을 제공받아 해당 배열의 값이 변경되지 않으면 캐시된 값을 반환한다. 의존성 배열이 변경되면 useMemo는 해당 함수를 다시 실행하여 새 값을 반환한다.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

위의 코드에서 computeExpensiveValue 함수의 반환 값을 캐시하고, 배열 [a, b]의 값이 변경되지 않으면 이전 값이 반환된다.

반면 useCallback은 함수를 메모이제이션하는 데 사용된다. useCallback은 매번 새로운 함수를 생성하는 것이 아니라, 의존성 배열의 값이 변경될 때만 새로운 함수를 생성한다.

```js
const memoizedCallback = useCallback(() => {
    doSomething(a, b);
}, [a, b]);
```

위의 코드에서 memoizedCallback은 doSomething 함수를 메모이제이션하고, [a, b]의 값이 변경되지 않으면 이전 함수가 반환된다.

따라서 useMemo는 값 자체를 메모이제이션하고 useCallback은 함수를 메모이제이션한다. 두 Hook 모두 불필요한 계산을 방지하여 성능을 최적화하는 데 도움을 준다.

> 메모이제이션(memoization)이란?<br>
> 메모이제이션(memoization)은 이전에 계산한 결과를 캐시하여 동일한 입력이 주어졌을 때 다시 계산하지 않고 캐시된 결과를 반환하는 것을 의미한다. 이를 통해 중복 계산을 줄이고 프로그램의 성능을 향상시킬 수 있다. 메모이제이션은 함수의 반환 값을 캐시하는 데 주로 사용된다. 적절한 사용이 필요하며, 계산 비용이 큰 함수와 자주 호출되는 함수에만 메모이제이션을 적용하는 것이 좋다.<br>

### **Fetch API VS Axios**

Fetch API와 Axios는 둘 다 JavaScript에서 HTTP 요청을 보내는 데 사용되는 라이브러리다. 하지만 이들은 몇 가지 차이점이 있다.

1. 구현 방식:
   Fetch API는 브라우저에 내장된 API이며, Promise 기반으로 구현되어 있다. Axios는 외부 라이브러리로, XHR(XMLHttpRequest)을 기반으로 구현되어 있다.

2. 기능:
   Fetch API는 HTTP 요청과 응답에 대한 기본적인 기능만 제공하며, 추가적인 기능은 직접 구현해야 한다. Axios는 HTTP 요청과 응답에 대한 다양한 기능을 제공하며, 인터셉터(Interceptor)와 같은 기능도 제공한다.

3. 브라우저 호환성:
   Fetch API는 IE를 포함한 일부 오래된 브라우저에서 지원하지 않는다.(IE의 사망으로 이제 괜찮지 않을까?) Axios는 모든 주요 브라우저에서 사용할 수 있다.

4. 요청/응답 취소 기능:
   Fetch API는 요청을 취소하는 기능을 제공하지 않는다. Axios는 요청 취소와 응답 타임아웃 기능을 제공한다.

5. 데이터 변환:
   Fetch API는 기본적으로 JSON 데이터를 처리하지만, 다른 형식의 데이터를 처리하기 위해서는 수동으로 변환해야 한다. Axios는 JSON 데이터뿐만 아니라 다양한 데이터 형식을 자동으로 변환해준다.

요약하면, Fetch API는 브라우저에 내장되어 있고 기본적인 기능만 제공하며, Axios는 다양한 기능과 브라우저 호환성이 뛰어나며, 좀 더 사용하기 쉽다.<br>

### **Axios Interceptor 기능**

Axios는 HTTP 클라이언트 라이브러리로, HTTP 요청을 보내고 응답을 받아올 수 있다. Interceptor는 Axios에서 제공하는 기능 중 하나로, 요청이나 응답을 가로채서 수정하거나 처리할 수 있는 기능이다.

Interceptor는 두 가지 종류가 있습니다. 하나는 요청 인터셉터(Request Interceptor)이고, 다른 하나는 응답 인터셉터(Response Interceptor)이다.

요청 인터셉터는 Axios가 HTTP 요청을 보내기 전에 가로채서 수정하거나 처리할 수 있는 기능이다. 이를 통해 인증 토큰을 추가하거나 요청 데이터를 암호화하는 등의 작업을 수행할 수 있다. 요청 인터셉터는 axios.interceptors.request.use() 메서드를 사용하여 등록할 수 있다.

응답 인터셉터는 Axios가 HTTP 응답을 받아오면 가로채서 수정하거나 처리할 수 있는 기능이다. 이를 통해 응답 데이터를 가공하거나 오류 처리를 수행할 수 있다. 응답 인터셉터는 axios.interceptors.response.use() 메서드를 사용하여 등록할 수 있다.

Interceptor는 Promise를 반환하며, 반환된 Promise는 요청 또는 응답에 대한 처리가 완료된 후에 resolve됩니다. 이를 통해 비동기 작업을 수행할 수 있다.

Interceptor는 Axios에서 매우 강력한 기능 중 하나이며, 요청과 응답을 가로채서 원하는 작업을 수행할 수 있다.
