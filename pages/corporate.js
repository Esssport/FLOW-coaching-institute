import Layout from "../components/layout"
import CorporateHeader from "../components/corporate-header"
import Brands from "../components/trusted-brands"
import ServiceItem from "../components/corporate-service-item"
import TestimonialSection from "../components/corporate-testimonial-section"
import FeaturesListCorporate from "../components/corporate-features-list"
import CallToActionEbookWeb from "../components/call-to-action-ebook-web"



const Corporate = props => {
    return (
        <Layout >
            <CorporateHeader/>
            <Brands/>
            <ServiceItem/>
            <TestimonialSection/>
            {/* two sections are missing */}
            {/*<FeaturesListCorporate/> <-- gives errror*/}
            <CallToActionEbookWeb/>

            </Layout>
    )
}

module.exports = Corporate;