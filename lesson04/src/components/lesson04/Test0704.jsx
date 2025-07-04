import { useState } from "react";

const schedules = [
  {
    date: "2025-07-01",
    todos: [
      { time: "09:00", text: "리액트 수업 복습", checked: true },
      { time: "11:00", text: "리액트 프로젝트 기획", checked: true },
      { time: "16:20", text: "데이터베이스 테스트", checked: false }
    ]
  },
  {
    date: "2025-07-06",
    todos: [
      { time: "09:40", text: "자바 클래스 ", checked: false },
      { time: "12:00", text: "운동", checked: false },
      { time: "13:50", text: "데이터베이스 구축", checked: false }
    ]
  },
  {
    date: "2025-07-09",
    todos: [
      { time: "11:20", text: "AI 프로젝트", checked: false },
      { time: "14:00", text: "팀프로젝트 회의", checked: false }
    ]
  }
];

export default function Test0704() {
  const [schedule, setSchedule] = useState(schedules[0])
  // const [todos, setTodos] = useState(initVal)
  const handleSelected = (idx) => {
    setSchedule(schedules[idx]);
  };
  // function handleChecked(id) {
  //   const newtodos= todos.map((item)=>
  //     item.id === id ? {...item, checked: !item.checked} : item
  //   )
  //   setTodos(newtodos)
  // }
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ marginTop: "1rem",marginBottom: "1rem" }}>
        {schedules.map((sch, idx) => (
          <button
            key={sch.date}
            onClick={() => handleSelected(idx)}
            disabled={schedule.date === sch.date}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: schedule.date === sch.date ? "#ccc" : "#007bff",
              color: schedule.date === sch.date ? "#666" : "white",
              border: "none",
              borderRadius: "4px",
              cursor: schedule.date === sch.date ? "not-allowed" : "pointer",
            }}
          >
            {sch.date}
          </button>
        ))}
      </div>
      <hr />
      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{schedule.date}</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th style={{ padding: "10px", textAlign: "center" }}>TIME</th>
            <th style={{ padding: "10px", textAlign: "center" }}>TODO</th>
            <th style={{ padding: "10px", textAlign: "center" }}>DONE</th>
          </tr>
        </thead>
        <tbody>
          {schedule.todos.map(({ time, text, checked }, idx) => (
            <tr key={idx}>
              <td style={{ padding: "10px", textAlign: "center" }}>{time}</td>
              <td style={{ padding: "10px" }}>{text}</td>
              <td style={{ padding: "10px", textAlign: "center" }}>
                <input type="checkbox" checked={checked}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
