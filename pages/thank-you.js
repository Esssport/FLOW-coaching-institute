import Layout from "../components/layout"
import Header from "../components/thank-you-header"
import Card from "../components/card"
import styles from '../styles/Resources.module.css'
import CallToActionEbookWeb from "../components/call-to-action-ebook-web"

const ThankYou = props => {
    return (
        <Layout >
            <Header/>
            <CallToActionEbookWeb/>
            <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </Layout>
    )
}

module.exports = ThankYou;