import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textFadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  const paragraphs = [
    `At AQTC, we are more than just tax consultants — we are your long-term strategic partners in financial clarity, compliance, and growth. With over 15 years of industry-leading experience, we specialize in helping individuals, entrepreneurs, and businesses navigate the complexities of taxation with confidence and peace of mind.`,

    `Our firm was founded on the belief that financial planning and tax compliance shouldn’t be stressful or confusing. Whether you’re a salaried professional, freelancer, SME, or corporate entity, our mission is to simplify the tax process, minimize your liabilities, and empower you to make informed, future-proof financial decisions.`,

    `What sets us apart is our deep technical expertise combined with a personalized, human approach. Our consultants stay up-to-date with evolving tax laws, industry standards, and audit regulations — ensuring your filings are always accurate, on time, and optimized for savings. But beyond forms and numbers, we genuinely care about your success and financial well-being.`,

    `From income tax and VAT services to audit representation and long-term financial strategy, AQTC is committed to delivering high-value, trustworthy service rooted in transparency and results. Our team works hand-in-hand with you, adapting strategies to your unique financial situation and helping you achieve both compliance and confidence — not just during tax season, but every day of the year.`,
  ];

  return (
    <section id="about" className="h-screen bg-gray-100 relative py-16  overflow-hidden">
      <div className="container h-full px-4 mx-20 flex flex-col md:flex-row items-center justify-between">
        <motion.div className="max-w-3xl space-y-4">
          <motion.h3
            className="text-[120px] text-[#066787] leading-none whitespace-nowrap font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textFadeVariant}
            custom={0}
          >
            About Us
          </motion.h3>

          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className="text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textFadeVariant}
              custom={index + 1}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

               <motion.div
          className="mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >

          <Image
            src="/about2.jpg"
            alt="About Tax Consultancy"
            width={500}
            height={600}
            className="h-[600px] w-[500px] object-cover  rounded relative z-50"
            />
            </motion.div>
 
      </div>

    <motion.div
  className="bg-custom w-[300px] h-[300px] absolute top-10 right-10 z-0"
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
/>

<motion.div
  className="bg-custom2 w-[900px] h-[200px] absolute bottom-20 right-0 z-0"
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true }}
/>
    </section>
  );
};

export default AboutSection;
