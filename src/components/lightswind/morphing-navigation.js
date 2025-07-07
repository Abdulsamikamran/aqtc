"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../lib/utils";

const MorphingNavigation = ({
  links,
  scrollThreshold = 100,
  enablePageBlur = true,
  theme = "custom",
  backgroundColor,
  textColor,
  borderColor,
  initialTop = 20,
  compactTop = 10,
  animationDuration = 0.5,
  className,
  onLinkClick,
  onMenuToggle,
  enableSmoothTransitions = true,
  customHamburgerIcon,
  disableAutoMorph = false,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  // Tailwind theme class maps
  const getThemeStyles = useCallback(() => {
    switch (theme) {
      case "dark":
        return {
          nav: "bg-black/80 border-gray-800",
          text: "text-white",
          button: "bg-black/50 border-gray-700",
        };
      case "light":
        return {
          nav: "bg-white/80 border-gray-200",
          text: "text-gray-900",
          button: "bg-white/50 border-gray-300",
        };
      case "glass":
        return {
          nav: "bg-white/10 border-white",
          text: "text-white",
          button: "bg-[#066787]/30 border-white/10",
        };
      case "custom":
      default:
        return {
          nav: "border",
          text: "",
          button: "bg-black/30 border-white/10",
        };
    }
  }, [theme]);

  const themeStyles = getThemeStyles();

  const customStyles = {
    backgroundColor:
      theme === "custom" && backgroundColor ? backgroundColor : undefined,
    color: theme === "custom" && textColor ? textColor : undefined,
    borderColor: theme === "custom" && borderColor ? borderColor : undefined,
  };

  useEffect(() => {
    if (disableAutoMorph) return;
    const handleScroll = () => {
      setIsMenuOpen(false);
      const shouldBeSticky = window.scrollY >= scrollThreshold;
      setIsSticky(shouldBeSticky);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, disableAutoMorph]);

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    setIsSticky(false);
    onMenuToggle?.(newState);
  };

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    onLinkClick?.(link);

    if (enableSmoothTransitions) {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {enablePageBlur && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ease-in-out z-40"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
          }}
        />
      )}

      <header
        ref={headerRef}
        className={cn(
          "fixed z-50 transition-all duration-500 ease-in-out",
          className
        )}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        <nav
          ref={navRef}
          className={cn(
            "flex justify-center items-center fixed left-0 right-0 mx-auto backdrop-blur-md border transition-all duration-500 ease-in-out",
            themeStyles.nav,
            themeStyles.text,
            {
              "h-[70px] w-[900px] px-5 rounded-full": !isSticky,
              "h-[70px] w-[70px] px-0 rounded-full": isSticky,
            }
          )}
          style={{
            top: isSticky ? `${compactTop}px` : `${initialTop}px`,
            transitionDelay: isSticky ? "0.5s" : "0.2s",
            ...customStyles,
          }}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              className={cn(
                "font-bold text-sm tracking-[2px]   ",
                themeStyles.text,
                {
                  "px-5 py-2.5 opacity-100 scale-100": !isSticky,
                  "px-0 py-0 opacity-0 scale-[0.3] pointer-events-none":
                    isSticky,
                }
              )}
              style={{
                transitionDelay: isSticky ? "0.2s" : "0.6s",
                letterSpacing: isSticky ? "0px" : "2px",
              }}
            >
              {link.icon && (
                <span className="inline-block mr-2">{link.icon}</span>
              )}
              {link.label}
            </a>
          ))}

          {/* Toggle Button */}
          <button
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            className={cn(
              "absolute left-0 right-0 top-0 bottom-0 m-auto w-[40px] h-[40px] rounded-full outline-none border cursor-pointer backdrop-blur-md transition-all duration-300 ease-in-out",
              themeStyles.button,
              {
                "scale-0": !isSticky,
                "scale-100": isSticky,
                "border-white/50": isSticky && theme === "glass",
              }
            )}
            style={{
              transitionDelay: isSticky ? "0.6s" : "0.2s",
            }}
          >
            {customHamburgerIcon || (
              <div className="flex flex-col items-center justify-center h-full">
                <span
                  className={cn(
                    "block h-0.5 bg-current transition-all duration-600 ease-in-out",
                    {
                      "w-[40%] scale-x-0": !isSticky,
                      "w-[40%] scale-x-100": isSticky,
                      "my-1": !isMenuOpen,
                      "my-2.5": isMenuOpen,
                    }
                  )}
                  style={{ transitionDelay: isSticky ? "0.8s" : "0s" }}
                />
                <span
                  className={cn(
                    "block h-0.5 bg-current transition-all duration-600 ease-in-out",
                    {
                      "w-[40%] scale-x-0": !isSticky,
                      "w-[40%] scale-x-100": isSticky,
                      "my-1": !isMenuOpen,
                      "my-2.5": isMenuOpen,
                    }
                  )}
                  style={{ transitionDelay: isSticky ? "0.8s" : "0s" }}
                />
              </div>
            )}
          </button>
        </nav>
      </header>

      {/* {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div
            className={cn(
              'p-8 rounded-2xl backdrop-blur-md border transition-all duration-500',
              themeStyles.nav,
              themeStyles.text
            )}
            style={customStyles}
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={cn(
                    'font-bold text-lg tracking-wide  hover:scale-105 ',
                    themeStyles.text
                  )}
                >
                  {link.icon && <span className="inline-block mr-3">{link.icon}</span>}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default MorphingNavigation;
