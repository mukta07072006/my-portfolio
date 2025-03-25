import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";

const clients = [
  { name: "TechCorp", logo: "/images/clients/techcorp.svg" },
  { name: "DesignHub", logo: "/images/clients/designhub.svg" },
  { name: "InnovateCo", logo: "/images/clients/innovateco.svg" },
  { name: "BrandMasters", logo: "/images/clients/brandmasters.svg" },
  { name: "PixelPerfect", logo: "/images/clients/pixelperfect.svg" },
];

export const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Trusted By"
          subtitle="Companies I've worked with"
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Replace with actual client logos */}
              <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded-lg">
                <p className="text-dark/80 font-medium">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
