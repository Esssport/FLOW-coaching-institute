import styles from '../components/layout.module.css'
import Navbar from "./nav-bar"
import Head from 'next/head'
import Footer from '../components/footer'

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
                    <div className={styles.children}>
                        {children}
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}
