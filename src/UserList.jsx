import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  //deps에 빈배열: 처음에만 함수 호출
  //deps에 의존값 존재 : 처음과 지정값이 변경될 때 호출
  //deps가 아예 없는 경우 : 컴포넌트가 리렌더링 될 때마다 호출
  //*부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링 -> 최적화필요
  // useEffect(() => {
  //   // 1
  //   console.log("user값이 설정됨");
  //   console.log(user);
  //   return () => {
  //     // 2 clean up 함수 (state에서 값 지울때 실행)
  //     console.log("user값이 바뀌기 전 ...");
  //     console.log(user);
  //   };
  // }, [user]);
  // useEffect(() => {
  //   // 렌더가 될 때 마다, 실행
  //   console.log(user);
  // });
  return (
    <div>
      <b
        style={{ color: user.active ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Remove</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
