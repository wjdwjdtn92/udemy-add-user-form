import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUserForm.module.css";

function AddUserForm({ addUser }) {
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState();

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

    if (username.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    const userData = {
      username,
      year,
    };

    addUser(userData);

    setUsername("");
    setYear("");

    console.log(userData);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChageUsername}
          required
          minLength="2"
        />
        <label htmlFor="name">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={year}
          min="1900"
          max={new Date().getFullYear()}
          onChange={handleChageAge}
          required
        />
        <Button ariaLabel="Add User Button" type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
}

export default AddUserForm;
