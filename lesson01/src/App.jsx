import logo from './logo.svg'; // 이미지 파일 import 변수명 logo로 지정
import './App.css';

//day1_01 : jsx 문법 맛보기
function App() {
  // 주석 기호 (자바 스크립트)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 주석 기호(jsx): jsx에서는 변수, 수식 등을 작성 할 때 중괄호 안에 씀 */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//export: 다른 외부 파일에서 app을 import 할 수 있도록 설정
