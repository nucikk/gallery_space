import { Navbar } from "../components/Navbar";
import GetFetchImages from "../dashboard/GetFetchImages";
import styles from "../pages/page.module.css";

export default function Pages() {
    return (
        <>
        <header className={styles.header}>
            <Navbar />
        </header>
        </>
    )

}