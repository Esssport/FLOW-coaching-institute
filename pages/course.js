
import Layout from "../components/layout"
import CourseHeader from "../components/course-header"
import CourseNext from "../components/course-next"
import CourseOverviewSection from "../components/course-overview"
import ACTPBanner from "../components/actp-banner"
import CustomerStats from "../components/customer-stats"
import CourseFeatures from "../components/course-features"
import TrustedBrands from "../components/trusted-brands"
import CourseCardSection from "../components/course-card-section"

const Course = props => {
    return (
        <Layout>
            <CourseHeader />
            <CourseNext />
            <CourseOverviewSection />
            <ACTPBanner />
            <CustomerStats />
            <CourseFeatures />
            <TrustedBrands />
            <CourseCardSection />
        </Layout>
    )
}

module.exports = Course;