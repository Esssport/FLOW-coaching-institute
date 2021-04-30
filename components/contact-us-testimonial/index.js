import SectionTestimonials  from "../section-testimonials";
import styles from "./index.module.scss";

const ContactUsTestimonials = () => {
  return (
    <div className={styles.contactUsTestimonials}>
      <div className={styles.contentView}>
        <p className={styles.testimonialTitle}>
          Listen what they think about us
        </p>
        {/* VideoTestimonialCard here will be testimonial, there are a lot of testimonials, i didnt decide if there is a component already for that */}

      </div>
    </div>
  );
};

export default ContactUsTestimonials;