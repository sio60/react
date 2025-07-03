import { useState } from "react"
//리액트랑 상태 저장하라고 usestate 함수를 가져옴
import '../assets/css/LightToggle.css'
import bulboff from '../assets/pic_bulboff.gif'
import bulbon from '../assets/pic_bulbon.gif'
export default function LightToggle() {
    // toggleon이라는 컴포넌트 만들기
    const [isOn, setIsOn] = useState(false)
    //상태 변수 만들기, ison은 현재 on/off를 저장 (처음엔 off), setIsOn은 값을 바꿔주는 함수
    const handleToggle = () => {
        setIsOn((prev)=>!prev)
        //현재 ison 상태 값을 콜백함수 인자로 받아서 prev에 저장
        //!prev not 연산 결과를 리턴
    }
  return (
    //컴포넌트가 화면에 보여주는 부분
    <div className='container'>
      <img
        src={isOn ? bulbon : bulboff}
        alt={isOn ? 'ON' : 'OFF'}
        className='bulb'
        onClick={handleToggle}
      />
      <button onClick={handleToggle} className={isOn? "btn-off" : "btn-on"}>{isOn ? 'OFF' : 'ON'}</button>
    {/* 실제로 화면에 나오는 버튼 만들기 */}
    </div>
  )
}

