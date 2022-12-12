import styles from "../styles/components.module.css";

export default function Header({ text }) {
  return <header className={styles.header}>{text}</header>;
}
