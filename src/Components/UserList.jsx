import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState("");
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //     console.log(data);
  //   };
  //   fetchUsers();
  // }, []);

  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  });
  // let filterUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) >= 0;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p style={{ fontSize: "16px" }}>{user.name}</p>
  //       </div>
  //     );
  //   });
  return (
    <>
      {/* <h2>Users</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      {/* {renderUsers} */}
      <div>{renderUsers}</div>
    </>
  );
};
const SearchUsers = HOC(UserList, "users");
export default SearchUsers;
