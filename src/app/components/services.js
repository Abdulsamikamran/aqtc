import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./card";
import Image from "next/image";

const services = [
  {
    title: "Personal Income Tax",
    desc: "We help individuals file accurate tax returns, maximize deductions, and stay compliant with local laws — ensuring peace of mind and optimal tax outcomes.",
  },
  {
    title: "Business Tax Filing",
    desc: "Whether you're running a small startup or managing a large enterprise, we handle your tax filings efficiently while ensuring full compliance with regulations.",
  },
  {
    title: "Tax Planning",
    desc: "Our strategic tax planning services help you legally reduce liabilities, structure income efficiently, and take advantage of available tax-saving opportunities.",
  },
  {
    title: "VAT Consultancy",
    desc: "From VAT registration and documentation to timely filing and compliance audits, we provide comprehensive support tailored to your business's VAT obligations.",
  },
  {
    title: "Audit Assistance",
    desc: "Facing a tax audit? Our experts offer professional representation, respond to authority queries, and manage documentation to protect your interests.",
  },
  {
    title: "Financial Advisory",
    desc: "We align your tax strategy with long-term financial goals — offering insights on investments, asset structuring, and fiscal planning for sustainable growth.",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const textFadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const TiltedCardReveal = () => {
  return (
    <section id="services" className="py-16 h-full bg-white scroll-mt-24 relative ">
      <div className="container flex justify-between  items-center mx-auto px-4">
        <h3 className="text-[120px] text-[#066787] ml-20 whitespace-nowrap absolute -left-[300px] top-60 rotate-90 font-semibold  ">
          Our Services
        </h3>
        <div className="space-y-16 ml-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-8 justify-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <TiltedCard
                  captionText={service.title}
                  descriptionText={service.desc}
                  containerHeight="100%"
                  containerWidth="100%"
                  scaleOnHover={1.07}
                  rotateAmplitude={8}
                />
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
        <Image className="absolute -top-16 right-0 w-[600px] h-[300px]" src={"/pattern.svg"} width={1000} height={1000} alt="pattern"/>
        <Image className="absolute -bottom-16 right-0 w-[600px] h-[300px]" src={"/pattern.svg"} width={1000} height={1000} alt="pattern"/>

     
     

        <motion.div className="ml-60 max-w-2xl space-y-6">
      <motion.h4
        className="text-3xl font-semibold text-[#066787]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textFadeVariant}
        custom={0}
      >
        Comprehensive, Compliant & Client-Focused Tax Solutions
      </motion.h4>

           {[
        `In today’s rapidly shifting financial and regulatory landscape,
        navigating taxes can feel overwhelming — especially when even a
        small oversight can lead to costly penalties or missed savings. At 
        AQTC, we bridge that gap by providing accurate, timely, and personalized
        tax consultancy that empowers our clients to make confident financial decisions.`,

        `Our services aren’t just about filing forms — they’re about
        transforming financial uncertainty into opportunity. Whether you're
        a salaried professional aiming to maximize personal deductions or a
        business owner seeking to streamline multi-layered tax obligations,
        our consultants bring decades of experience and sharp industry
        insights to the table.`,

        `We take the time to understand your unique circumstances, industry,
        and future goals. This allows us to craft tailored strategies that
        not only ensure compliance with the latest tax laws but also align
        with your long-term financial vision. By combining regulatory
        precision with strategic foresight, we help you optimize every rupee
        you earn, save, or invest.`,

        `From complex audit representation and VAT planning to proactive
        income structuring and financial advisory, our team delivers
        practical, jargon-free guidance rooted in trust and transparency.
        Every solution we offer is backed by deep technical know-how and a
        genuine commitment to your success — not just at tax time, but
        throughout the fiscal year.`,
      ].map((text, i) => (
        <motion.p
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textFadeVariant}
          custom={i + 1} // stagger each para after the heading
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
    </div>
      
    </section>
  );
};

export default TiltedCardReveal;
