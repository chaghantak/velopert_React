import React, { useRef, useState } from "react";

function Inputsample(props) {
  // --react에서  특정 DOM 을 선택할때 사용 ex)ref --javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
  // useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데요, 바로, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.
  //setTimeout, setInterval 을 통해서 만들어진 id
  //외부 라이브러리를 사용하여 생성된 인스턴스
  //scroll 위치
  const nameRef = useRef();

  const [inputs, setInputs] = useState({
    id: "",
    nick: "",
  });
  const { id, nick } = inputs; // 비구조화 할당

  const onChange = (e) => {
    const { name, value } = e.target; // = const {target: { name, value }} = e;
    setInputs({
      ...inputs,
      [name]: value, // https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4 참고
    });
  };

  const onReset = () => {
    setInputs({
      id: "",
      nick: "",
    });
    nameRef.current.focus();
  };

  // [name]: value 에 대한 연습
  const data = { nox: "사과", don: "1" };
  // 사과:"1" 로 만들어보기
  const a = {
    [data.nox]: data.don,
  };
  console.log(a);
  return (
    <div>
      <input name="id" onChange={onChange} value={id} />
      <input ref={nameRef} name="nick" onChange={onChange} value={nick} />
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Inputsample;
