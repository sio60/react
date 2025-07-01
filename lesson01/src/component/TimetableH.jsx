//day01_06: 부모 컨포먼트가 자식에게 전달하는 데이터(프로퍼티) 연습
import '../css/Timetable.css'
export default function timetableH({time, todo}) {
 return (
    <div>
        <h3 className='title'>오늘의 시간표</h3>
        <table>
            {/* 리액트에서는 tr을 tbody, thead 부모 요소 아래에 포함 */}
            <tbody>
                <tr>
                    <th className="theading">TIME</th>
                     {time.map((item, idx)=>(
                    <td key={idx} className='tdata'>{item}</td>
                ))}
                    {/* time 배열의 값들로 td 태그 요소 만들기 */}
                </tr>
                <tr>
                    <th className='theading'>TODO</th>
                     {todo.map((item, idx)=>(
                    <td key={idx} className='tdata'>{item}</td>
                ))}
                    {/* todo 배열의 값들로 td 태그 요소 만들기 */}
                </tr>
            </tbody>
        </table>
    </div>
  )
}
