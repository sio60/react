import { useState } from "react"

export default function Calculator() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [result, setResult] = useState('')

    const [error, seterror] = useState('') //오류메세지 저장 상태값

    function handleNumberInput(value){
        console.log(/^-?\d\*.?\s*$/.test(value))
        if ((/^-?d\*.?\s*$/.test(value)))
            //정규식 통과할때만 setfirst로 상태값 변경
            setFirst(first)
            seterror('유효하지 않은 입력입니다')
    }

    const handleAdd = () => setResult(Number(first)+Number(second))
    const handleSub = () => setResult(Number(first)-Number(second))
    const handleMul = () => setResult(Number(first)*Number(second))
    const handleDiv = () => setResult(Number(first)/Number(second))
  return (
    <div>
        <h3>계산기</h3>
        <input type="number" placeholder="첫번째 값을 입력하세요" 
        value={first}
        onChange={(e)=>setFirst(e.target.value)} 
        onKeyUp={(e)=>handleNumberInput(e.target.value)}/>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMul}>×</button>
        <button onClick={handleDiv}>÷</button>
        <input type="number" placeholder="두번째 값을 입력하세요" 
        value={second} onChange={(e)=>setSecond(e.target.value)}/>
        <span>={result}</span>
    </div>
  )
}
