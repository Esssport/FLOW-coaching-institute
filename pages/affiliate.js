import Layout from "../components/layout"
import Header from "../components/affiliate-header"
import Steps from "../components/3-steps-section"
import CoursePromote from "../components/course-promote"
import MarketingMaterialSection from "../components/marketing-material-section"


const Affiliate = props => {
    return (
        <Layout >
         <Header/>
         <Steps/>
         <CoursePromote/>
         <MarketingMaterialSection/>
        </Layout>
    )
}

module.exports = Affiliate;