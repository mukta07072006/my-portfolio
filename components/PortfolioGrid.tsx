import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";

const categories = [
  "All",
  "Logos",
  "Social Media",
  "Thumbnails",
  "Branding",
  "Print",
];

const portfolioItems = [
  {
    id: 1,
    title: "Tech Startup Logo",
    category: "Logos",
    image: "/images/portfolio/1.jpg",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "Social Media",
    image: "/images/portfolio/2.jpg",
  },
  {
    id: 3,
    title: "YouTube Thumbnail Series",
    category: "Thumbnails",
    image: "/images/portfolio/3.jpg",
  },
  {
    id: 4,
    title: "Corporate Branding",
    category: "Branding",
    image: "/images/portfolio/4.jpg",
  },
  {
    id: 5,
    title: "Business Cards",
    category: "Print",
    image: "/images/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "App Icon Design",
    category: "Logos",
    image: "/images/portfolio/6.jpg",
  },
];

export const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Work"
          subtitle="Explore my creative portfolio"
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-dark hover:bg-primary/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-square bg-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium mb-1">{item.title}</h3>
                  <span className="text-primary-light text-sm">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
