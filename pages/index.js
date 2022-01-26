import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/Utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Andreas Mouse</p>
        <p>This is a samplte website- bla bla</p>
        <Link href="/some-post">Some post</Link>
      </section>
    </Layout>
  );
}
