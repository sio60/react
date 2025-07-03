let x=20
//첫번째 조건식이 참일 때 && 연산 뒤의 식이 실행
let result = (x>10) && console.log('and 단축평과 확인(1)')

x=10
result = (x>10) && console.log('and 단축평과 확인(2)')
//첫번째 조건식이 거짓일 때 || 연산 뒤의 식이 실행
x=20
result = (x>10) || console.log('or 단축평과 확인(1)')

x=10
result = (x>10) || console.log('or 단축평과 확인(2)')