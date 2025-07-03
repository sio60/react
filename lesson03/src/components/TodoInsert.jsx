import { useState } from "react";
import '../assets/css/TodoInsert.scss'
import { MdAdd } from 'react-icons/md'

export default function TodoInsert({onInsert}) {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => { 
    e.preventDefault();
    onInsert(value);
    setValue("");
  };
  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
            <input
              placeholder="할 일을 입력하세요."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {/* type=submit 버튼 클릭은 onSubmit 이벤트 발생=> form 태그에서 함수 지정 */}
            <button type="submit">
              <MdAdd/>
            </button>
          </form>
  )
}
