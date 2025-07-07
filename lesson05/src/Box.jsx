import { useEffect, useState } from 'react';
import duckleft from "./duckleft.png"
import duckright from "./duckright.png"

function Box() {
  const [boxwidth, setWidth] = useState(100);
  const [boxheight, setHeight] = useState(100);
  const [posLeft, setLeft] = useState(300);
  const [posTop, setTop] = useState(300);
  const [direction, setDirection] = useState(duckleft); // 방향 상태

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "ArrowLeft") {
        setLeft(prev => Math.max(0, prev - 10));
        setDirection(duckleft);
      }
      if (e.key === "ArrowRight") {
        setLeft(prev => prev + 10);
        setDirection(duckright);
      }
      if (e.key === "ArrowUp") setTop(prev => Math.max(0, prev - 10));
      if (e.key === "ArrowDown") setTop(prev => prev + 10);
      if (e.key === 's') setHeight(prev => prev + 10);      // 세로+
      if (e.key === 'w') setHeight(prev => Math.max(10, prev - 10)); // 세로-
      if (e.key === 'd') setWidth(prev => prev + 10);        // 가로+
      if (e.key === 'a') setWidth(prev => Math.max(10, prev - 10));  // 가로-
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);
  const imgSrc = direction === duckleft ? duckleft : duckright  ;
  return (
    <div>
      <div>
        <SandBox
          width={boxwidth}
          height={boxheight}
          left={posLeft}
          top={posTop}
          src={imgSrc}
        />
      </div>
    </div>
  );
}

function SandBox(props) {
  const boxstyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    left: `${props.left}px`,
    top: `${props.top}px`,
    position: 'absolute',
    background: 'none',
    transition: 'all 0.15s'
  };

  return (
    <img
      src={props.src}
      style={boxstyle}
      alt="박스이미지"
    />
  );
}

export default Box;
