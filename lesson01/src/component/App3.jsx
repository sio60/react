//day01_05: 규빈ul 컴포넌트의 부모 컴포넌트
//              index.js에서 app의 파일 위치 수정
import 규빈UL from "./규빈UL"
export default function App() {
    const charac = ['예쁨🖤','귀여움','재밌음','상여자']
  return (
    <div>
        <규빈UL characters={charac}/>
        <규빈UL characters={['잼민이','금쪽이','규쪽이']}/>
    </div>
  )
}
