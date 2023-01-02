import React, { useState } from "react";
import AddUserForm from "../AddUser/AddUserForm";
import UsersList from "./UserList";
import styles from "./Users.module.css";
import { v4 as uuidv4 } from "uuid";

function Users() {
  const DUMY_DATA = [
    {
      id: 1,
      username: "Max",
      year: "1992",
    },
    {
      id: 2,
      username: "Jung",
      year: "1992",
    },
  ];

  const [users, setUsers] = useState(DUMY_DATA);

  const handleAddUser = (user) => {
    const newUsers = [
      ...users,
      {
        ...user,
        id: uuidv4(),
      },
    ];

    console.log(newUsers);
    setUsers(newUsers);
  };

  return (
    <div className={styles.wrapper}>
      <AddUserForm addUser={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default Users;
