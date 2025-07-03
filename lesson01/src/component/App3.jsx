//day01_05: 규빈ul 컴포넌트의 부모 컴포넌트
//              index.js에서 app의 파일 위치 수정
import 규빈UL from "./규빈UL"
export default function App() {
    const charac = ['예쁨🖤','귀여움','재밌음','상여자']
  return (
    <div>
      {/* 자식 컴포넌트에 정의한 속성들은 하나의 객체로 자식 컴포넌트에게 전달 */}
        <규빈UL characters={charac} title={"특징"}/>
        <규빈UL characters={['잼민이','금쪽이','규쪽이']} title={"행동"}/>
    </div>
  )
}
