import React from "react";
import styled from "styled-components";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  // return <div style={style}>{children}</div>; style이 안먹을때, {{style}} 이중 괄호 였는지 확인해보자.
  return <Container style={style}>{children}</Container>;
}

// props 는 properties 의 줄임말 (어떠한 값을 컴포넌트에게 전달해줘야 할 때 사용)

// 여러개의 props는 비구조화 할당으로 간결하게 작성
// defaultProps 로 기본값 설정가능
// props.children
// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children
export default Wrapper;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 90vh;
  color: ${(props) => props.theme.textColor};
`;
