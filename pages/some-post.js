import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

export default function SomeComponent({}) {
  async function yeah() {
    console.log("I was clicked");
    const modu = await import("../lib/andreas");
    console.log("I was imported successfully");
  }

  return (
    <Layout>
      <Metatags title="Updated Title" />
      <h1>Testing testing Babe! </h1>
      <h3 className="yeah">Test utanför Layout componenten</h3>
      <button onClick={yeah}>Click me</button>
    </Layout>
  );
}

function Metatags({ title }) {
  return (
    <>
      <Head>
        <title>{title || "Lawl Babe"}</title>
      </Head>
    </>
  );
}
