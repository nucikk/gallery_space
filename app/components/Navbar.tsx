'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import styles from "../pages/page.module.css";

export const Navbar = () => {
    const pathname = usePathname();


    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
            <li className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`${styles.link} ${pathname === '/history' ? styles.active : ''}`}>
                    <Link href="/history">History</Link>
                </li>
            </ul>
        </nav>
    )
}