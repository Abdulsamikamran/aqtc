import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  captionText = "",
  descriptionText = "",
  containerHeight = "280px",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 10,
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <figure
      ref={ref}
      className="relative [perspective:1000px] w-full h-full"
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="rounded-xl p-6 w-[300px] h-full bg-[#066787] border border-[#066787] shadow-xl "
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        <h4 className="text-[20px] font-semibold mb-2 text-white">
          {captionText}
        </h4>
        <p className="text-lg text-white">{descriptionText}</p>
      </motion.div>
    </figure>
  );
}
