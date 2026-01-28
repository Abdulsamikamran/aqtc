import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    text: "This product completely transformed how our team collaborates. The intuitive design and powerful features have made our workflow so much smoother.",
  },
  {
    name: "James Chen",
    role: "Software Engineer",
    text: "I've tried many solutions, but this one stands out. The attention to detail and reliability are exceptional. Highly recommend to anyone looking for quality.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    text: "Outstanding service from start to finish. The team went above and beyond to ensure everything was perfect. Couldn't be happier with the results.",
  },
];

function Testimonial() {
  return (
    <div>
      <ThreeDScrollTriggerContainer>
        {testimonials.map((testimonial, index) => {
          return (
            <ThreeDScrollTriggerRow
              baseVelocity={10}
              direction={index % 2 === 0 ? 1 : -1}
              key={index}
            >
              <div>
                <TestimonialCard
                  text={testimonial.text}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </div>
            </ThreeDScrollTriggerRow>
          );
        })}
      </ThreeDScrollTriggerContainer>
    </div>
  );
}

export default Testimonial;
