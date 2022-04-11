import "./styles.css";
import UserList from "./Components/UserList";
import TodoList from "./Components/TodoList";
import SearchUsers from "./Components/UserList";
import SearchTodos from "./Components/TodoUsingHOC";
export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Components</h1>
      <div style={{ display: "flex", margin: "20px", padding: "20px" }}>
        <h2 style={{ margin: "20px", padding: "20px" }}>
          {/* <UserList /> */}
          <SearchUsers />
        </h2>
        <h2 style={{ margin: "20px", padding: "20px" }}>
          {/* <TodoList /> */}
          <SearchTodos />
        </h2>
      </div>
    </div>
  );
}
