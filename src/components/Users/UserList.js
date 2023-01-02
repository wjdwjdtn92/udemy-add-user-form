import Card from "../UI/Card";
import styles from "./UserList.module.css";

function UsersList({ users }) {
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({new Date().getFullYear() - user.year} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
