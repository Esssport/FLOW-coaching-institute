import Slider from 'react-slick'
import CustomSlider from '../components/custom-slider'
import CtaBanner from '../components/cta-banner'
import Tile from "../components/tile"
import ProgramTile from "../components/program-tile"
import axios from "axios"
import Layout from "../components/layout"
import Outro from "../components/outro"
import TrustedBrands from "../components/trusted-brands";
import SectionEvents from '../components/section-events';
import SectionBook from '../components/section-book';

async function getPageFromPath(path, promise) {
  const data = await promise;
  const array = data.data
  for (let i = 0; i < array.length; i++) {
    if (array[i].path === path)
      return array[i]
  }
}



export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 200
  };

  //TODO: Get strapi address from environment varriables, remove hardcoded localhost

  // const strapiURL = "http://localhost:1337/"
  // const pagePromise = axios.get(strapiURL + "pages")
  // const page = getPageFromPath("/", pagePromise)
  // const pages = await pagePromise;


  return (
    <>
      <Layout>
        <div className="banner">
          <div className="banner-description">
            <h1>Welcome To Our <br />Flow World</h1>
            {/* <h1>{page.then(data=>data.title)}</h1> */}
            <h2>We help you blend your business knowledge into coaching towards a winning coaching career.</h2>
            <div className="accredited-by">
              <strong>Accredited by</strong>
              <img src="/third-party/ICF.svg"></img>
              <img src="/third-party/ACTP.svg"></img>
              <img src="/third-party/ACSTH.svg"></img>
              <img src="/third-party/ICF-CCE.svg"></img>
            </div>
            <button className="cta-button">Learn More</button>
          </div>
        </div>

        <div className="content">
          <h1>FLOW Coaching Institute (FCI®)</h1>
          <h2>We are  the leading international school for <strong><span>coaching, mentoring, and leadership development.</span></strong></h2>
          <p>Since 2009, FLOW Coaching Institute has committed itself to creating a better world by contributing to the growth of Professional coaches across the globe. Here at FLOW, we believe that when every individual is able to focus on what they can impact within their area of influence, we will be able to create a world that we want to live in and leave this legacy to our children. <strong>Our motto for positive change;</strong></p>

          <h1 className="gradient-headline">“Inspiring lives. One person at a time”</h1>
          <div className="number-description">
            <div className="number"><span className="number-section">125</span><span className="text-section"><br />hours</span></div>
            <p>Completion of the program gives you <strong>125 coach specific training hours,</strong> completion of mandatory mentoring hours  and a performance evaluation process included.</p>
          </div>

          <CustomSlider tileType="custom-tile">
            <Tile />
          </CustomSlider>
          <CtaBanner copy="Is coaching a right fit for you?" ctaText="TAKE THE QUIZ NOW" />

          <div className="program-section">
            <h1>Our Coaching Programs</h1>
            <CustomSlider tileType="program-tiles">
              <ProgramTile />
            </CustomSlider>
            <TrustedBrands />
            <SectionEvents />

            {/* <SectionBook /> */}
            <div className="book-section">
              <img src='/book.svg' alt='book'></img>
              <div className="book-description">
                <h1>FLOW Coaching Methodology & Principles</h1>

                <div className="discount-section">
                  <img src="/icon-discount.svg"></img>
                  <div className="discount-description">
                    <h2 >Free for course participants</h2>
                    <p>The course participants have FREE access to the e-book worth <strong>54.99 CAD$</strong></p>
                  </div>
                </div>
                <p>For many years now coaches have been inspiring lives across the globe by using the FLOW Coaching Methodology with their clients. Other than FLOW coaches we have been receiving many requests from other coaches to learn about the FLOW Coaching Methodology. As a result, we have decided to make the FLOW Coaching methodology and principles available to other coaches from around the world.</p>
                <div className="apply-buttons">
                  <button className="cta-button">Purchase</button>
                  <a className="cta-learn-more black">Learn more &rarr;</a>
                </div>
              </div>
            </div>

            <div className="empowerment-section">
              <h1>Women empowerment is a passion for us!</h1>
              <h2>Follow us on Instagram <img src="/icon-instagram.svg"></img></h2>
            </div>

            <Outro />

          </div>
        </div>

        {/* <img src='/banner.svg'></img> */}
        {/* <div className="slider-container">
            <Slider {...settings}>
              <div><div className="image" style={{ backgroundImage: `url(${banner})` }} /></div>
            </Slider>
          </div> */}
        {/* <h1 className={styles.title}>
          this is {' '}
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </Layout>
    </>
  )
}
