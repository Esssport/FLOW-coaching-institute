import Layout from "../components/layout"
import Header from "../components/resources-header"
import Card from "../components/card"
import styles from '../styles/Resources.module.css'


const Resource = props => {
    return (
        <Layout >
            <Header/>
            <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

            </div>
        </Layout>
    )
}

module.exports = Resource;