import React, { useRef, useState } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import styles from "./App.module.css";
import Counter from "./Counter";
import Inputsample from "./Inputsample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useMemo } from "react";
import { useCallback } from "react";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);
  const nextId = useRef(4);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs; // 비구조화 할당

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // setInputs({
    //   ...inputs,
    //   [name]: value,
    // });
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
    console.log("onChange");
  }, []);

  // 렌더링 할때 마다 생성되는 함수
  const onCreate = useCallback(() => {
    // react 는 원본 배열 수정 금지 복사 후 쓰기.
    const paceUser = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => [...users, paceUser]); // equal // setUsers(users.concat(paceUser))
    nextId.current = nextId.current + 1;

    setInputs({ username: "", email: "" });
    console.log("onCreate");
  }, [username, email]);

  // 렌더링 할때 마다 생성되는 함수
  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((dt) => dt.id != id));
    // const paceUser = {
    //   id: nextId.current,
    //   username,
    //   email,
    // };
    // setUsers((user)=>) // equal // setUsers(users.concat(paceUser))
    console.log("onRemove");
  }, []);

  // 렌더링 할때 마다 생성되는 함수
  const onToggle = useCallback(
    (id) => {
      setUsers(
        (users) =>
          users.map((ds) => (ds.id === id ? { ...ds, active: !ds.active } : ds)) // 복사 한 후 active를 반대로 바꿔주기 아닌것들은 user정보 그대로 뿌려주기
      );
      console.log("onToggle");
    },

    []
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  // const count = countActiveUsers(users);
  return (
    <Wrapper>
      <Counter />
      {/* <Inputsample /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />{" "}
      <div>사용자 수 :{count}</div>
    </Wrapper>
  );
}

export default App;
