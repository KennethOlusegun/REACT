import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
                <p className={styles.copy_right}>
                    <span>Costs</span> &copy; 2022
                </p>
            </ul>
        </footer>
    )
}