import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { Clients } from "../components/Clients";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Designer Portfolio | Creative Visual Solutions</title>
        <meta
          name="description"
          content="Professional graphic designer specializing in logos, branding, social media content, and more. View my portfolio and get in touch for your next project."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <Clients />
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
