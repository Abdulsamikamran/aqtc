"use client";

import Image from "next/image";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import MorphingNavigation from "@/components/lightswind/morphing-navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/components/lightswind/use-toast";
import { AnimatePresence, motion } from "framer-motion";

const Header = ({ items, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const { toast, toasts } = useToast();

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.default({
        title: `${label} copied to clipboard`,
        duration: 3000,
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100;
      const sections = items.map((item) => document.querySelector(item.href));

      const index = sections.findIndex(
        (section) =>
          section &&
          scrollY >= section.offsetTop - buffer &&
          scrollY < section.offsetTop + section.offsetHeight - buffer
      );

      if (index !== -1 && index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, activeIndex]);

  const handleLinkClick = (link) => {
    const index = items.findIndex((item) => item.href === link.href);
    setActiveIndex(index);

    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full px-6 md:px-20 flex justify-between items-center py-5 z-50 bg-transparent">
        <div className="flex items-center gap-1 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="h-16 w-16 object-contain"
          />
          <p className="text-white text-md font-semibold">
            Management Consultants
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex-1 flex justify-center">
          <MorphingNavigation
            links={items.map((item, index) => ({
              ...item,
              id: item.href,
              isActive: index === activeIndex,
            }))}
            onLinkClick={handleLinkClick}
            scrollThreshold={100}
            enableSmoothTransitions={true}
            theme="glass"
            backgroundColor="#066787"
            textColor="#066787"
            borderColor="#0e98cd"
            className="z-[60]"
          />
        </div>

        {/* Right Section with hover menus */}
        <div className="flex items-center gap-4 flex-shrink-0 relative">
          {/* WhatsApp */}
          <div
            onClick={() => handleCopy("+92 321 5118939", "Phone number")}
            className="relative group"
          >
            <ImWhatsapp color="white" size={20} className="cursor-pointer" />
            <div className="absolute right-0 top-full mt-2 px-3 py-1 text-sm bg-[#0e98cd] border-2 border-[#0e98cd] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50 whitespace-nowrap pointer-events-none group-hover:pointer-events-auto text-white font-medium">
              Click to copy +92 321 5118939
            </div>
          </div>

          {/* Email */}
          <div
            onClick={() => handleCopy("aqtcpk@gmail.com", "Email")}
            className="relative group"
          >
            <MdOutlineEmail
              color="white"
              size={24}
              className="cursor-pointer"
            />
            <div className="absolute right-0 top-full mt-2 px-3 py-1 text-sm bg-[#0e98cd] border-2 border-[#0e98cd] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50 whitespace-nowrap pointer-events-none group-hover:pointer-events-auto text-white font-medium">
              Click to copy aqtcpk@gmail.com
            </div>
          </div>
        </div>
      </header>

      {/* Toast rendering inline */}
      <div className="fixed top-4 right-4 z-[9999] space-y-2 w-[300px]">
        <AnimatePresence initial={false}>
          {toasts.map(
            (t) =>
              t.open && (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-4 rounded-md shadow-lg text-white ${
                    t.variant === "destructive"
                      ? "bg-red-500"
                      : t.variant === "success"
                      ? "bg-green-600"
                      : "bg-custom2"
                  }`}
                >
                  <div className="font-semibold">{t.title}</div>
                  {t.description && (
                    <div className="text-sm mt-1">{t.description}</div>
                  )}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
