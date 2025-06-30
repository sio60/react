import React from 'react'
import GyubinUL, {btsUL} from './TestUl'
//day1_03 test.jsx의 컴포넌트 2개를 화면에 출력하기 위한 부모 컴모넌트
//          ㄴ index.js에서 app 컴포넌트로 동작
//export default가 아닌 것은 표현식 기호 {함수이름} 형태로 import
//컴포넌트는 함수로 정의함 (함수형 컴포넌트)
//파일명과 함수이름이 동일할 필요 없음
export default function App2() {
  return (
    <div>App2
        <GyubinUL/>
        <btsUL/>
    </div>
  )
}

