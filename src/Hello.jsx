import React from "react";

function Hello({ color, name }) {
  return (
    <>
      <div style={{ color: color }}>{name}</div>
    </>
  );
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
