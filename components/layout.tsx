import styles from '../components/layout.module.css'

interface props {
    children: any;
}

export default function Layout({ children }: props) {
    return <div className={styles.container}>{children}</div>
}