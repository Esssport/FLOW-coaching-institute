import styles from '../components/layout.module.css'
import Navbar from "./nav-bar"
import Head from 'next/head'

interface props {
    children: any;
}

export default function Layout({ children }: props) {
    return (
        <>
            <Head>
                <title>Flow Coaching Institute</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Navbar />
                    {children}
                </main>
                <footer className={styles.footer}>
                </footer>
            </div>
        </>
    )
}
