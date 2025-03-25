import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

export const PricingCard = ({
  title,
  price,
  features,
  popular = false,
  buttonText = "Get Started",
}: PricingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl p-8 shadow-lg ${
        popular ? "bg-primary text-white" : "bg-white text-dark"
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-display mb-2">{title}</h3>
      <p className="text-4xl font-display mb-6">
        {price}
        <span className="text-lg font-sans">/project</span>
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <svg
              className={`w-5 h-5 mr-3 ${
                popular ? "text-white" : "text-primary"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "secondary" : "outline"}
        className="w-full"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};
