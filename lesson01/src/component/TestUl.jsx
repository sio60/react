//Day1_02 : 컴포넌트 맛보기
//-컴포넌트 jsx 문법 사용하고 파일 확장자 jsx 추천
//-일반 자바스크립트 파일은 js 사용
//-컴포넌트를 사용할 때 app 컴포넌트에 사용
//-app.jsx 대신에 app2.jsx
function GyubinUL(){
    return(
        <ul>
            <li>규빈</li>
            <li>금쪽이</li>
            <li>규쪽이</li>
            <li>잼민이</li>
            <li>바보</li>
        </ul>
    )
}
export function btsUL() {
    return(
        <ul>
            <li>슈가</li>
            <li>제이홉</li>
            <li>뷔</li>
            <li>지민</li>
        </ul>
    )
}
export default GyubinUL;
//default 컴포넌트는 1개만 지정