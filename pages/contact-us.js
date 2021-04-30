import Layout from "../components/layout"
import ContactUSForm from "../components/contact-us-form"
import ContactUsTestimonials from "../components/contact-us-testimonial"
import CallUsBanner from "../components/call-us-banner"
import TrustedBrands from "../components/trusted-brands"


const ContactUs = props => {
    return (
        <Layout >
        <ContactUSForm/>
        <ContactUsTestimonials/>
        <CallUsBanner/>
        <TrustedBrands />
        </Layout>
    )
}

module.exports = ContactUs;