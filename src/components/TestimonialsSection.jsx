import p1 from "../assets/testimonials/person1.jpg";
import p2 from "../assets/testimonials/person2.jpg";
import p3 from "../assets/testimonials/person3.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pratham Poojary",
      role: "Software Developer",
      image: p1,
      message:
        "Praveen is a hardworking and talented developer. His dedication and consistency are next level!",
    },
    {
      name: "Prince K",
      role: "UI/UX Designer",
      image: p2,
      message:
        "Amazing work! His attention to detail and clean code impressed our whole team.",
    },
    {
      name: "Gubbu P",
      role: "AI Engineer",
      image: p3,
      message:
        "Praveen is extremely passionate about AI/ML. His work on chatbot & deepfake projects was excellent.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h2 className="text-5xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300
        bg-clip-text text-transparent">
        What People Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xl
            hover:scale-[1.03] hover:shadow-purple-500/30 transition-all duration-300 text-center"
          >
            {/* Profile Image */}
            <img
              src={t.image}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500/40 shadow-xl"
            />

            {/* Name */}
            <h3 className="text-xl font-bold">{t.name}</h3>
            <p className="text-purple-300 text-sm mb-3">{t.role}</p>

            {/* Message */}
            <p className="text-gray-300 leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
