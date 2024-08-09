import About from "@/components/main/about";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>aboutfi | Home</title>
      <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
      <meta property="og:title" content="fii maarif personal website"/>
      <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
      <meta property="og:image" content="https://aboutfi.vercel.app/favicon.png"/>
      <meta property="og:url" content="https://aboutfi.vercel.app"/>
    </Head>
    <div className="flex flex-col md:flex-row md:p-10 font-roboto">
      <Sidebar/>
      <div className="w-full md:w-3/4 md:ml-4">
        <Navbar/>
      </div>
    </div>
    </>
  );
}
