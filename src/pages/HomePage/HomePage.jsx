import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <p>Welcome! Manage your personal phonebook.</p>
    </div>
  );
}
