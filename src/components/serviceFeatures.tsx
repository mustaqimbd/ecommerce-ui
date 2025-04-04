import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck size={40} className="text-white" />, 
    title: "free and fast delivery",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <Headphones size={40} className="text-white" />, 
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />, 
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const ServiceFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 lg:gap-20 md:gap-10 mb-32">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-2 max-w-xs">
          <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full border-10 border-gray-300">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold uppercase mt-4">{feature.title}</h3>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
