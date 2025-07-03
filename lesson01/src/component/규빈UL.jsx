//day01_04: 데이터를 전달 받아 컴포넌트에서 사용하기
//

export default function 규빈UL({characters, title}) {
    //객체 형식으로 저장된 스타일 값 정의, 적용의 style 속성에서 함
     const titlestyle = {
        color : 'tomato',
        border : '1px solid tomato'
     }
  return (
    <div>
        
        <h3 style={titlestyle}>{title}</h3>
        <ul>
            {characters.map((item, idx)=>(
                <li key={idx}>{item}</li>
            ))}
            {/* jsx는 태그안에 js 코드 쓸 때 꼭 중괄호 안에 써야함 */}
        </ul>
    </div>
  )
}
/*
위의 코드에서 규빈UL({characters})와 같이 함수에 입력값(인자) 있음, 부모 컴포넌트가 주는 값
                        ㄴ {characters}는{chracters:characters}{속성이름:값변수}를 줄여서 씀
배열값이['예쁨','무서움','귀여움'] 일 때 item='예쁨', idx=0 / item='무서움', idx=1 / item='귀여움', idx=2
배열.map(function(item,idx){
return (실행 내용)})
: 배열의 요소를 하나씩 가져다가 값을 item, 인덱스 번호는 idx 저장함
: item, idx 값으로 함수내용을 실행한 return 결과로 새로운 배열이 만들어짐
*/