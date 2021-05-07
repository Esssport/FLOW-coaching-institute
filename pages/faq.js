import Layout from "../components/layout"
import FaqWeb from "../components/faq-web"
import ApplyNow from "../components/apply-now-section"

const Faq = props => {
    return (
        <Layout >
            <FaqWeb/>
            <ApplyNow/>
        </Layout>
    )
}

module.exports = Faq;