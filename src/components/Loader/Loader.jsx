import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
}
