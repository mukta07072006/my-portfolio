import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { AnimatedText } from "./ui/AnimatedText";

export const Hero = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "120+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
  ];

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                Professional Designer
              </span>
            </motion.div>

            <AnimatedText
              text="Crafting Visual Stories That Captivate"
              className="text-5xl md:text-6xl font-display leading-tight mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-dark/70 mb-8 max-w-lg"
            >
              I transform ideas into stunning visual experiences. With a keen eye for detail and a passion for
              innovation, I create designs that leave a lasting impression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="primary">View Portfolio</Button>
              <Button variant="outline">Get in Touch</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-display text-primary">{stat.value}</p>
                  <p className="text-dark/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary to-accent rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image or design showcase */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="text-2xl">Design Showcase</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary rounded-3xl shadow-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
