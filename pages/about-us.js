
import Layout from "../components/layout"
import HeaderAboutUs from "../components/header-about-us"
import TrustedBrands from "../components/trusted-brands"
import SectionTestimonials from "../components/section-testimonials"
import TypesCoaching from "../components/types-coaching"
import Outro from "../components/outro"


const AboutUs = props => {
    return (
        <Layout>
            <HeaderAboutUs />
            <TrustedBrands />
            <SectionTestimonials />
            <TypesCoaching />
            <Outro />
        </Layout>
    )
}

export default AboutUs;