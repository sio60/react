import { useState } from "react"

export default function InputState() {
    const [username, setUsername] = useState('홍길동')
    const [nickname, setNickname] = useState('GDhong')

    function handleOk(){
        alert(`${username} : ${nickname}`)
        setUsername('')
        setNickname('')
    }
    //e변수는 : 발생한 이벤트 정보 입력값을 저장하는 변수
    function handleKeydown(e){
        if (e.key ==='Enter') handleOk()
    }
  return (
    <div>
        <h3>input에 state 변수 활용</h3>
        <p>input value에 상태 변수를 적용하면 onchange이벤트 꼭 필요</p>
        <hr />
        <input type="text" placeholder="사용자 이름을 입력하세요" value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* e.target은 이벤트를 일으킨 요소 */}
        <input type="text" placeholder="사용자 닉네임을 입력하세요" value={nickname} onKeyDown={handleKeydown} onChange={(e) => setNickname(e.target.value)} />
        <button onClick={handleOk}>입력완료</button>
        <div>
            이름 : {username}, 닉네임 : {nickname}
        </div>
    </div>
  )
}
