'use client';

import Image from "next/image";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import MorphingNavigation from "@/components/lightswind/morphing-navigation";
import { useEffect, useState } from "react";

const Header = ({ items, initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100;
      const sections = items.map((item) =>
        document.querySelector(item.href)
      );

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

  // Custom onLinkClick to support scroll and active state update
  const handleLinkClick = (link) => {
    const index = items.findIndex((item) => item.href === link.href);
    setActiveIndex(index);

    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky  z-50 w-full">
      <header className="relative container mx-auto  z-10   flex justify-between items-center px-4 py-2">
        {/* Logo + Title */}
        <div className="flex items-center gap-1 cursor-default">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="h-16 w-16 object-contain"
          />
          <p className="text-[#0e98cd] text-md font-semibold">
            Management Consultants
          </p>
        </div>

        {/* Morphing Navigation */}
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

        {/* Contact Icons */}
        <div className="flex items-center gap-4">
          <ImWhatsapp color="#066787" size={20} />
          <MdOutlineEmail color="#066787" size={24} />
        </div>
      </header>
    </div>
  );
};

export default Header;
