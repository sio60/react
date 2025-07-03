import { useEffect, useRef, useState } from "react";

export default function App(){
    const intiVal = [ 
    {
        id: 1,
        text: "리액트 수업 복습",
        checked: true,
    },
    {
        id: 2,
        text:"리액트 프로젝트 기획",
        checked: false,
    },
    {
        id: 3,
        text: "리액트 프로젝트 기획",
        checked: true,
    }
];
const [todos, setTodos] = useState(intiVal) 
const maxid = useRef(todos.length+1)
const [value, setValue] = useState("")

function handleChecked(id){
    //배열 자체를 바꿔야 상태 변경 됨
    // 배열 특정 요소의 checked 값만 변경한 것을 새로운 배열로 하면 todos 변경
    // ! 연산자는 참은 거짓, 거짓은 참으로 변경
    const newtodos = todos.map((item)=>
        item.id === id ? {...item, checked: !item.checked} : item)
    //상태가 바뀜
    setTodos(newtodos)
    console.log('handleChecked:',todos) // 바로 반영 된 것이 보이지 않음(재렌더링하기 전의 값을 출력)
}
function handleInsert(text){
    const newTodo = {
        id: todos.length+1,
        text:text,
        checked: false
    }
    // 배열에 새로운 요소 추가하여 상태 변경
    useEffect(()=>{
        console.log("todos:",todos)
    },[todos,value]) // todos 상태 변경이 되면 실행하는 부가 기능
    //아래 함수들에서 작성한 console.log(상태값)은 바로 반영 된 것이 보이지 않아요
    //(재렌더링 하기 전의 값을 출력) => useEffect(실행할 함수, 의존값 배열) 사용하여 해결
    setTodos([...todos, newTodo])
}
//배열 자료구조의 상태변경 -> 재렌더링 -> 화면 바꾸기
function handleRemove(id) {
    const newTodos = todos.filter((item) =>item.id !==id) 
    //인자로 전달 된 id값이 아닌 것만 필터링하여 상태 변경
    setTodos(newTodos)
}
return(
    <div>
        {/* onClick에서 실행할 함수 안에서 handleChecked(1) 호출 */}
        <button onClick={()=>handleChecked(1)}>id = 1 할 일 checked 값 변경</button>
        <button onClick={()=>handleChecked(2)}>id = 2 할 일 checked 값 변경</button>
        <button onClick={()=>handleChecked(3)}>id = 3 할 일 checked 값 변경</button>
        <button onClick={()=>handleInsert('웹 기초 공부')}>새로운 할 일 추가</button>
        <button onClick={()=>handleRemove(2)}>id=2 할 일 삭제</button>
        <button onClick={()=>handleRemove(4)}>id=4 할 일 삭제</button>
    </div>
)
}