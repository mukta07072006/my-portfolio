import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Behance", href: "#", icon: "B" },
    { name: "Dribbble", href: "#", icon: "D" },
    { name: "Instagram", href: "#", icon: "I" },
    { name: "LinkedIn", href: "#", icon: "L" },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display mb-4">
              DESIGN<span className="text-secondary">ER</span>
            </h3>
            <p className="text-light/70 mb-4">
              Creating visually stunning designs that tell your brand's story and
              captivate your audience.
            </p>
            <p className="text-light/50 text-sm">
              © {new Date().getFullYear()} Designer Portfolio. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-light/70">Logo Design</span>
              </li>
              <li>
                <span className="text-light/70">Brand Identity</span>
              </li>
              <li>
                <span className="text-light/70">Social Media Graphics</span>
              </li>
              <li>
                <span className="text-light/70">Print Design</span>
              </li>
              <li>
                <span className="text-light/70">UI/UX Design</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-dark-light hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-dark-light text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
