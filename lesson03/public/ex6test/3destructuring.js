// 비구조화, 구조 분해
// ㄴ 배열 또는 객체를 분해 - 함수 등 값을 전달 할 때 사용

const gyubin = {name:'금쪽이',age:20,address:'부산'}

function print1(objvalue){
    console.log('print1 함수 실행---------')
    console.log(objvalue.name)
    console.log(objvalue.age)
    console.log(objvalue.address)
}


function print2({age, name, addr}){ //{속성이름, 속성이름} => 순서 무관
    console.log('print2 함수 실행---------')
    console.log(name)
    console.log(age)
    console.log(addr) //없는 속성이름 : undefined
}
function print3({address}){ //필요한 속성만 가져오기
    console.log('print3 함수 실행---------')
    console.log(address)
}
function print4({address:addr}){ //address 속성값을 addr 변수에 저장
    console.log('print4 함수 실행---------')
    console.log(addr) //address 변수 선언 없으므로 오류
}
print1(gyubin)
print2(gyubin)
print3(gyubin)
print4(gyubin)

