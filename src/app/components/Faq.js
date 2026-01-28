"use client";
import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What ages are your camps designed for?",
      answer:
        "Our Camp programs are suitable for players of all ages and skill levels. While our long-term Academy programs specifically target competitive players between the ages of 12 and 18, our Camps are open to adults and children over the age of 6 years. Whether you're a young child, a teenager, or an adult, our Camp programs provide a welcoming and inclusive environment for everyone to enjoy and improve their tennis skills.",
    },
    {
      question: "What do Camp program prices include?",
      answer:
        "Our Camp program prices cover tennis and fitness sessions only. Accommodation and meals are not included but can be booked when booking the camp program. The Academy's facilities are situated within the Vitality Hotel Punta in Veli Lošinj. Through our BOOK A CAMP page, you can book a camp program and accommodation in Vitality Hotel Punta. Other accommodation options are available upon request.",
    },
    {
      question: "What is the minimum number of camp days I can book?",
      answer:
        "The minimum duration for any of our camps is 6 days, spanning from Monday to Saturday. We have designed our programs to provide a comprehensive and immersive experience over the course of a week. This time frame allows participants to fully engage in the training, activities, and benefits offered by our camp.",
    },
    {
      question: "Do you offer individual tennis sessions?",
      answer:
        "Please note that in general, we do not provide individual lessons as a standalone service. However, for participants who have booked our Camp programs, there may be opportunities to book additional individual lessons or packages based on court and coach availability. Please inquire about this option through our Contact form.",
    },
    {
      question: "What is the cancellation and refund policy?",
      answer:
        "If you cancel more than 30 days prior to the start date, you're entitled to a 75% refund. Between 15-30 days: 50% refund. Less than 15 days: no refund. For accommodation, cancellations 15 days prior receive a full refund. Within 15 days of arrival: no refund. All cancellation requests must be submitted in writing to refund@ljubicic.academy.",
    },
    {
      question: "How do I sign up for Full-time Academy programs?",
      answer:
        "To sign up for Academy and Performance programs, please contact us through the Contact form on our website. Once you have submitted the form, our team will review your request and promptly get back to you with all the necessary details and a personalized offer for the package you have chosen.",
    },
    {
      question: "What language is the training held in?",
      answer:
        "The primary language used at the Academy is English. Nevertheless, certain coaches are proficient in additional languages such as Croatian, Italian, German, Slovak, and Czech. Please note that we cannot ensure the availability of a coach who speaks your preferred language.",
    },
    {
      question: "Can I rent courts at your Academy?",
      answer:
        "On-site court rentals are available. However, please note that these courts cannot be reserved in advance. They operate on a first-come, first-served basis. We recommend arriving early to secure your desired playing time. Our staff will be available to assist you with court availability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16"></div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center border-l-5 cursor-pointer border-[#066787] justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-foreground font-semibold md:font-bold text-md md:text-lg pr-8 ${openIndex === index ? "text-[#066787]" : "text-black"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8  text-2xl  rounded-full flex items-center justify-center text-primary font-semibold transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[#066787]"
                      : "text-black"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-foreground/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
