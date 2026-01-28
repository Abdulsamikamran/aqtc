const TestimonialCard = ({ text, name, role }) => {
  return (
    <div className="bg-white mx-4 my-6 w-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#066787]">
      <div className="mb-4">
        <svg
          className="w-10 h-10 text-[#066787] opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-black mb-6 leading-relaxed text-wrap">"{text}"</p>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
        <p className="text-[#066787] text-sm font-medium">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
