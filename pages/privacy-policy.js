import Layout from "../components/layout"
import styles from '../styles/StaticPages.module.scss'
import responsive from '../styles/Responsive.module.scss'



const PrivacyPolicy = props => {
    return (
        <Layout >
            <div className={responsive.container}>
                <div className={responsive.col12}>
                    <div className={styles.privacyPolicy}>
                        <div className={styles.header}>
                        <p className={styles.title}>Privacy Policy</p>
                        <p className={styles.date}>
                            Effective on: 2 Feb 2021
                        </p>
                        </div>
                        <p className={styles.text}>
                        <strong className={styles.textEmphasis0}>
                            What information do we collect?
                            <br />
                        </strong>
                        We collect personal information you voluntarily
                        choose to provide such as your name, address, e-mail
                        address, phone numbers and/or other categories of
                        personal information, such as payment card
                        information.
                        <br />
                        <br />
                        Our web server logs may collect additional
                        information, such as the domain names of visitors to
                        our websites in order to measure the use of our
                        websites and to improve content.
                        <br />
                        <br />
                        We may use cookies to manage areas of our website
                        and to deliver a better website experience to our
                        users. You have choices with respect to cookies.
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            What do we use your information for?
                            <br />
                        </strong>
                        Personal data submitted on this website will be used
                        only for the purpose of providing guidance and
                        assistance to you. We will not provide your personal
                        information to any third parties for the purpose of
                        direct marketing.
                        <br />
                        <br />
                        We may use aggregate information collected and
                        information about your computer, etc. in the
                        administration of this website, to improve the
                        website’s usability, and for marketing purposes.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Security of your personal data
                            <br />
                        </strong>
                        We will protect personal information by reasonable
                        security safeguards against loss or theft, as well
                        as unauthorized access, disclosure, copying, use or
                        modification. Of course, data transmission over the
                        internet is inherently insecure, and we cannot
                        guarantee the security of data sent over the
                        internet. Therefore, we do not recommend sending
                        highly personal or sensitive information via our
                        website or any other website.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Removing/Updating your personal information
                            <br />
                        </strong>
                        If you wish to delete or modify your personal
                        information from our database, or if you wish to
                        opt-out of future communications from us, please
                        contact us via either email or regular mail using
                        the Contact Information provided below.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Policy amendments
                            <br />
                        </strong>
                        We may update this privacy policy from time-to-time
                        by posting a new version on our website. You should
                        check this page occasionally to ensure you are happy
                        with any changes.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Third party websites
                            <br />
                        </strong>
                        The website contains links to other websites. We are
                        not responsible for the privacy policies of
                        third-party websites.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Online Privacy Policy only
                            <br />
                        </strong>
                        This online privacy policy applies only to
                        information collected through our website and not to
                        information collected offline.
                        <br />
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            Contact
                            <br />
                        </strong>
                        If you have any questions about this privacy policy
                        or our treatment of your personal data, please write
                        to us using the address below:
                        <br />
                        <br />
                        <strong className={styles.textEmphasis0}>
                            FLOW Fırst Canadıan Place 100 Kıng Street West
                            Suıte 4700 Toronto Ontarıo 416-915-4144
                        </strong>
                        </p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

module.exports = PrivacyPolicy;