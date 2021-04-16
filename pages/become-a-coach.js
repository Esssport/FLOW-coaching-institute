
import CoachHeader from "../components/coach-header"
import PillarsSection from "../components/coach-pillars"
import Layout from "../components/layout"
import CoachModules from "../components/coach-modules"
import CoachDiscoverModules from "../components/coach-discover-modules"
import CoachWhatYouGet from "../components/coach-what-you-get"
import SectionTestimonials from "../components/section-testimonials"
import Outro from "../components/outro"



const BecomeACoach = props => {
    return (
        <Layout>
            <CoachHeader />
            <PillarsSection />
            <CoachModules />
            <CoachDiscoverModules />
            <CoachWhatYouGet />
            <SectionTestimonials dark={true}/>
            <Outro />
        </Layout>
    )
}

module.exports = BecomeACoach;