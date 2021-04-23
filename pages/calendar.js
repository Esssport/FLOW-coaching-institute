import Layout from "../components/layout";
import CalendarHeader from "../components/calendar-header"
import CalendarTableHeader from "../components/calendar-table-header";
import CalendarFooterCTA from "../components/calendar-footer-cta";
import CalendarList from "../components/calendar-list";

const Calendar = props => {
    return (
        <Layout>
            <CalendarHeader />
            <CalendarTableHeader />
            <CalendarList />
            <CalendarFooterCTA />
        </Layout>
    )
}

export default Calendar;