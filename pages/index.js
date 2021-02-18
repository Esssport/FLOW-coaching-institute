import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/nav-bar'
import Slider from 'react-slick'
import CustomSlider from '../components/custom-slider'
import CtaBanner from '../components/cta-banner'


export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 200
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Flow Coaching Institute</title>
        <link rel="icon" href="/favicon.svg" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap');</style>

      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className="banner">
          <div className="banner-description">
            <h1>Welcome To Our <br />Flow World</h1>
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

          <CustomSlider/>
          <CtaBanner copy="Is coaching a right fit for you?" ctaText="TAKE THE QUIZ NOW"/>

        </div>

        {/* <img src='/banner.svg'></img> */}
        {/* <div className="slider-container">
            <Slider {...settings}>
              <div><div className="image" style={{ backgroundImage: `url(${banner})` }} /></div>
            </Slider>
          </div> */}
        {/* <h1 className={styles.title}>
          this is {' '}
          <Link href="/blog/first-post">
            <a>The blog page </a>
          </Link>
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
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
