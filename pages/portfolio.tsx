import Head from "next/head";
import { Header } from "../components/Header";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { Footer } from "../components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | My Design Work</title>
        <meta
          name="description"
          content="Browse my complete portfolio of graphic design work including logos, branding, social media content, and more."
        />
      </Head>

      <Header />
      <main>
        <PortfolioGrid />
        {/* Add more portfolio sections as needed */}
      </main>
      <Footer />
    </>
  );
}
