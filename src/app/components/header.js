import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import React from "react";
import { ImWhatsapp } from "react-icons/im";

const Header = ({
  items,
  animationTime = 700,
  particleCount = 15,
  particleDistances = [30, 10],
  particleR = 300,
  timeVariance = 300,
  colors,
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", p.color);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // ignore
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
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
        const activeLi = navRef.current?.querySelectorAll("li")[index];
        if (activeLi) updateEffectPosition(activeLi);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, activeIndex]);

  return (
    <>
      <div className="sticky top-0 bg-white/70 z-50">
        <div className="w-full  text-[#066787] font-semibold items-center gap-2 p-3 flex justify-end">
          <ImWhatsapp color="#066787" />

          <p>+92 321 5118939</p>
        </div>
        <header className="relative  text-white p-2 font-semibold top-0 z-10 shadow-md overflow-hidden">
          {/* Left Sharp Edge SVG */}
          <div className="absolute left-0 top-0 h-full w-[40px] z-0">
            <svg
              width="596"
              height="105"
              viewBox="0 0 596 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H596L301.506 105H0V0Z" fill="#066787" />
            </svg>
          </div>

          {/* Right Sharp Edge SVG */}
          <div className="absolute right-0 top-0 h-full  z-0">
            <svg
              width="290"
              height="105"
              viewBox="0 0 290 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M93.9094 74L290 0L287.567 105H0L93.9094 74Z"
                fill="#066787"
              />
            </svg>
          </div>

          {/* Navbar Content */}
          <div className="container mx-auto flex justify-between items-center relative z-10">
            <div className="bg-white ">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={1000}
                height={1000}
                className="h-20 w-20"
              />
            </div>
            <div className="relative" ref={containerRef}>
              <nav className="flex relative">
                <ul
                  ref={navRef}
                  className="flex gap-8 list-none p-0 px-4 m-0 relative z-50"
                  style={{
                    color: "white",
                    textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
                  }}
                >
                  {items.map((item, index) => (
                    <li key={index}>
                      <a
                        className={`py-4 px-4 rounded-md text-[16px] font-semibold transition duration-300 text-[#0e98cd] outline-none block cursor-pointer ${
                          activeIndex === index
                            ? "bg-[#066787] text-white"
                            : "hover:bg-gray-200 hover:text-[#066787]"
                        }`}
                        onClick={(e) => handleClick(e, index)}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <span className="effect filter" ref={filterRef} />
              <span className="effect text" ref={textRef} />
            </div>
          </div>
        </header>
      </div>

      <style>
        {`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: white;
            transition: color 0.3s ease;
            font-size:16px
            fontweight: 600;
          }
          .effect.text.active {
            color: white;
          }
        
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: 40px;
            z-index: -2;
            background: black;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: #066787;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
          }
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
        li.active::after {
  opacity: 1;
  transform: scale(1);
  background: #066787;
}
li::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: #066787;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
  z-index: -1;
}
        `}
      </style>
    </>
  );
};

export default Header;
