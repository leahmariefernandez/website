import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    
    <Layout home>
      <Head>
        <title>LEAH FERNANDEZ</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Check my <a className={utilStyles.click} href="https://github.com/leahmariefernandez">github</a>, for what I've been up to lately. </p>
        <p>Here is my <a className={utilStyles.click} href="./images/FernandezLeah.docx.pdf">resume</a>.</p>
        <p>More importantly, let’s play a <a className={utilStyles.click} href="./game">game.</a>(essay about life).</p>
        <p><a className={utilStyles.click} href="https://drive.google.com/drive/folders/1cSDCaOrtDiNioVbrHWG5CvmTkurfR-0q?usp=share_link">Everyone</a> & <a className={utilStyles.click} href="https://parallel-telephone-ee8.notion.site/fa81dd23c210421cbb732a73c72b633d?v=7d7ba9731ccb4d7da71a681554cd237a">Everything</a></p>
        <p>I hope you found everything you were looking for :)</p>
      </section>
    </Layout>
  );
  }

