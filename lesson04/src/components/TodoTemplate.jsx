import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import '../assets/css/TodoTemplate.scss'

export default function TodoTemplate({children}) {
  return (
    <div className="TodoTemplate">
        <div className="app-title">일정관리</div>
        {/* children은 리액트에서 자식 컴포넌트를 전달할 때 사용하는 미리 정해진 props 입니다, 받았을 때만 사용하면 됨, todoinsert, todolist 컴포넌트가 자식 컴포넌트 */}
        <div className="content">{children}
        {/* TodoInsertm, TodoList 컴포넌트 */}
        </div>
        </div>
  )
}
