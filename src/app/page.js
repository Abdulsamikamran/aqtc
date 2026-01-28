"use client";

import Head from "next/head";
import Header from "./components/header";
import AnimatedText from "./components/animatedText";
import TiltedCardReveal from "./components/services";
import AboutSection from "./components/about";
import { motion } from "framer-motion";

import Testimonial from "./components/Testimonial";
import FAQSection from "./components/Faq";
import { Input } from "@/components/lightswind/input";
import { Textarea } from "@/components/lightswind/textarea";
import { Button } from "@/components/lightswind/button";

export default function Home() {
  const items = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Team", href: "#team" },
    { label: "Resources", href: "#resources" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
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

  const colors = ["#066787", "#ffffff", "#0e98cd"];
  return (
    <div className="w-full">
      <Head>
        <title>Tax Experts - Professional Tax Consultancy Services</title>
        <meta
          name="description"
          content="Get expert tax consultancy services tailored for individuals and businesses. Maximize returns, stay compliant, and plan your financial future."
        />
        <meta
          name="keywords"
          content="Tax Consultancy, Income Tax, Business Tax, Financial Planning, Tax Returns, Tax Services"
        />
        <meta name="author" content="Tax Experts" />
        <meta
          property="og:title"
          content="Tax Experts - Professional Tax Consultancy Services"
        />
        <meta
          property="og:description"
          content="Get expert tax consultancy services tailored for individuals and businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.taxexperts.com" />
        <meta property="og:image" content="/tax-banner.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="">
        <Header items={items} />
      </div>

      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl  flex items-center leading-14 font-bold mb-4">
            Expert Tax Solutions for
            <AnimatedText />
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We help you reduce your tax burden, stay compliant, and plan your
            financial future with confidence.
          </p>

          <button className="btn-23">
            <span className="text">Contact us!</span>
            <span aria-hidden="" className="marquee">
              We do the math so you don’t have to.
            </span>
          </button>
        </div>
      </section>

      <section id="services" className="py-16 bg-white  ">
        <TiltedCardReveal />
      </section>

      <AboutSection />

      <section id="why-us" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-20 px-4">
          <div className="mb-12">
            <motion.h3
              className="text-[48px] md:text-[80px] lg:text-[120px] text-[#066787] leading-none font-semibold whitespace-nowrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textFadeVariant}
              custom={0}
            >
              Why Choose AQTC?
            </motion.h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-10 text-left">
            <div className="max-w-sm text-center md:text-left">
              <h4 className="font-bold text-xl mb-2">20+ Years of Expertise</h4>
              <p>
                Our certified consultants bring two decades of industry
                experience and trusted results.
              </p>
            </div>
            <div className="max-w-sm text-center md:text-left">
              <h4 className="font-bold text-xl mb-2">500+ Satisfied Clients</h4>
              <p>
                We've successfully guided hundreds of individuals and businesses
                to financial clarity.
              </p>
            </div>
            <div className="max-w-sm text-center md:text-left">
              <h4 className="font-bold text-xl mb-2">
                98% Client Retention Rate
              </h4>
              <p>
                Our transparent service and personalized support keep clients
                coming back year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-6xl text-[#066787] font-semibold mb-12">
            What Our{" "}
            <span className="bg-[#066787] rounded-xs p-2 text-white">
              Clients
            </span>{" "}
            Say
          </h3>
          <Testimonial />
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {" "}
          <h3 className="text-6xl text-[#066787] text-center font-semibold mb-12">
            Frequently Asked
            <span className="bg-[#066787] ml-2  rounded-xs p-2 text-white">
              Questions
            </span>
          </h3>
          <FAQSection />
        </div>
      </section>

      <section id="contact" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-6 ">
              <h3 className="text-8xl ml-6  whitespace-nowrap absolute -left-[320px] top-44 rotate-90  text-[#066787] text-center font-semibold">
                Contact Us
                {/* <span className="bg-[#066787] ml-2  rounded-xs p-2 text-white"> */}
                {/* </span> */}
              </h3>

              <form className="space-y-4  ml-12">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-full! h-14"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full! h-14"
                />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full! h-14"
                />

                <Textarea
                  placeholder="Your Message."
                  id="message"
                  className="w-full! h-30 border"
                />
                <Button
                  type="submit"
                  className="bg-[#066787] text-white h-12 w-34"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="flex-1 h-80 md:h-auto">
              <iframe
                src="https://www.google.com/maps?q=48.8584,2.2945&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                className=" shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white p-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Tax Experts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
