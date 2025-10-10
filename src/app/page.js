"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import AnimatedText from "./components/animatedText";
import TiltedCardReveal from "./components/services";
import AboutSection from "./components/about";
import { motion } from "framer-motion";

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
          Our certified consultants bring two decades of industry experience and trusted results.
        </p>
      </div>
      <div className="max-w-sm text-center md:text-left">
        <h4 className="font-bold text-xl mb-2">500+ Satisfied Clients</h4>
        <p>
          We've successfully guided hundreds of individuals and businesses to financial clarity.
        </p>
      </div>
      <div className="max-w-sm text-center md:text-left">
        <h4 className="font-bold text-xl mb-2">98% Client Retention Rate</h4>
        <p>
          Our transparent service and personalized support keep clients coming back year after year.
        </p>
      </div>
    </div>
  </div>
</section>



      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/team1.jpg"
                alt="Founder"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h4 className="mt-4 text-xl font-bold">Ali Hassan</h4>
              <p className="text-sm text-gray-600">
                Founder & Senior Consultant
              </p>
            </div>
            <div>
              <Image
                src="/team2.jpg"
                alt="Tax Specialist"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h4 className="mt-4 text-xl font-bold">Zainab Murtaza</h4>
              <p className="text-sm text-gray-600">Business Tax Specialist</p>
            </div>
            <div>
              <Image
                src="/team3.jpg"
                alt="Auditor"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h4 className="mt-4 text-xl font-bold">Imran Qureshi</h4>
              <p className="text-sm text-gray-600">Audit & Compliance Head</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Resources & Blog
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6 rounded shadow">
              <h4 className="font-bold text-xl mb-2">
                5 Tax-Saving Tips Every Freelancer Should Know
              </h4>
              <p className="text-gray-600">
                Learn how freelancers can legally reduce their tax burden.
              </p>
              <a href="#" className="text-blue-700 mt-2 inline-block">
                Read more →
              </a>
            </div>
            <div className="border p-6 rounded shadow">
              <h4 className="font-bold text-xl mb-2">
                Corporate Tax Compliance: What You Need to File
              </h4>
              <p className="text-gray-600">
                Breakdown of required tax filings for businesses.
              </p>
              <a href="#" className="text-blue-700 mt-2 inline-block">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow">
              <p className="italic">
                "Tax Experts helped me claim deductions I didn’t even know
                existed. Highly professional!"
              </p>
              <p className="mt-4 font-bold">- Sarah K., Freelancer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <p className="italic">
                "They made our corporate filing effortless and strategic. Highly
                recommended."
              </p>
              <p className="mt-4 font-bold">- Ahsan R., CEO, RetailCorp</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">
                Do I need a consultant if I earn below the tax threshold?
              </h4>
              <p>
                Yes, we can help you maximize rebates and clarify your
                obligations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Can you represent me during a tax audit?
              </h4>
              <p>
                Absolutely. Our audit assistance includes representation and
                documentation prep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">How are your fees structured?</h4>
              <p>
                We offer transparent packages. Custom solutions are also
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded p-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded p-3"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded p-3"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded p-3"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>
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
