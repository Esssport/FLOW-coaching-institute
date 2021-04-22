import Layout from "../components/layout";
import CalendarHeader from "../components/calendar-header"
import CalendarTableHeader from "../components/calendar-table-header";
import CalendarFooterCTA from "../components/calendar-footer-cta";
import CalendarRow from "../components/calendar-row";

const Calendar = props => {
    return (
        <Layout>
            <CalendarHeader />
            <CalendarTableHeader />
            <CalendarRow />
            <CalendarFooterCTA />
        </Layout>
    )
}

export default Calendar;