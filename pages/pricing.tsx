import Head from "next/head";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { PricingCard } from "../components/PricingCard";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Footer } from "../components/Footer";

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$199",
      features: [
        "1 Design Concept",
        "2 Revisions",
        "48-72 Hour Turnaround",
        "Source Files",
        "Social Media Formats",
      ],
    },
    {
      title: "Standard",
      price: "$399",
      features: [
        "2 Design Concepts",
        "Unlimited Revisions",
        "24-48 Hour Turnaround",
        "Source Files",
        "Social Media Formats",
        "Brand Guidelines",
      ],
      popular: true,
    },
    {
      title: "Premium",
      price: "$699",
      features: [
        "3 Design Concepts",
        "Unlimited Revisions",
        "24 Hour Turnaround",
        "Source Files",
        "All Digital Formats",
        "Brand Guidelines",
        "Stationery Design",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Pricing | Design Services</title>
        <meta
          name="description"
          content="Transparent pricing for my design services. Choose the package that fits your needs."
        />
      </Head>

      <Header />
      <main>
        <section className="py-20 bg-light">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Simple Pricing"
              subtitle="Choose the perfect plan for your needs"
              className="mb-16 text-center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-display text-primary mb-4">
                Custom Projects
              </h3>
              <p className="text-dark/70 mb-6">
                Have a unique project or need something beyond our standard packages?
                I offer custom solutions tailored to your specific requirements.
                Get in touch to discuss your project and receive a personalized quote.
              </p>
              <Button variant="primary">Request Custom Quote</Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
