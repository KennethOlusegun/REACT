import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Nav() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link exact to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/empresa">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/contato">Home</Link>
      </li>
    </ul>
  )
}