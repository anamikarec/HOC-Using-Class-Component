import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      console.log(data);
    };
    fetchTodos();
  }, []);

  // let renderUsers = users.map((user) => {
  //   return (
  //     <div key={user.id}>
  //       <p>{user.name}</p>
  //     </div>
  //   );
  // });
  let filterTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(term) >= 0;
    })
    .map((todos) => {
      return (
        <div key={todos.userId}>
          <p style={{ fontSize: "16px" }}>{todos.title}</p>
        </div>
      );
    });
  return (
    <>
      <h2>Todos</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {/* {renderUsers} */}
      <div>{filterTodos}</div>
    </>
  );
};
export default TodoList;
