
import Layout from "../components/layout"
import CourseHeader from "../components/course-header"
import CourseNext from "../components/course-next"
import CourseOverviewSection from "../components/course-overview"
import ACTPBanner from "../components/actp-banner"
import CustomerStats from "../components/customer-stats"
import CourseFeatures from "../components/course-features"
import TrustedBrands from "../components/trusted-brands"
import CourseCardSection from "../components/course-card-section"
import ApplyNowSection from "../components/apply-now-section"
import CredlyBadgeBanner from "../components/banner-badge"
import SectionEvents from "../components/section-events"
import SectionBook from "../components/section-book"


const Course = props => {
    return (
        <Layout>
            <CourseHeader />
            <CourseNext />
            <CourseOverviewSection />
            <ACTPBanner />
            <CustomerStats />
            <CredlyBadgeBanner />
            <CourseFeatures />
            <TrustedBrands />
            <CourseCardSection />
            <ApplyNowSection />
            <SectionEvents />
            <SectionBook />
        </Layout>
    )
}

export default Course;