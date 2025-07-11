//day2_01: 객체 props 연습
//{schedules}는 {schedules : schedules} 생략 된 형태의 객체
//schedules가 참조하는 데이터도 객체
import '../css/Timetable.css'
export default function TimetableV({schedules}){
    return (
        <div>
            <h3>2025.07.01(day2) 시간표</h3>
            <table>
                <thead>
                    <tr>
                        <th className='theading'>TIME</th>
                        <th className='theading'>TODO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //item에 저장된 데이터 예시 {time : '09:00', todo : '수업' }
                        schedules.map((item, idx)=>(
                            <tr key={idx}>
                                <td className='tdata'>{item.time}</td>
                                <td className='tdata'>{item.todo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}