"use client";

import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import ShinyText from "./components/ shinyText";
import Magnet from "./components/magnet";
import SpotlightCard from "./components/card";
import TiltedCard from "./components/card";

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

  const colors = ["#066787", "#ffffff", "#0e98cd"];
  return (
    <div>
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

      <Header
        items={items}
        particleCount={7}
        particleDistances={[70, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={500}
        timeVariance={300}
        colors={colors}
      />

      <section className="relative h-[800px] w-full overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl leading-14 font-bold mb-4">
            Expert Tax Solutions <br /> for Individuals & Businesses
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We help you reduce your tax burden, stay compliant, and plan your
            financial future with confidence.
          </p>

          {/* <ul className="mb-6 space-y-2 text-base md:text-lg text-left max-w-md mx-auto">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Personalized tax
              strategies
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Expert support for
              audits & filings
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Transparent, fixed
              pricing
            </li>
          </ul> */}
          <Magnet padding={300} disabled={false} magnetStrength={2}>
            <a
              href="#contact"
              className="bg-custom2 hover:bg-red-500 font-semibold transition text-white px-6 py-3 rounded-lg font-medium"
            >
              Contact Us
            </a>
          </Magnet>
        </div>
      </section>

      <section id="services" className="py-16 bg-white  scroll-mt-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map(({ title, desc }) => (
              <TiltedCard
                key={title}
                captionText={title}
                descriptionText={desc}
                containerHeight="100%"
                containerWidth="100%"
                scaleOnHover={1.07}
                rotateAmplitude={8}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-16 scroll-mt-24">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/about-tax.jpg"
              alt="About Tax Consultancy"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-3xl font-semibold mb-4">About Tax Experts</h3>
            <p className="mb-4">
              With over 15 years of experience, we help individuals and
              businesses stay compliant and save on taxes.
            </p>
            <p>
              Our experts stay up-to-date with the latest tax laws and offer
              personalized strategies based on your unique needs.
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Tax Experts?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-bold text-xl mb-2">
                Experienced Professionals
              </h4>
              <p>
                Our certified consultants bring decades of industry knowledge
                and a proven track record.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Customized Solutions</h4>
              <p>
                We tailor services to your financial situation for optimal
                results.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Transparent Pricing</h4>
              <p>
                No hidden fees — only straightforward pricing you can trust.
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
