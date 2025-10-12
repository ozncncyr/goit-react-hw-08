import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <h2>Log In</h2>
      <LoginForm />
    </div>
  );
}
