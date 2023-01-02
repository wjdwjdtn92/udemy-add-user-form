import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";

function AddUserForm({ addUser }) {
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");

  const handleChageUsername = (event) => {
    const newName = event.target.value;
    setUsername(newName);
  };

  const handleChageAge = (event) => {
    const years = event.target.value;
    setYear(years);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username,
      year,
    };

    addUser(userData);

    setUsername("");
    setYear("");

    console.log(userData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChageUsername}
          required
        />
        <label htmlFor="name">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={year}
          min="1900"
          max={new Date().getFullYear()}
          onChange={handleChageAge}
        />
        <button aria-label="Add User Button" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
}

export default AddUserForm;
